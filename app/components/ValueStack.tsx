'use client'

import { motion } from 'framer-motion'
import { Zap, Globe, Shield, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "Build at the Speed of Thought",
    description: "Launch your digital storefront or marketplace in minutes, not months. No code, no complexity."
  },
  {
    icon: Globe,
    title: "Woven into Africa's Fabric",
    description: "Built for our unique challenges—fragmented logistics, diverse payments, local communities."
  },
  {
    icon: Shield,
    title: "You Own Your Empire",
    description: "100% control over your data, brand, and revenue. No middlemen, no limits."
  }
]

const stats = [
  { number: "1,000+", label: "Early Builders" },
  { number: "50+", label: "Countries" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" }
]

export default function ValueStack() {
  return (
    <section className="py-20 bg-background dark:bg-primary-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-6">
            We didn't build another marketplace.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-500">
              We built freedom.
            </span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group p-8 rounded-2xl border border-primary-200/50 dark:border-primary-800 hover:border-transparent hover:shadow-2xl hover:shadow-primary-100/50 dark:hover:shadow-primary-800/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-4">{feature.title}</h3>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="bg-gradient-to-r from-primary-50/50 to-gold-300/10 dark:from-primary-800/20 dark:to-gold-500/10 rounded-2xl p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-primary-600 dark:text-primary-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}