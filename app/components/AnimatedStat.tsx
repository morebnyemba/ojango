'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

interface AnimatedStatProps {
  value: string
  className?: string
  delay?: number
}

export default function AnimatedStat({ value, className, delay = 0 }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Extract numeric part and any prefix/suffix
  const numericMatch = value.match(/([\d,.]+)/)
  const numericString = numericMatch ? numericMatch[1] : null
  const target = numericString ? parseFloat(numericString.replace(/,/g, '')) : null
  const prefix = numericString ? value.substring(0, value.indexOf(numericString)) : ''
  const suffix = numericString ? value.substring(value.indexOf(numericString) + numericString.length) : ''

  const count = useMotionValue(0)
  const spring = useSpring(count, {
    damping: 60,
    stiffness: 100,
  })

  useEffect(() => {
    if (isInView && target !== null) {
      spring.set(target)
    }
  }, [spring, isInView, target])

  const display = motion(useMotionValue(0))

  useEffect(() => {
    if (target !== null) {
      const unsubscribe = spring.on('change', (latest) => {
        display.set(Intl.NumberFormat().format(parseFloat(latest.toFixed(1))))
      })
      return unsubscribe
    }
  }, [spring, display, target])

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {target !== null ? <motion.span>{display}</motion.span> : value}
      {suffix}
    </motion.span>
  )
}