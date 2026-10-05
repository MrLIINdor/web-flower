'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Flower, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Главная', href: '/' },
    { name: 'Букеты', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ]

  return (
    <header className="bg-flora-sandfarben text-flora-dark border-flora-dark/5 bg-flora-sandfarben/80 relative top-0 z-50 border-b px-6 py-5 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Flower size={30} className="text-flora-accent" />

          <span className="mt-0.5 text-xl leading-none font-bold tracking-widest uppercase">
            FLORA<span className="text-flora-accent">CRAFT</span>
          </span>
        </Link>

        <nav className="font-roboto hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-flora-dark/70 hover:text-flora-accent transition-colors duration-300">
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border-flora-dark/5 from-flora-gray/40 to-flora-gray/10 hover:border-flora-accent/20 relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-b transition-colors duration-300 active:scale-95 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-flora-dark/5 from-flora-gray/95 to-flora-gray/80 hover:border-flora-accent/20 absolute top-20 right-4 z-50 w-60 overflow-hidden rounded-3xl border bg-gradient-to-b shadow-xl backdrop-blur-xl md:hidden"
          >
            <motion.nav initial={{ y: -10 }} animate={{ y: 0 }} transition={{ delay: 0.05, duration: 0.2 }} className="flex flex-col space-y-4 p-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-flora-dark/70 hover:text-flora-accent text-lg font-medium transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
