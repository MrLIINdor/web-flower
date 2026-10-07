'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Flower, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="bg-flora-sandfarben text-flora-dark relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
      <div className="bg-flora-accent/10 pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]" />

      <div className="relative flex w-full max-w-md flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="group border-flora-dark/5 from-flora-gray/30 to-flora-gray/5 hover:border-flora-accent/20 relative flex w-full flex-col justify-between overflow-hidden rounded-3xl border bg-gradient-to-b p-8 shadow-xl transition-colors duration-500"
        >
          <div className="text-flora-dark group-hover:text-flora-accent pointer-events-none absolute -right-14 -bottom-14 opacity-5 transition-all duration-700 group-hover:opacity-10">
            <Flower size={320} />
          </div>

          <div className="flex items-start justify-between font-sans">
            <div className="border-flora-dark/5 bg-flora-sandfarben/80 text-flora-accent rounded-lg border px-3 py-1 text-xs font-semibold tracking-wider uppercase shadow-sm backdrop-blur-md">
              Ошибка 404
            </div>
            <Flower className="text-flora-accent h-6 w-6" />
          </div>

          <div className="relative z-10 mt-12 space-y-3 text-left">
            <h1 className="font-oswald text-3xl font-bold tracking-wide uppercase md:text-4xl">Букет не найден.</h1>
            <p className="text-flora-dark/60 font-sans text-sm leading-relaxed font-light">
              Похоже, этот сорт страниц ещё не расцвёл в нашей студии или ссылку случайно срезали секатором. Лепестков здесь не осталось.
            </p>
          </div>

          <div className="border-flora-dark/5 mt-6 border-t pt-5">
            <Link
              href="/"
              className="border-flora-dark/5 from-flora-gray/40 to-flora-gray/10 hover:border-flora-accent/20 text-flora-dark hover:text-flora-accent flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl border bg-gradient-to-b p-4 font-sans text-sm font-medium transition-all duration-300 active:scale-98"
            >
              <ArrowLeft className="h-4 w-4" />
              Вернуться в студию
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
