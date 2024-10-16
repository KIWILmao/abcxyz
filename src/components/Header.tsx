"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 pt-4 font-quicksand"
    >
      <div className="container mx-auto border border-zinc-700/50 rounded-full">
        <div className="backdrop-blur-lg bg-gray-200/10 rounded-full px-4 py-2 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <span className="ml-2 text-2xl font-bold text-red-600">Roiy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 sm:gap-6">
            <Link
              className="text-lg font-semibold hover:text-red-600 transition-colors"
              href="#"
            >
              Docs
            </Link>
            <Link
              className="text-lg font-semibold hover:text-red-600 transition-colors"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-lg font-semibold hover:text-red-600 transition-colors"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-lg font-semibold hover:text-red-600 transition-colors"
              href="#"
            >
              About
            </Link>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full"
            >
              Login
            </Button>
          </nav>
          <button
            className="md:hidden text-red-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4"
        >
          <nav className="flex flex-col items-center gap-4">
            <Link
              className="text-lg font-semibold hover:text-red-600 transition-colors"
              href="#"
            >
              Docs
            </Link>
            <Link
              className="text-lg font-semibold hover:text-red-600 transition-colors"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-lg font-semibold hover:text-red-600 transition-colors"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-lg font-semibold hover:text-red-600 transition-colors"
              href="#"
            >
              About
            </Link>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full w-full"
            >
              Login
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
