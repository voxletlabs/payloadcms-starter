import React from 'react'
import '@/app/globals.css'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <main>{children}</main>
  )
}


