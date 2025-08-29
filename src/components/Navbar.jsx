import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`fixed top-0 inset-x-0 z-40 transition backdrop-blur bg-white/60 ${scrolled ? 'shadow-lg' : ''}`} aria-label="الشريط العلوي">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span
            className="inline-block w-9 h-9 rounded-xl"
            style={{ background: 'conic-gradient(from 45deg, #C8102E, #FFFFFF, #007A3D)' }}
          />
          <span className="font-extrabold text-lg tracking-wide">مدرستنا</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#events" className="hover:opacity-80">الفعاليات</a>
          <a href="#media" className="hover:opacity-80">معرض الوسائط</a>
          <a href="#news" className="hover:opacity-80">النشرات</a>
          <a href="#contact" className="hover:opacity-80">اتصل بنا</a>
        </div>
        <a href="#events" className="px-4 py-2 rounded-xl font-semibold" style={{ background: '#007A3D', color: '#FFFFFF' }}>
          أبرز الفعاليات
        </a>
      </div>
    </nav>
  )
}
