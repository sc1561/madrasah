import React from 'react'

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex items-center gap-2 px-4 py-2 rounded-xl border hover:bg-gray-50 transition"
      style={{ borderColor: '#F6F3ED' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="w-5 h-5" aria-hidden>{children}</span>
      <span className="text-sm">{label}</span>
    </a>
  )
}

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.27 4.27 0 0 0-7.28 3.9A12.1 12.1 0 0 1 3.15 5.16a4.27 4.27 0 0 0 1.32 5.7 4.23 4.23 0 0 1-1.93-.53v.05a4.27 4.27 0 0 0 3.43 4.18 4.28 4.28 0 0 1-1.93.07 4.27 4.27 0 0 0 3.98 2.96A8.56 8.56 0 0 1 2 19.54 12.09 12.09 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.36-.02-.54A8.34 8.34 0 0 0 22.46 6z"/></svg>
)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.62-1.3 1.26V12h2.2l-.35 3h-1.85v7A10 10 0 0 0 22 12z"/></svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-2.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
)
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.7 20.5 12 20.5 12 20.5s7.3 0 9.4-.6a3 3 0 0 0 2.1-2.1 31.2 31.2 0 0 0 .5-5.8 31.2 31.2 0 0 0-.5-5.8zM9.75 15.02v-6l6 3-6 3z"/></svg>
)

export default function Contact() {
  return (
    <section id="contact" className="py-16" style={{ background: '#F6F3ED' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">اتصل بنا</h2>
          <p className="text-gray-600 mt-2">نموذج تواصل + روابط السوشيال</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <form
            action="#"
            method="POST"
            className="rounded-2xl border p-6 bg-white/80"
            style={{ borderColor: '#F6F3ED' }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">الاسم</label>
                <input required name="name" className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring" style={{ borderColor: '#F6F3ED' }} />
              </div>
              <div>
                <label className="block text-sm mb-1">البريد الإلكتروني</label>
                <input required type="email" name="email" className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring" style={{ borderColor: '#F6F3ED' }} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm mb-1">الموضوع</label>
                <input name="subject" className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring" style={{ borderColor: '#F6F3ED' }} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm mb-1">الرسالة</label>
                <textarea required name="message" rows="5" className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring resize-none" style={{ borderColor: '#F6F3ED' }} />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <button type="submit" className="px-5 py-3 rounded-2xl font-semibold shadow hover:shadow-lg" style={{ background: '#007A3D', color: '#FFFFFF' }}>إرسال</button>
                <p className="text-xs text-gray-500">لن نشارك بياناتك مع أي طرف ثالث.</p>
              </div>
            </div>
          </form>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border p-6 bg-white/80" style={{ borderColor: '#F6F3ED' }}>
              <h3 className="font-bold text-lg">روابط وسائل التواصل</h3>
              <p className="text-sm text-gray-600 mt-1">تابعوا حسابات المدرسة الرسمية.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <SocialButton href="#" label="تويتر"><TwitterIcon /></SocialButton>
                <SocialButton href="#" label="فيسبوك"><FacebookIcon /></SocialButton>
                <SocialButton href="#" label="إنستغرام"><InstagramIcon /></SocialButton>
                <SocialButton href="#" label="يوتيوب"><YouTubeIcon /></SocialButton>
              </div>
            </div>

            <div className="rounded-2xl border p-6 bg-white/80" style={{ borderColor: '#F6F3ED' }}>
              <h3 className="font-bold text-lg">معلومات الاتصال</h3>
              <ul className="mt-3 text-gray-700 space-y-2 text-sm">
                <li>الهاتف: 0000 000 92+</li>
                <li>البريد: info@example.edu</li>
                <li>العنوان: مسقط، سلطنة عُمان</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
