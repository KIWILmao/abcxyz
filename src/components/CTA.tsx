"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export function CTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="w-full py-12 md:py-24 lg:py-32 bg-red-600 text-white"
    >
      <div className="container px-4 md:px-6">
        <div className="flex  flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Transform Your Presentations?
            </h2>
            <p className="max-w-[900px] text-red-100 md:text-xl/relaxed lg:text-2xl/relaxed">
              Join thousands of professionals already using Roiy.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="flex-1 bg-white text-gray-900 placeholder-gray-500"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="bg-white text-red-600 hover:bg-red-100">
                Start Free
              </Button>
            </form>
            <p className="text-sm text-red-100">No credit card required.</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
