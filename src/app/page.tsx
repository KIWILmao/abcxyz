import { Hero } from "@/components//Hero"
import { FileUpload } from "@/components//FileUpload"
import { Testimonials } from "@/components//Testimonials"
import { Pricing } from "@/components//Pricing"
import { CTA } from "@/components//CTA"
import { FAQ } from "@/components//FAQ"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <main className="flex-1">
        <Hero />
        <FileUpload />
        <Testimonials />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
    </div>
  )
}
