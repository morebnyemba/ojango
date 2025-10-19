'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50/20 to-background dark:from-primary-900/10 dark:to-primary-900 pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build Bold.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-500">
                Trade Free.
              </span>{' '}
              Thrive Together.
            </motion.h1>
            
            <motion.p 
              className="text-xl text-primary-600 dark:text-primary-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The African-made Operating System empowering entrepreneurs, creators & markets to connect, trade & grow — all in one platform.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="group bg-primary-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                See How It Works
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row items-center gap-6 text-sm text-primary-500 dark:text-primary-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-primary-500 to-gold-400 rounded-full border-2 border-background"></div>
                  ))}
                </div>
                <span>Join 1,000+ builders</span>
              </div>
              <div className="h-4 w-px bg-primary-300 dark:bg-primary-700 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-gold-400">★</span>
                  ))}
                </div>
                <span>Rated 5/5 by early users</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl p-8 shadow-2xl shadow-primary-500/20">
              {/* Dashboard Mockup */}
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-200 dark:bg-primary-600/50 rounded"></div>
                    <div className="w-20 h-4 bg-primary-200 dark:bg-primary-600/50 rounded"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-primary-200 dark:bg-primary-600/50 rounded"></div>
                    <div className="w-6 h-6 bg-primary-200 dark:bg-primary-600/50 rounded"></div>
                    <div className="w-6 h-6 bg-primary-200 dark:bg-primary-600/50 rounded"></div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-primary-50 dark:bg-primary-700/30 rounded-lg p-3">
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-600/40 rounded-lg mb-2"></div>
                      <div className="w-12 h-3 bg-primary-200 dark:bg-primary-600/40 rounded mb-1"></div>
                      <div className="w-8 h-4 bg-primary-300 dark:bg-primary-500/40 rounded"></div>
                    </div>
                  ))}
                </div>
                
                {/* Activity */}
                <div className="space-y-3">
                  <div className="w-24 h-3 bg-primary-200 dark:bg-primary-600/40 rounded"></div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-200 dark:bg-primary-600/40 rounded-full"></div>
                      <div className="flex-1 space-y-2">
                        <div className="w-32 h-3 bg-primary-200 dark:bg-primary-600/40 rounded"></div>
                        <div className="w-24 h-2 bg-primary-100 dark:bg-primary-700/40 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-background rounded-xl p-4 shadow-lg border dark:border-primary-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-16 h-3 bg-primary-200 dark:bg-primary-600/50 rounded"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-lg border dark:border-primary-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-gold-400 rounded-lg"></div>
                <div className="w-20 h-3 bg-primary-200 dark:bg-primary-600/50 rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}