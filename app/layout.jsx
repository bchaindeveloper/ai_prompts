import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "AI Prompts",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='e'>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
            <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout