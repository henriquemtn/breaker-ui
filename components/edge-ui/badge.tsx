import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Badge() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-8 mb-2 md:mb-8"
  >
    <Link href="#" className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border bg-background">
      <Sparkles className="w-3 h-3" />
      <span className='text-xs'>Introducing Dev Tool</span>
      <ArrowRight className="w-3 h-3" />
    </Link>
  </motion.div>
  )
}
