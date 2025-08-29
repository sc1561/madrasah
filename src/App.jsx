import React from 'react'
import ScrollProgressBar from './components/ScrollProgressBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Events from './components/Events.jsx'
import Media from './components/Media.jsx'
import News from './components/News.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <main dir="rtl" lang="ar" style={{ scrollBehavior: 'smooth' }}>
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <Events />
      <Media />
      <News />
      <Contact />
      <Footer />
      <BackToTop />

      {/* بيانات مهيكلة (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            name: "مدرستنا",
            address: {
              "@type": "PostalAddress",
              addressLocality: "مسقط",
              addressCountry: "OM"
            },
            sameAs: [
              "https://twitter.com/your-school",
              "https://facebook.com/your-school",
              "https://instagram.com/your-school",
              "https://youtube.com/@your-school"
            ]
          })
        }}
      />
    </main>
  )
}
