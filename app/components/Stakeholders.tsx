'use client'

import { motion } from 'framer-motion'
import { Users, Globe, Building } from 'lucide-react'

const stakeholders = [
  {
    icon: Users,
    title: "Entrepreneurs & Creators",
    description: "From a single product to a curated brand, unleash your vision. Sell directly to your community and keep your independence.",
    color: "from-primary-500 to-primary-600"
  },
  {
    icon: Globe,
    title: "Community Leaders",
    description: "Mobilize your group. Launch a hyper-local buying club, farmers' cooperative, or artisans' network. Strengthen your local economy.",
    color: "from-gold-400 to-gold-500"
  },
  {
    icon: Building,
    title: "Institutions & NGOs",
    description: "Power your programs. Create sustainable trade ecosystems, support SMEs, and drive economic development with a purpose-built platform.",
    color: "from-primary-700 to-primary-800"
  }
]

export default function Stakeholders() {
  return (
    <section id="stakeholders" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-6">
            Who is Building with Ojango?
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto">
            Designed for every builder in Africa's growing digital economy
          </p>
        </motion.div>

        {/* Stakeholder Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-50/50 to-background dark:from-primary-900/20 dark:to-background border border-primary-200/50 dark:border-primary-800 group-hover:shadow-2xl group-hover:shadow-primary-100/50 dark:group-hover:shadow-primary-800/50 transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${stakeholder.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stakeholder.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-4">{stakeholder.title}</h3>
                <p className="text-primary-600 dark:text-primary-300 leading-relaxed">{stakeholder.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}