'use client'

import React from 'react'
import ProductCard from './card'

export default function ProductPopular() {
  const floralHits = [
    {
      title: 'Оливковый рассвет',
      price: '4 200 ₽',
      size: 'd: 35 см',
      desc: 'Авторский растрепанный букет с пионовидными розами, белой эустомой и веточками свежего эвкалипта.',
    },
    {
      title: 'Сканди Мист',
      price: '3 800 ₽',
      size: 'd: 30 см',
      desc: 'Минималистичная композиция в песочных тонах из сухоцветов, пампасной травы и хлопка.',
    },
    {
      title: 'Полевой ветер',
      price: '4 900 ₽',
      size: 'd: 40 см',
      desc: 'Воздушный объемный букет из садовых ромашек, дельфиниума и нежной полевой астильбы.',
    },
    {
      title: 'Нежная олива',
      price: '5 500 ₽',
      size: 'd: 38 см',
      desc: 'Премиальные белые пионы в сочетании с брунией и фирменной оливковой зеленью.',
    },
  ]

  return (
    <section className="bg-flora-sandfarben text-flora-dark px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-flora-accent font-mono font-sans text-xs tracking-widest uppercase">Выбор наших гостей</span>
          <h2 className="font-oswald mt-3 text-3xl font-bold tracking-wide uppercase md:text-4xl">Популярные композиции</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {floralHits.map((item, idx) => (
            <ProductCard key={idx} data={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
