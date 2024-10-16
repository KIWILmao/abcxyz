"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import Image from "next/image"

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export function FileUpload() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.6 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideUp}
      className="w-full py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            variants={slideUp}
          >
            Upload Your File
          </motion.h2>
          <motion.p
            className="max-w-[600px] text-gray-500 md:text-xl"
            variants={slideUp}
          >
            Drag and drop your Excel or PDF file here, or click to select
          </motion.p>
          <motion.div variants={slideUp} className="w-full max-w-lg ">
            <div className="border-2 border-dashed border-red-300 rounded-lg p-12 flex flex-col items-center justify-center cursor-pointer hover:border-red-500 hover:scale-105 transition-all ease-out">
              <Upload className="h-12 w-12 text-red-500 mb-4" />
              <div className="flex items-center gap-2">
                <Image
                  src="/excel.svg"
                  width={30}
                  height={30}
                  alt="excel"
                  className="hover:scale-125 transition-all ease-out"
                />
                <Image
                  src="/pdf.svg"
                  width={25}
                  height={25}
                  alt="pdf"
                  className="hover:scale-125 transition-all ease-out"
                />
              </div>
            </div>
          </motion.div>
          <motion.div variants={slideUp}>
            <Button className="mt-4 bg-red-600 text-white hover:bg-red-700">
              Upload and Generate Quiz
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
