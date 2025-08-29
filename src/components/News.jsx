import React from 'react'
import { motion } from 'framer-motion'
import news from '../data/news.json'

export default function News() {
  return (
    <section id="news" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">النشرات الإعلانية</h2>
          <p className="text-gray-600 mt-2">أخبار مدرسية قصيرة</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map(n => (
            <motion.article
              key={n.id}
              className="rounded-2xl border p-5 bg-white/70 hover:bg-white transition"
              style={{ borderColor: '#F6F3ED' }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <time className="text-xs text-gray-500">{n.date}</time>
              <h3 className="mt-2 font-extrabold text-lg">{n.title}</h3>
              <p className="mt-2 text-gray-700">{n.excerpt}</p>
              <div className="mt-4">
                <a href="#" className="text-sm font-semibold" style={{ color: '#007A3D' }}>اقرأ المزيد →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
