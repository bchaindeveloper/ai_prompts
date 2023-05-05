import '@styles/globals.css'

export const metadata = {
    title: "AI Prompts",
    description: "Discover & Share AI Prompts"
}

const RootLayout = () => {
  return (
    <html lang='e'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout