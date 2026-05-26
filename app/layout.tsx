import './globals.css'

export const metadata = {
  title: 'Pritam Kumar | ML Engineer',
  description:
    'Portfolio of Pritam Kumar — ML Engineer and EE undergraduate at NIT Hamirpur.',
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