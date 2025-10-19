'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface AnimatedStatProps {
  value: string
  className?: string
}

export default function AnimatedStat({ value, className }: AnimatedStatProps) {
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
      count.set(target)
    }
  }, [count, isInView, target])

  const display = useTransform(spring, (latest) => {
    // Handle numbers with decimals vs integers
    const isDecimal = String(target).includes('.');
    const fixedDigits = isDecimal ? 1 : 0;
    return Intl.NumberFormat().format(parseFloat(latest.toFixed(fixedDigits)));
  });

  return (
    <motion.span ref={ref} className={className} aria-live="polite">
      {prefix}
      {target !== null ? <motion.span>{display}</motion.span> : value}
      {suffix}
    </motion.span>
  )
}