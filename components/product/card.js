'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

export default function ProductCard({ data, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group border-flora-dark/5 from-flora-gray/30 to-flora-gray/5 hover:border-flora-accent/20 flex flex-col justify-between rounded-2xl border bg-gradient-to-b p-5 shadow-sm transition-colors duration-300"
    >
      <div>
        <div className="border-flora-dark/5 bg-flora-sandfarben/50 relative mb-4 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border">
          <span className="text-flora-dark/20 font-sans text-xs transition-transform duration-500 group-hover:scale-105">[ Фото букета ]</span>
        </div>

        <span className="text-flora-dark/40 font-sans text-xs tracking-wide">{data.size}</span>

        <h3 className="font-oswald group-hover:text-flora-accent mt-1.5 text-lg font-bold tracking-wider uppercase transition-colors duration-300">
          {data.title}
        </h3>

        <p className="text-flora-dark/60 mt-1 line-clamp-2 font-sans text-sm leading-relaxed font-light">{data.desc}</p>
      </div>

      <div className="border-flora-dark/5 mt-6 flex items-center justify-between border-t pt-4">
        <span className="text-flora-dark font-sans text-base font-bold">{data.price}</span>

        <button className="border-flora-dark/10 bg-flora-sandfarben text-flora-dark hover:border-flora-accent hover:bg-flora-accent flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-2 font-sans text-xs font-medium shadow-sm transition-all hover:text-white active:scale-95">
          <ShoppingBag size={18} /> В корзину
        </button>
      </div>
    </motion.div>
  )
}
