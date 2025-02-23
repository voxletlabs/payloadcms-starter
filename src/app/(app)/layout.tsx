import React from 'react'
import '@/app/globals.css'
import Navbar from "@/components/Header"
import Footer from "@/components/Footer"

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}


