'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Scissors, ShoppingBag, Check } from 'lucide-react'

export default function ProductDiykit() {
  const kitIncludes = [
    'Свежие сезонные стебли (25-30 шт.)',
    'Профессиональный секатор FloraCraft',
    'Фирменная крафтовая бумага и джут',
    'Инструкция по уходу и сборке букета',
  ]

  return (
    <section className="bg-flora-sandfarben border-flora-dark/5 text-flora-dark border-t px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="group border-flora-dark/5 from-flora-gray/30 to-flora-gray/5 hover:border-flora-accent/20 relative grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border bg-gradient-to-br p-8 shadow-sm transition-colors duration-500 lg:grid-cols-12 lg:p-12"
        >
          <div className="bg-flora-accent/5 pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full blur-[100px]" />

          <div className="flex flex-col justify-between space-y-8 lg:col-span-7">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-flora-sandfarben border-flora-dark/5 text-flora-accent w-fit rounded-xl border p-2.5 shadow-sm">
                  <Scissors size={20} />
                </div>

                <span className="text-flora-dark/40 font-mono font-sans text-xs tracking-wider uppercase">Творчество дома</span>
              </div>

              <h2 className="font-oswald text-3xl leading-tight font-bold tracking-wide uppercase sm:text-4xl">
                Создайте свой шедевр. <br />
                <span className="text-flora-accent">Наборы для домашней флористики.</span>
              </h2>

              <p className="text-flora-dark/70 max-w-xl pt-2 font-sans text-base leading-relaxed font-light">
                Почувствуйте себя мастером-флористом. Мы собрали идеальные DIY-боксы, в которых есть всё необходимое для создания профессиональной
                интерьерной композиции своими руками. Мы бережно очищаем стебли и упаковываем их в специальный гидрогель, чтобы цветы приехали к вам в
                абсолютной свежести. Каждому цветку найдётся своё место в вашей вазе.
              </p>
            </div>

            <div className="text-flora-dark/80 grid grid-cols-1 gap-3 pt-2 font-sans text-sm sm:grid-cols-2">
              {kitIncludes.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="bg-flora-accent/10 text-flora-accent flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                    <Check size={14} strokeWidth={2.5} />
                  </div>

                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <div className="border-flora-dark/5 bg-flora-sandfarben/80 group/card hover:border-flora-accent/30 relative z-10 rounded-2xl border p-6 font-sans shadow-xl backdrop-blur-sm transition-colors duration-300">
              <div className="border-flora-dark/5 bg-flora-gray/40 relative mb-5 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border">
                <span className="text-flora-dark/30 text-xs font-light transition-transform duration-500 group-hover/card:scale-105">
                  [ Фото Флористического Бокса ]
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-oswald text-xl font-bold tracking-wide uppercase">FloraCraft DIY Box</h3>

                  <span className="text-flora-dark/40 block text-[11px] font-light">Размер: Standard / Сезонный микс</span>
                </div>
              </div>

              <div className="border-flora-dark/5 mt-5 flex items-center justify-between border-t pt-4">
                <span className="text-flora-dark text-lg font-bold">3 500 ₽</span>

                <button className="border-flora-dark/10 bg-flora-gray text-flora-dark hover:border-flora-accent hover:bg-flora-accent flex cursor-pointer items-center gap-1.5 rounded-lg border px-4 py-2 font-sans text-xs font-medium shadow-sm transition-all hover:text-white active:scale-95">
                  <ShoppingBag size={18} />
                  Заказать бокс
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
