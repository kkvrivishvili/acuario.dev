"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Sparkles, Code2, Layers, Mail } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-bold text-foreground leading-none">
                acuario.dev
              </span>
              <span className="text-[9px] text-muted-foreground leading-none mt-0.5 uppercase tracking-wide">
                IA + RAG Personalizado
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Soluciones</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => scrollToSection("hero")}
                            className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-primary/10 to-background p-6 no-underline outline-none hover:shadow-md transition-all group border border-primary/20"
                          >
                            <Sparkles className="h-8 w-8 text-primary mb-2" />
                            <div className="mb-2 mt-4 text-lg font-bold text-foreground">
                              RAG Personalizado
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground">
                              IA que entiende tu negocio. Precisión, escalabilidad y costos optimizados.
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <ListItem onClick={() => scrollToSection("solucion")} title="Precisión" icon={<Code2 className="h-4 w-4 text-primary" />}>
                        Búsqueda híbrida + perfil de usuario = 0 alucinaciones críticas.
                      </ListItem>
                      <ListItem onClick={() => scrollToSection("solucion")} title="Escalabilidad" icon={<Layers className="h-4 w-4 text-primary" />}>
                        De 10 a 10M usuarios sin refactor.
                      </ListItem>
                      <ListItem onClick={() => scrollToSection("solucion")} title="Costo optimizado" icon={<span className="text-primary font-bold text-sm">-70%</span>}>
                        70% menos que alternativas.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Stack</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4">
                      <ListItem onClick={() => scrollToSection("stack")} title="Tecnología">
                        OpenAI, Anthropic, Qdrant, FastAPI
                      </ListItem>
                      <ListItem onClick={() => scrollToSection("stack")} title="Arquitectura">
                        Microservicios, Docker, Kubernetes
                      </ListItem>
                      <ListItem onClick={() => scrollToSection("stack")} title="Integración">
                        APIs RESTful, Webhooks, SDK
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <button onClick={() => scrollToSection("contacto")}>
                      Contacto
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground transition-colors"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <button
              onClick={() => scrollToSection("contacto")}
              className="hidden md:inline-flex items-center gap-2 h-9 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Mail className="h-3.5 w-3.5" />
              Agendar call
            </button>

            <button
              className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg hover:bg-muted"
              onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden lg:hidden pb-4 pt-2 space-y-2">
          <button onClick={() => { scrollToSection("solucion"); document.getElementById('mobile-menu')?.classList.add('hidden') }} className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary">
            Soluciones
          </button>
          <button onClick={() => { scrollToSection("stack"); document.getElementById('mobile-menu')?.classList.add('hidden') }} className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary">
            Stack
          </button>
          <button onClick={() => { scrollToSection("contacto"); document.getElementById('mobile-menu')?.classList.add('hidden') }} className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary">
            Contacto
          </button>
          <button onClick={() => { scrollToSection("contacto"); document.getElementById('mobile-menu')?.classList.add('hidden') }} className="flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground bg-primary">
            <Mail className="h-3.5 w-3.5" />
            Agendar call
          </button>
        </div>
      </div>
    </header>
  )
}

function ListItem({ title, children, icon, onClick }: { title: string; children: React.ReactNode; icon?: React.ReactNode; onClick?: () => void }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <button
          onClick={onClick}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-primary/5 hover:shadow-sm group w-full text-left border border-transparent hover:border-primary/20"
          )}
        >
          <div className="flex items-center gap-2">
            {icon && <span>{icon}</span>}
            <div className="text-sm font-semibold text-foreground group-hover:text-primary">
              {title}
            </div>
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1.5">
            {children}
          </p>
        </button>
      </NavigationMenuLink>
    </li>
  )
}