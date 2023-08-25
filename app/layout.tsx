import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '教育部网络教育名师工作室',
  description: '杭州电子科技大学名师工作室官网,教育部网络教育名师工作室',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/ico"
          href="https://www.hdu.edu.cn/_upload/tpl/00/1e/30/template30/images/favicon.ico"
        />
      </head>
      <body
      //  className={inter.className}
      >
        {children}
      </body>
    </html>
  )
}
