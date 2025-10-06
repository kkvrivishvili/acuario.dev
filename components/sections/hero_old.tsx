"use client"

import * as React from "react"
import { ArrowRight, Sparkles, Zap, Target, TrendingDown } from "lucide-react"

export function HeroSection() {
  const [messageIndex, setMessageIndex] = React.useState(0)
  
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
<section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#7DD3C0]/20 via-background to-[#B8E6A0]/10">
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#7DD3C0]/10 via-transparent to-[#B8E6A0]/10 pointer-events-none" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              RAG Personalizado de Nueva Generación
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-none">
              IA que entiende
              <br />
              <span className="text-primary">tu negocio,</span>
              <br />
              no solo tus prompts
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-sm transition-all hover:scale-105"
              >
                Agendar llamada
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors"
              >
                Ver más
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg font-bold">&lt;200ms</div>
                  <div className="text-xs text-muted-foreground">Latencia</div>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg font-bold">99.7%</div>
                  <div className="text-xs text-muted-foreground">Precisión</div>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg font-bold">-70%</div>
                  <div className="text-xs text-muted-foreground">Costo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Demo */}
          <div>
            <div className="relative">
              <div className="rounded-2xl border border-border bg-card/90 backdrop-blur-sm p-6 shadow-xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-auto">
                    DEMO INTERACTIVO
                  </span>
                </div>

                {/* Messages */}
                <div className="space-y-4 min-h-[300px]">
                  <div className="flex justify-end">
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm font-medium">
                        {demoMessages[messageIndex].user}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-muted/80 rounded-2xl rounded-tl-sm px-4 py-3 border border-border">
                      <p className="text-sm leading-relaxed">
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
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
              <div className="absolute -top-4 -right-4 rounded-lg px-3 py-2 bg-card border border-primary/30 shadow-lg">
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