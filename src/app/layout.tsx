import './globals.css'

export const metadata = {
  title: 'Drozd Test',
  description: 'Drozd Test: Ivanenko ALexey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
