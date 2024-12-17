"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Badge from "./badge"

export function AnimatedHero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Banner */}
      <Badge />

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Heading */}
        <motion.h1 
          variants={item}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          UI library for
          <br />
          Design Engineers
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={item}
          className="text-xl md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          free and open-source animated components built with{" "}
          <span className="font-semibold text-foreground">
            React, TypeScript, Tailwind CSS
          </span>
          , and{" "}
          <span className="font-semibold text-foreground">
            Framer Motion
          </span>
          .
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Button
            className="text-sm h-12 px-6 bg-gradient-to-r from-black to-gray-900 hover:to-gray-800"
            asChild
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Components
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </Button>
          <Button
            variant="outline"
            className="text-sm h-12 px-6 bg-gradient-to-r from-transparent to-transparent hover:from-gray-50 hover:to-gray-50 border-2"
            asChild
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Templates
            <ChevronRight className="w-4 h-4" />
            </motion.a>
          </Button>
        </motion.div>

        {/* Tech Logos */}
        <motion.div
          variants={item}
          className="pt-8 flex justify-center items-center gap-8"
        >
          {["React", "TypeScript", "Tailwind", "Motion", "Vercel"].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

