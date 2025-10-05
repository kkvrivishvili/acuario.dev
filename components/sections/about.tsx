"use client"

import * as React from "react"
import { Code2, Sparkles, Database, Cloud, Boxes, Cpu } from "lucide-react"

export function AboutSection() {
  const stack = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Vite", icon: "⚡" },
      { name: "TypeScript", icon: "📘" }
    ],
    backend: [
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚙️" },
      { name: "LangChain", icon: "🔗" },
      { name: "PostgreSQL", icon: "🐘" }
    ],
    ai: [
      { name: "OpenAI", icon: "🤖" },
      { name: "Anthropic", icon: "⚡" },
      { name: "Qdrant", icon: "🔍" },
      { name: "RAG Systems", icon: "📚" }
    ],
    devops: [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "CI/CD", icon: "🔄" },
      { name: "AWS", icon: "☁️" }
    ]
  }

  const services = [
    {
      icon: Sparkles,
      title: "Sistemas RAG personalizados",
      description: "IA que entiende tu negocio con retrieval augmented generation"
    },
    {
      icon: Code2,
      title: "Desarrollo Full-Stack",
      description: "Aplicaciones web modernas con React/Next.js y Python/FastAPI"
    },
    {
      icon: Cloud,
      title: "Arquitectura & DevOps",
      description: "Infraestructura escalable con Docker, K8s y CI/CD"
    }
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
            <Code2 className="w-4 h-4" />
            Fullstack Developer + IA
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Qué hago
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desarrollo <span className="text-foreground font-semibold">sistemas de IA production-ready</span> que integran LLMs, RAG y vector databases con interfaces modernas.
            Full-stack desde el modelo hasta el deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stack */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Stack
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Boxes className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-bold text-sm">Frontend</h4>
              </div>
              <div className="space-y-2">
                {stack.frontend.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card/50 text-sm"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Database className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-bold text-sm">Backend</h4>
              </div>
              <div className="space-y-2">
                {stack.backend.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card/50 text-sm"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-bold text-sm">IA/ML</h4>
              </div>
              <div className="space-y-2">
                {stack.ai.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card/50 text-sm"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-bold text-sm">DevOps</h4>
              </div>
              <div className="space-y-2">
                {stack.devops.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card/50 text-sm"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
