import { Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'

const fontOswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-oswald',
})

export const metadata = {
  title: 'FLORACRAFT | Авторская флористика & Декор',
  description: 'Эстетичные букеты из фермерских цветов, комнатные растения и крафтовые элементы декора для вашего дома.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${fontOswald.variable} h-full`}>
      <body className="bg-flora-sandfarben text-flora-dark flex min-h-full flex-col">
        <Header />
        {children}
      </body>
    </html>
  )
}
