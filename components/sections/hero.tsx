"use client"

import * as React from "react"
import { ArrowRight, Sparkles, Zap, Target, TrendingDown } from "lucide-react"

export function HeroSection() {
  const [messageIndex, setMessageIndex] = React.useState(0)
  const [isDark, setIsDark] = React.useState(false)

  const demoMessages = [
    {
      user: "¿Qué me sugieres hoy?",
      ai: "Considerando tus metas de fitness y preferencias alimenticias, hoy podrías...",
      context: ["Personalized data", "Real-time context", "Smart ranking"]
    },
    {
      user: "¿Cuál es mi mejor opción?",
      ai: "Basándome en tu historial de compras y preferencias de diseño minimalista, te recomiendo...",
      context: ["Vector search", "User profile", "Hybrid retrieval"]
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % demoMessages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      setIsDark(isDarkMode)
    }

    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const filterStyle = isDark
    ? 'brightness(0.88) sepia(0.08) saturate(1.15)'
    : 'brightness(1)'

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - adaptable a modo claro/oscuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e0f2fe] via-background to-[#ede9fe] dark:from-[#0a1628] dark:via-[#0d1b2e] dark:to-[#1a1f3a]" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Modo claro: azul marino suave + violeta */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/8 via-transparent to-[#7c3aed]/6 dark:opacity-0 transition-opacity duration-300" />
        
        {/* Modo oscuro: azul marino profundo con acentos */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300">
          {/* Gradiente base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/10 via-transparent to-[#7c3aed]/8" />
          
          {/* Glow central - azul metálico */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(79, 70, 229, 0.08), transparent 70%)"
          }} />
          
          {/* Glow inferior izquierda - verde metálico */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(20, 184, 166, 0.06), transparent 50%)"
          }} />
          
          {/* Glow superior derecha - violeta */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 50% 40% at 100% 0%, rgba(139, 92, 246, 0.07), transparent 50%)"
          }} />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Copy */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-none">
              IA que entiende
              <br />
              <span className="text-primary">tu negocio,</span>
              <br />
              y da valor al cliente
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
              RAG personalizado que <span className="text-foreground font-normal">escala sin límites</span>,
              no te cuesta un riñón, y da <span className="text-foreground font-normal">respuestas precisas</span> desde el día uno.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contacto")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-tl-lg rounded-br-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-sm transition-all hover:scale-105"
              >
                Agendar Meeting
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            
          </div>

          {/* Right - Demo */}
          <div>
            <div
              className="relative transition-all duration-500"
              style={{ filter: filterStyle }}
            >
              <div className="rounded-2xl border border-gray-200 bg-white backdrop-blur-sm p-6 shadow-xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-500 ml-auto">
                    DEMO INTERACTIVO
                  </span>
                </div>

                {/* Messages */}
                <div className="space-y-4 min-h-[300px]">
                  <div className="flex justify-end">
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm font-medium text-gray-900">
                        {demoMessages[messageIndex].user}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-2xl rounded-tl-sm px-4 py-3 border border-gray-200">
                      <p className="text-sm leading-relaxed text-gray-700">
                        {demoMessages[messageIndex].ai}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 px-2">
                      {demoMessages[messageIndex].context.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs text-primary font-medium"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                    <span>Perfil adaptándose en tiempo real...</span>
                  </div>
                </div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -top-4 -right-4 rounded-lg px-3 py-2 bg-white border border-primary/30 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-primary font-bold">
                    Vector Search Active
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}