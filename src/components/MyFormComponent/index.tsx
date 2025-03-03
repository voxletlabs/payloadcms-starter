'use client'

import { RichText } from '@payloadcms/richtext-lexical/react'
import { useEffect, useRef } from 'react'

import { useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import LoadingScreen from '../LoadingScreen'
import { Button } from '../ui/button'
import { Loader } from 'lucide-react'

const MyFormComponent = ({ formId }: { formId: string }) => {
  const [cmsForm, setCmsForm] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)

  // 1) get the form from payload
  useEffect(() => {
    // Fetch the form configuration
    fetch(`/api/forms/${formId}`)
      .then((res) => res.json())
      .then((data) => {
        setCmsForm(data)
        console.log('cmsForm', data)
      })
      .catch((err) => setError('Error loading form'))
  }, [formId])

  // 2) render the form based on field types

  // handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    let fileUploadedId = null

    e.preventDefault()
    setSubmitting(true);
    const formData = new FormData(e.currentTarget)

    // get the file from the form data, if it exists
    const file = formData.get('file')
    if (file) {
      console.log('file', file)
      // upload the file to payload
      const formDataToSend = new FormData()
      formDataToSend.append('file', file as File)
      formDataToSend.append(
        '_payload',
        JSON.stringify({
          alt: (file as File).name,
        }),
      )
      const response = await fetch('/api/media', {
        method: 'POST',
        body: formDataToSend,
      })
      console.log('response', response)
      if (!response.ok) {
        throw new Error('Failed to upload file')
      }
      const data = await response.json()
      console.log('data', data)
      debugger
      fileUploadedId = data?.doc?.id
      // add the file id to the form data
    }

    // delete the file from the form data, so it's not sent to payload,
    // because it's already uploaded
    if (file) {
      formData.delete('file')
    }

    // convert the form data to a json object, for fields that are not files
    const dataToSend = Array.from(formData.entries()).map(([name, value]) => ({
      field: name,
      value: value.toString(),
    }))

    // send the form data to payload
    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        body: JSON.stringify({
          form: formId,
          submissionData: dataToSend,
          ...(cmsForm?.hasAttachment && fileUploadedId
            ? { file: fileUploadedId }
            : {}),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setSuccess(true);
      } else {
        setError('Form submission failed');
        setSuccess(false);
      }
    } catch (err) {
      setError('Form submission failed');
      setSuccess(false);
    } finally {
      setSubmitting(false);
    }

    // reset the form
    formRef.current?.reset()
    fileUploadedId = null
  }

  if (!cmsForm) return <LoadingScreen />

  if (success && cmsForm.confirmationMessage) {
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
    return (
      <div className='p-4 border rounded-xl h-max'>
        <RichText data={cmsForm.confirmationMessage} />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} className='p-5 md:p-10 border rounded-xl flex flex-col gap-[2rem]'>
      {cmsForm.fields.map((field: any) => (
        <div
          key={field.id}
          className='flex flex-col gap-3'
        >
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.blockType === "textarea" ? (
            <Textarea
              name={field.name}
              id={field.name}
              style={{ width: field.width ? `${field.width}%` : '100%' }}
              required={field.required}
            />
          ) : (
            <Input
              type={field.blockType}
              name={field.name}
              id={field.name}
              style={{ width: field.width ? `${field.width}%` : '100%' }}
              required={field.required}
            />
          )}
        </div>
      ))}
      {cmsForm.hasAttachment && (
        <div
          className='my-[1rem] flex flex-col gap-[0.5rem]'
        >
          <Label htmlFor="file">{cmsForm.hasAttachmentLabel || 'Attachment'}</Label>
          <Input type="file" name="file" id="file" />
        </div>
      )}
      <Button type="submit" disabled={submitting} className='w-full'>
        {submitting && (
          <Loader className="h-4 w-4 animate-spin" />
        )}
        Submit
      </Button>
    </form>
  )
}

export default MyFormComponent