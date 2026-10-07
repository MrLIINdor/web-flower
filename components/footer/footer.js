'use client'

import React from 'react'
import Link from 'next/link'
import { Flower, MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: 'Главная', href: '/' },
    { name: 'Каталог букетов', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ]

  return (
    <footer className="border-flora-dark/5 bg-flora-sandfarben text-flora-dark mt-auto w-full border-t font-sans">
      <div className="mx-auto flex max-w-6xl flex-col px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-16">
          <div className="space-y-4">
            <Link href="/" className="group inline-flex items-center gap-2">
              <div className="border-flora-dark/5 bg-flora-gray text-flora-accent group-hover:border-flora-accent/40 rounded-xl border p-2 transition-colors duration-300">
                <Flower className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <span className="font-oswald mt-0.5 text-lg leading-none font-bold tracking-widest uppercase">
                FLORA<span className="text-flora-accent">CRAFT</span>
              </span>
            </Link>
            <p className="text-flora-dark/50 max-w-xs text-sm leading-relaxed font-light">
              Студия осознанной флористики и природного декора. Создаем живые растрепанные букеты из фермерских цветов и собираем DIY-боксы для
              творчества дома.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-oswald text-flora-dark/90 text-base font-bold tracking-wider uppercase">Студия</h4>
            <nav className="flex flex-col space-y-2.5 text-sm font-medium">
              {links.map((link) => (
                <Link key={link.name} href={link.href} className="text-flora-dark/60 hover:text-flora-accent w-fit transition-colors duration-300">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-oswald text-flora-dark/90 text-base font-bold tracking-wider uppercase">Контакты</h4>
            <ul className="text-flora-dark/60 space-y-3 text-sm font-light">
              <li className="flex items-center gap-2.5">
                <MapPin className="text-flora-accent h-4 w-4 shrink-0" />
                <span>ул. Ремесленная, д. 12, Москва</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="text-flora-accent h-4 w-4 shrink-0" />
                <span>Ежедневно: с 09:00 до 21:00</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="text-flora-accent h-4 w-4 shrink-0" />
                <a href="tel:+79991234567" className="hover:text-flora-accent font-medium transition-colors duration-300">
                  +7 (999) 123-45-67
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-flora-dark/5 text-flora-dark/30 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs font-light sm:flex-row">
          <div> MrLIINdor - All Rights Reserved © {currentYear} </div>
        </div>
      </div>
    </footer>
  )
}
