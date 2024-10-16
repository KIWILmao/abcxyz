"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      features: ["100 quizzes/month", "Excel & PDF support", "Basic analytics"],
    },
    {
      name: "Pro",
      price: "$19.99",
      features: ["Unlimited quizzes", "Advanced analytics", "Custom branding"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Dedicated support", "API access", "Custom integrations"],
    },
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="w-full py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="flex flex-col p-6 bg-red-50 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-auto bg-red-600 text-white hover:bg-red-700">
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
