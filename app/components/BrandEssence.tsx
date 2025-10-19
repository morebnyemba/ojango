'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function BrandEssence() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-25%', '25%'])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-primary-200 relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          y,
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary-400) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center">
          {/* Animated Circle Logo */}
          <motion.div 
            className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-primary-600/50 flex items-center justify-center relative"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <motion.div 
              className="w-24 h-24 rounded-full border-2 border-gold-400 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-700/50 flex items-center justify-center">
                <span className="text-primary-100 font-bold text-sm">OJANGO</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Circle Has No End.<br />
            Neither Does Your Potential.
          </motion.h2>

          <motion.p 
            className="text-xl text-primary-300 mb-8 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our symbol is a circle. It represents unity, wholeness, and infinite cycles of growth. 
            Ojango was created to break down silos, to connect the fragmented pieces of our economies 
            into a single, powerful whole.
          </motion.p>

          <motion.div 
            className="text-2xl font-light text-primary-200 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>✨ <span className="font-semibold text-gold-400">Built to unify.</span> Connecting Africa's digital economy</p>
            <p>🚀 <span className="font-semibold text-gold-400">Built to scale.</span> Growing with your ambitions</p>
            <p>🌍 <span className="font-semibold text-gold-400">Built for generations.</span> Creating lasting impact</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}