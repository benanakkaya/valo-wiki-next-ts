import Header from './components/Header/Header'
import './globals.css'




export const metadata = {
  title: 'Valorant Wiki',
  description: 'Valorant Wiki Page',
  icons: {
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-valorant-3251602-2724649.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-roboto bg-dark ' >
        <Header />
        <div className='md:px-12 md:py-6 px-6 py-3'>
        {children}
        </div>
        </body>
    </html>
  )
}
