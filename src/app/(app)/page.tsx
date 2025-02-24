import React from 'react'
import { Button } from "@/components/ui/button"
import { ThemeToggler } from '@/components/theme/themeToggler'

export default async function HomePage() {

  return (
    <div className="pt-[5rem]">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button className="mt-2">Click me</Button>
      <ThemeToggler />
    </div>
  )
}
