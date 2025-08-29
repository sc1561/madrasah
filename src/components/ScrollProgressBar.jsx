import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 h-1 z-50"
      style={{ width, background: '#C8102E' }} // omanRed
    />
  )
}
