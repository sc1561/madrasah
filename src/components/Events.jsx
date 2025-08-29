import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import events from '../data/events.json'

const CATEGORIES = ['الكل', 'حفلات', 'مسابقات', 'أنشطة طلابية', 'رياضة']

function EventCard({ ev, onOpen }) {
  return (
    <motion.article
      className="rounded-2xl border p-4 bg-white/70 hover:bg-white transition cursor-pointer flex flex-col"
      style={{ borderColor: '#F6F3ED' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => onOpen(ev)}
    >
      <div className="aspect-[16/9] rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-gray-400">صورة الغلاف</span>
      </div>
      <h3 className="font-bold text-lg">{ev.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{ev.date} • {ev.category}</p>
      <p className="text-gray-700 mt-2 line-clamp-2">{ev.excerpt}</p>
      <div className="mt-auto pt-3 flex items-center gap-3">
        <span className="px-3 py-1 rounded-full text-xs" style={{ background: '#007A3D10', color: '#007A3D' }}>تفاصيل</span>
        <span className="px-3 py-1 rounded-full text-xs" style={{ background: '#C8102E10', color: '#C8102E' }}>معرض</span>
      </div>
    </motion.article>
  )
}

export default function Events() {
  const [filter, setFilter] = useState('الكل')
  const [open, setOpen] = useState(null)

  const filtered = useMemo(() => {
    if (filter === 'الكل') return events
    return events.filter((e) => e.category === filter)
  }, [filter])

  return (
    <section id="events" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">الفعاليات</h2>
          <p className="text-gray-600 mt-2">معرض متقدم مع تصفية وترتيب</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full border text-sm transition ${filter === c ? 'shadow' : 'hover:shadow'}`}
              style={{
                background: filter === c ? '#007A3D' : 'transparent',
                color: filter === c ? '#FFFFFF' : 'inherit',
                borderColor: '#007A3D'
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(ev => <EventCard key={ev.id} ev={ev} onOpen={setOpen} />)}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(null)} />
          <motion.div
            className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-extrabold">{open.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{open.date} • {open.category}</p>
                </div>
                <button onClick={() => setOpen(null)} className="px-3 py-1 rounded-xl border hover:bg-gray-50">إغلاق</button>
              </div>

              <p className="mt-4 text-gray-700">{open.excerpt}</p>

              {open.video && (
                <div className="mt-6 aspect-video rounded-xl overflow-hidden">
                  <iframe
                    title="فيديو الفعالية"
                    src={open.video}
                    loading="lazy"
                    className="w-full h-full"
                    referrerPolicy="no-referrer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}

              {open.gallery?.length > 0 && (
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {open.gallery.map((g, i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                      صورة {i + 1}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
