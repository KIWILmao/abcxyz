"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={slideUp}
      className="w-full min-h-screen flex items-center py-12 bg-red-50 text-black"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
          <div className="space-y-4 text-center">
            <motion.h1
              variants={slideUp}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Transform Data
              <br className="hidden sm:inline" />
              Into Quizzes
            </motion.h1>
            <motion.p
              variants={slideUp}
              className="max-w-[600px] text-gray-500 text-lg sm:text-xl md:text-2xl mx-auto"
            >
              Instantly create engaging quizzes from your Excel and PDF files.
            </motion.p>
          </div>
          <motion.div variants={slideUp}>
            <form className="flex flex-col sm:flex-row gap-4 sm:gap-2">
              <Button className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 ease-out w-full sm:w-auto">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
