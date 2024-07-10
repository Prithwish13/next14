

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-200 p-4">
          <p>Header for blog layout</p>
        </header>
        {children}
        <footer className="bg-green-200 p-4">
          <p>Footer for blog layout</p>
        </footer>
      </body>
    </html>
  )
}
