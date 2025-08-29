import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10" style={{ background: '#0B1C1F', color: '#FFFFFF' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-90">© {new Date().getFullYear()} — مدرستنا. كل الحقوق محفوظة.</p>
          <div className="flex items-center gap-4 opacity-90 text-sm">
            <a href="#" className="hover:opacity-70">سياسة الخصوصية</a>
            <span aria-hidden>•</span>
            <a href="#" className="hover:opacity-70">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
