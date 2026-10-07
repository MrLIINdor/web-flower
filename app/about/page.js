'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Leaf, ShieldCheck, Heart, BadgePercent } from 'lucide-react'

export default function PageAbout() {
  const stats = [
    { number: '100%', label: 'Свежесть цветов' },
    { number: '3-5 дн', label: 'Стойкость букета' },
    { number: '0%', label: 'Химических красителей' },
  ]

  return (
    <main className="bg-flora-sandfarben text-flora-dark relative min-h-[85vh] overflow-hidden px-6 py-20">
      <div className="bg-flora-accent/5 pointer-events-none absolute top-1/4 -right-32 h-96 w-96 rounded-full blur-[120px]" />

      <div className="bg-flora-accent/5 pointer-events-none absolute bottom-1/4 -left-32 h-80 w-80 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl text-left">
          <span className="text-flora-accent font-mono font-sans text-xs tracking-widest uppercase">Философия FloraCraft</span>

          <h1 className="font-oswald mt-4 text-4xl leading-tight font-bold tracking-wide uppercase sm:text-5xl md:text-6xl">
            Осознанная флористика <br />
            <span className="text-flora-accent">и природный декор.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-flora-dark/5 from-flora-gray/30 to-flora-gray/5 hover:border-flora-accent/20 flex flex-col justify-between rounded-3xl border bg-gradient-to-br p-8 shadow-sm transition-colors duration-500 md:col-span-2"
          >
            <div className="flex items-center gap-3">
              <div className="bg-flora-sandfarben border-flora-dark/5 text-flora-accent rounded-xl border p-2.5 shadow-sm">
                <Leaf size={20} />
              </div>

              <span className="text-flora-dark/40 font-mono font-sans text-xs tracking-wider uppercase">Наш манифест</span>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="font-oswald text-2xl font-bold tracking-wide uppercase md:text-3xl">
                Мы создаем букеты, вдохновленные дикой природой и естественной красотой форм.
              </h2>
              <p className="text-flora-dark/70 font-sans text-base leading-relaxed font-light">
                В FLORACRAFT мы отказались от кричащей пластиковой упаковки, разноцветных целлофанов и искусственной стойкости. Наши флористы собирают
                растрепанные, живые садово-полевые букеты. Мы закупаем стебли напрямую у локальных эко-ферм и сертифицированных плантаций Голландии,
                бережно доставляя их в воду, а не в химические порошки.
              </p>
            </div>

            <div className="border-flora-dark/5 text-flora-dark/40 mt-8 flex items-center gap-2 border-t pt-4 font-sans text-xs">
              <Leaf className="text-flora-accent h-4 w-4" /> Бережная доставка в крафтовых аквабоксах
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-flora-dark/5 bg-flora-gray/20 hover:border-flora-accent/20 flex flex-col justify-between rounded-3xl border p-8 shadow-sm transition-colors duration-500 md:col-span-1"
          >
            <div className="flex items-center gap-3">
              <div className="bg-flora-sandfarben border-flora-dark/5 text-flora-accent w-fit rounded-xl border p-2.5 shadow-sm">
                <BadgePercent size={20} />
              </div>

              <span className="text-flora-dark/40 font-mono font-sans text-xs tracking-wider uppercase">В цифрах</span>
            </div>

            <div className="my-6 space-y-6">
              {stats.map((stat, i) => (
                <div key={i} className="border-flora-dark/5 flex items-baseline justify-between border-b pb-3 last:border-0 last:pb-0">
                  <span className="font-oswald text-flora-accent text-3xl font-bold">{stat.number}</span>

                  <span className="text-flora-dark/60 font-sans text-sm font-light">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-flora-sandfarben/40 border-flora-dark/5 text-flora-dark/50 rounded-2xl border p-4 text-center font-sans text-xs">
              Поставка цветов 4 раза в неделю
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-flora-dark/5 from-flora-gray/30 to-flora-gray/5 hover:border-flora-accent/20 flex flex-col justify-between rounded-3xl border bg-gradient-to-b p-6 shadow-sm transition-colors duration-500"
          >
            <div className="flex items-center gap-3">
              <div className="bg-flora-sandfarben border-flora-dark/5 text-flora-accent w-fit rounded-xl border p-2.5 shadow-sm">
                <Heart size={20} />
              </div>

              <span className="text-flora-dark/40 font-mono font-sans text-xs tracking-wider uppercase">Без компромиссов</span>
            </div>

            <div className="mt-12">
              <h3 className="font-oswald text-xl font-bold tracking-wide uppercase">Честный состав</h3>

              <p className="text-flora-dark/60 mt-2 font-sans text-sm leading-relaxed font-light">
                Каждый букет собирается строго под ваш заказ, чтобы избежать застоя цветов в холодильнике. Используем биоразлагаемую крафтовую бумагу
                и натуральный джут.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-flora-dark/5 from-flora-gray/30 to-flora-gray/5 group hover:border-flora-accent/20 flex flex-col justify-between rounded-3xl border bg-gradient-to-b p-6 shadow-sm transition-colors duration-500 md:col-span-2"
          >
            <div className="flex items-center gap-3">
              <div className="bg-flora-sandfarben border-flora-dark/5 text-flora-accent rounded-xl border p-2.5 shadow-sm">
                <Eye size={20} />
              </div>

              <span className="text-flora-dark/40 font-mono font-sans text-xs tracking-wider uppercase">Прозрачность</span>
            </div>

            <div className="mt-8">
              <h3 className="font-oswald text-xl font-bold tracking-wide uppercase transition-colors duration-300">Мастерская за стеклом</h3>

              <p className="text-flora-dark/60 mt-2 font-sans text-sm leading-relaxed font-light">
                Наш бутик спроектирован по принципу открытой лаборатории. В центре зала стоит массивный бетонный стол, за которым флористы собирают
                авторские заказы. Вы можете выпить чашку чая и вживую наблюдать за процессом зачистки стеблей, калибровки бутонов по цвету и созданием
                цветочной геометрии.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
