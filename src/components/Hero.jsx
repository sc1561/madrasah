import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function OmanRibbons() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 40])
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div
        className="absolute -left-10 -right-10 top-14 h-24 opacity-30"
        animate={{ x: [0, 20, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ y: y1, background: 'linear-gradient(90deg, #C8102E, #FFFFFF)' }}
      />
      <motion.div
        className="absolute -left-10 -right-10 top-36 h-24 opacity-30"
        animate={{ x: [0, -30, 15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{ y: y2, background: 'linear-gradient(90deg, #FFFFFF, #007A3D)' }}
      />
      <motion.div
        className="absolute -left-10 -right-10 top-60 h-24 opacity-30"
        animate={{ x: [0, 15, -25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        style={{ y: y3, background: 'linear-gradient(90deg, #007A3D, #C8102E)' }}
      />
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <header id="home" ref={ref} className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden" style={{ background: '#F6F3ED' }}>
      <OmanRibbons />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div style={{ y }}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black leading-[1.1]">تعليم ملهم، تجربة بصرية متقدمة</h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-700">
                موقع مدرسي حديث يعرض الفعاليات، المعارض، والفيديوهات بأنيميشن سلس وتأثيرات عند التمرير — مع تركيز على سرعة الأداء وSEO.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#events" className="px-5 py-3 rounded-2xl font-semibold shadow hover:shadow-lg transition" style={{ background: '#C8102E', color: '#FFFFFF' }}>استكشف الفعاليات</a>
                <a href="#media" className="px-5 py-3 rounded-2xl font-semibold border" style={{ borderColor: '#007A3D' }}>مشاهدة المعرض</a>
              </div>
              <ul className="mt-6 text-sm text-gray-600 space-y-1 list-disc pr-5">
                <li>Animations متجاوبة + Scroll-triggered</li>
                <li>تكامل مع يوتيوب/فيميو + روابط السوشيال</li>
                <li>جاهز للنشر على GitHub Pages</li>
              </ul>
            </div>

            <motion.div
              className="relative h-64 sm:h-80 md:h-full min-h-72 rounded-3xl border overflow-hidden"
              style={{ borderColor: '#007A3D' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(1200px 400px at 20% 10%, #FFFFFF 0%, transparent 40%),
                               radial-gradient(1000px 300px at 80% 80%, #007A3D22 0%, transparent 60%),
                               radial-gradient(900px 300px at 60% 20%, #C8102E15 0%, transparent 70%),
                               linear-gradient(135deg, #0B1C1F, #102A2E)`
                }}
              />
              <motion.div
                className="absolute inset-0 mix-blend-screen opacity-90"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                style={{ backgroundImage: 'repeating-linear-gradient(60deg, #FFFFFF11 0 2px, transparent 2px 10px)' }}
              />
              <motion.div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full shadow-2xl"
                  animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.06, 0.98, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    background: 'conic-gradient(from 0deg, #C8102E, #FFFFFF, #007A3D, #FFFFFF, #C8102E)',
                    boxShadow: '0 20px 60px #C8102E33, 0 10px 30px #007A3D22'
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div style={{ scale }} className="absolute -bottom-12 left-0 right-0 h-12" aria-hidden>
        <svg width="100%" height="100%" viewBox="0 0 100 10" preserveAspectRatio="none">
          <path d="M0 0 C 40 15, 60 -5, 100 10 L 100 10 L 0 10 Z" fill="#FFFFFF" />
        </svg>
      </motion.div>
    </header>
  )
}
