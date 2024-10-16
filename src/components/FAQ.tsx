"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export function FAQ() {
  const faqs = [
    {
      question: "How does Roiy work?",
      answer:
        "Roiy uses advanced AI to analyze your Excel and PDF files, automatically generating engaging quizzes based on the content.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take data security seriously. All uploaded files are encrypted and securely stored. We never share your data with third parties.",
    },
    {
      question: "Can I customize the quizzes?",
      answer:
        "You can edit questions, add your own, and customize the look and feel of your quizzes to match your brand.",
    },
    {
      question: "Is there a limit to how many quizzes I can create?",
      answer:
        "It depends on your plan. Our Basic plan allows for 100 quizzes per month, while our Pro and Enterprise plans offer unlimited quiz creation.",
    },
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-20 big:w-[1200px] big:mx-auto"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl py-3 md:text-5xl font-bold text-center mb-4 bg-gradient-to-b from-red-600 via-red-500 to-red-300 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-8 mt-4 text-lg text-black max-w-xl mx-auto">
          Find answers to common questions about our services
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="mb-12 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-red-500/30 hover:border-red-500/80 hover:shadow-lg transition-all duration-300 ease-out mb-4"
              >
                <AccordionTrigger className="text-xl font-semibold text-black px-6 py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 px-6 pb-4 font-quicksand">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex justify-center">
          <Button
            variant="link"
            className="text-red-500 hover:text-red-400 group"
          >
            Have more questions? Contact us
            <ChevronDown className="ml-2 h-4 w-4 transition-all group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
