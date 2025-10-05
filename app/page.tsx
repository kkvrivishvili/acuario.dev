import { HeroSection } from "@/components/sections/hero"
import { DesignSection } from "@/components/sections/design"
import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <HeroSection />
      <DesignSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}