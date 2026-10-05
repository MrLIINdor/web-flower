import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'

const fontRoboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
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
    <html lang="ru" className={`${fontRoboto.variable} h-full`}>
      <body className="bg-flora-sandfarben text-flora-dark flex min-h-full flex-col">
        <Header />
        {children}
      </body>
    </html>
  )
}
