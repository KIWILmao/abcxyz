"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export function Footer() {
  return (
    <>
      <div className="relative left-[calc(-50vw+50%)] ">
        <div className="absolute z-10 w-full h-5 overflow-hidden">
          <div
            className="absolute w-full h-10 bg-bottom"
            style={{ backgroundImage: "url('/wave.svg')" }}
          ></div>
        </div>
      </div>
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-6 w-full shrink-0 items-center px-4 md:px-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <p className="text-xs text-gray-500">
              © 2024 Roiy. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-500"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-500"
                href="#"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </motion.footer>
    </>
  )
}
