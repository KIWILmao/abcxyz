"use client"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, Share, Repeat2, MessageCircle } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      handle: "@SarahTeacher",
      avatar: "S",
      quote:
        "Roiy has revolutionized how I create quizzes for my students. It's a game-changer!",
      role: "Teacher",
    },
    {
      name: "Mark R.",
      handle: "@MarkTrainer",
      avatar: "M",
      quote:
        "The ease of turning my Excel data into interactive quizzes is incredible. Highly recommended!",
      role: "Corporate Trainer",
    },
    {
      name: "Lisa M.",
      handle: "@LisaPM",
      avatar: "L",
      quote:
        "Roiy has made our team meetings more engaging and productive. It's an essential tool for us now.",
      role: "Project Manager",
    },
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="w-full py-12 md:py-24 lg:py-32 bg-red-50"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="bg-white rounded-lg shadow-md p-6 font-quicksand"
            >
              <div className="flex items-start space-x-4 hover:scale-[1.03] transition-all ease-out">
                <Avatar>
                  <AvatarImage
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.avatar}`}
                  />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.handle}
                      </p>
                    </div>
                    <Badge variant="secondary">{testimonial.role}</Badge>
                  </div>
                  <p className="mt-2 text-gray-700">{testimonial.quote}</p>
                  <div className="flex items-center mt-4 space-x-4 text-gray-500">
                    <button className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5" />
                      <span>24</span>
                    </button>
                    <button className="flex items-center space-x-2">
                      <Repeat2 className="h-5 w-5" />
                      <span>8</span>
                    </button>
                    <button className="flex items-center space-x-2">
                      <Heart className="h-5 w-5" />
                      <span>142</span>
                    </button>
                    <button>
                      <Share className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
