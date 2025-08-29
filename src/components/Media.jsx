import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import gallery from '../data/gallery.json'

export default function Media() {
  const kinds = ['الكل', 'فعاليات', 'فصول', 'رياضة']
  const [filter, setFilter] = useState('الكل')

  const list = useMemo(() => {
    if (filter === 'الكل') return gallery
    return gallery.filter(g => g.kind === filter)
  }, [filter])

  return (
    <section id="media" className="py-16" style={{ background: '#F6F3ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">معرض الوسائط</h2>
          <p className="text-gray-600 mt-2">صور + فيديوهات (يوتيوب/فيميو)</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {kinds.map(k => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`px-4 py-2 rounded-full border text-sm transition ${filter === k ? 'shadow' : 'hover:shadow'}`}
              style={{
                background: filter === k ? '#C8102E' : 'transparent',
                color: filter === k ? '#FFFFFF' : 'inherit',
                borderColor: '#C8102E'
              }}
            >{k}</button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(g => (
            <motion.figure
              key={g.id}
              className="rounded-2xl overflow-hidden border bg-white/70"
              style={{ borderColor: '#F6F3ED' }}
              whileHover={{ y: -4 }}
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center text-gray-400">
                {g.caption}
              </div>
              <figcaption className="p-3 text-sm text-gray-600">نوع: {g.kind}</figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="aspect-video rounded-2xl overflow-hidden border" style={{ borderColor: '#F6F3ED' }}>
            <iframe
              title="فيديو توضيحي 1"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              loading="lazy"
              className="w-full h-full"
              referrerPolicy="no-referrer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden border" style={{ borderColor: '#F6F3ED' }}>
            <iframe
              title="فيديو توضيحي 2"
              src="https://player.vimeo.com/video/76979871?h=8272103f6e"
              loading="lazy"
              className="w-full h-full"
              referrerPolicy="no-referrer"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
