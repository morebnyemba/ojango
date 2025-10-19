'use client'

import { motion } from 'framer-motion'
import { Store, Shield, Truck, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Store,
    title: "Multi-Vendor Store Builder",
    description: "Launch a single store or full marketplace where others can sell under your brand. Complete customization."
  },
  {
    icon: Shield,
    title: "Escrow & Secure Trade",
    description: "Trade with confidence. Funds held securely until all parties are satisfied. Trust, built-in."
  },
  {
    icon: Truck,
    title: "Smart Logistics & Orders",
    description: "Streamline fulfillment with integrated order management, tracking, and local delivery partners."
  },
  {
    icon: CreditCard,
    title: "Unified Payments & Finance",
    description: "Accept mobile money, bank transfers, cards. Built-in analytics and financial tools."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-primary-50/50 dark:bg-primary-900/20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-6">
            Everything You Need to Power Your Trade Ecosystem
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto">
            All-in-one platform designed for African commerce
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-background hover:shadow-2xl hover:shadow-primary-100/50 dark:hover:shadow-primary-800/50 transition-all duration-300 border border-primary-200/50 dark:border-primary-800"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary-900 dark:text-primary-100 mb-4">{feature.title}</h3>
              <p className="text-primary-600 dark:text-primary-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-primary-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-900 transition-colors shadow-lg">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  )
}