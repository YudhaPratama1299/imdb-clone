'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}: any) {
  // them provider untuk membuat dark mode
  // dibuat dengan component terpisah karena ThemeProvider hanya bisa digunakan di sisi client server
  // kalau dibuat langsung di root layout maka semua component akan dirender di sisi client 
  return (
    <ThemeProvider enableSystem={true} attribute='class'>{children}</ThemeProvider>
  )
}
