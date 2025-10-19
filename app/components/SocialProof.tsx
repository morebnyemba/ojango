'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Chidi E.",
    role: "Fabric Marketplace Owner",
    content: "With Ojango, I launched my fabric marketplace in a weekend. The escrow feature made my customers trust me instantly. This is a game-changer.",
    avatar: "CE"
  },
  {
    name: "Naledi M.",
    role: "Agri-Cooperative Leader",
    content: "We finally have a platform that understands our needs. We control our sales and our story. Thank you, Ojango!",
    avatar: "NM"
  },
  {
    name: "TechInAfrica Blog",
    role: "Industry Expert",
    content: "Ojango represents the next wave of African tech: platforms that empower, not extract.",
    avatar: "TA"
  }
]

export default function SocialProof() {
  return (
    <section id="waitlist" className="py-20 bg-background dark:bg-primary-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-8">
              Join a Movement of Builders
            </h2>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-primary-50/50 dark:bg-primary-800/30 rounded-2xl p-6 relative"
                >
                  <Quote className="w-8 h-8 text-primary-300 dark:text-primary-700 absolute top-4 right-4" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 dark:text-primary-100">{testimonial.name}</h4>
                      <p className="text-primary-600 dark:text-primary-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-primary-700 dark:text-primary-200 leading-relaxed">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>

            {/* Rating */}
            <motion.div 
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-primary-600 dark:text-primary-300">Rated 5/5 by early users</span>
            </motion.div>
          </motion.div>

          {/* Waitlist CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Legacy?
            </h3>
            <p className="text-primary-200 text-lg mb-8 leading-relaxed">
              Be among the first to access the tools that will define the future of African commerce. 
              Join our growing community of innovators.
            </p>

            <div className="space-y-4">
              <a href="#waitlist" className="block w-full bg-white text-primary-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-100 transition-colors shadow-lg">
                Join 1,000+ Builders on Waitlist
              </a>
              <p className="text-primary-300 text-sm">
                Get early access, exclusive updates, and a founder-level welcome when we launch.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-primary-500/30">
              <div>
                <div className="text-2xl font-bold">1,000+</div>
                <div className="text-primary-300 text-sm">Builders</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-primary-300 text-sm">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-primary-300 text-sm">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}