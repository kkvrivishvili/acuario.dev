"use client"

import * as React from "react"
import { Palette, Eye } from "lucide-react"
import { AcuarioTextEffect } from "@/components/ui/acuario-text-effect"

export function DesignSection() {
  const principles = [
    "Interfaces intuitivas que funcionan",
    "Código limpio que escala",
    "Experiencias que importan"
  ]

  return (
    <section id="design" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
            <Palette className="w-4 h-4" />
            Design-First Approach
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl">
            El diseño no es decoración
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Es arquitectura de información. Cada proyecto empieza con{" "}
            <span className="text-foreground font-normal">diseño centrado en el usuario</span> y
            termina con código que mantiene esa visión.
          </p>
        </div>

        {/* Animated Logo */}
        <div className="mb-16">
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 sm:p-12">
            <AcuarioTextEffect />
            <p className="text-center text-sm text-muted-foreground mt-6">
              Pasa el mouse sobre el logo
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm leading-relaxed">
                  {principle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
