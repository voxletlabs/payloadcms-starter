import React from 'react'
import MainLayout from '@/layouts/mainLayouts'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}


