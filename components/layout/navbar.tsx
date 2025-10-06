"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Sparkles, Code2, Layers, Mail, ArrowRight, Linkedin, Github } from "lucide-react"
import { Logo } from "./logo"

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
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [showCTA, setShowCTA] = React.useState(false)

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const initialTheme = savedTheme || systemTheme

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Detectar si pasamos la sección hero
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowCTA(window.scrollY > heroBottom - 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled && "border-b border-border/20"
      )}
      style={{
        background: scrolled
          ? theme === 'dark'
            ? 'rgba(15, 15, 15, 0.75)'
            : 'rgba(252, 252, 252, 0.75)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(8px)',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(8px)',
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex items-center justify-center gap-4 transition-all duration-300 relative",
          scrolled ? "h-14" : "h-20"
        )}>

          {/* Logo - Posicionado absolutamente para no afectar el layout */}
          <Link
  href="/"
  className="absolute left-0 flex items-center gap-2.5 group transition-all flex-shrink-0"
>
  <Logo className={cn(
    "w-auto transition-all duration-300 group-hover:scale-105",
    scrolled ? "h-8" : "h-10"
  )} />
</Link>

          {/* Desktop Navigation - Centrado */}
          <div className="hidden lg:flex items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                
                {/* Soluciones Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium">
                    Soluciones
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => scrollToSection("hero")}
                            className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-primary/10 via-primary/5 to-background/50 backdrop-blur-sm p-6 no-underline outline-none hover:shadow-md hover:bg-gradient-to-b hover:from-primary/15 hover:via-primary/8 hover:to-background/70 transition-all group border border-primary/10"
                          >
                            <Sparkles className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                            <div className="mb-2 mt-4 text-xl font-bold text-foreground">
                              RAG Personalizado
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground">
                              IA que entiende tu negocio, no solo tus prompts. Precisión, escalabilidad y costos optimizados.
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <ListItem 
                        onClick={() => scrollToSection("solucion")} 
                        title="Precisión"
                        icon={<Code2 className="h-4 w-4 text-primary" />}
                      >
                        Búsqueda híbrida + perfil de usuario = 0 alucinaciones críticas.
                      </ListItem>
                      <ListItem 
                        onClick={() => scrollToSection("solucion")} 
                        title="Escalabilidad"
                        icon={<Layers className="h-4 w-4 text-primary" />}
                      >
                        De 10 a 10M usuarios sin refactor. Arquitectura preparada.
                      </ListItem>
                      <ListItem 
                        onClick={() => scrollToSection("solucion")} 
                        title="Costo optimizado"
                        icon={<span className="text-primary font-bold text-sm">-70%</span>}
                      >
                        70% menos que alternativas. Cacheo inteligente y modelos eficientes.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Stack Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium">
                    Stack
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4">
                      <ListItem
                        onClick={() => scrollToSection("prueba-social")}
                        title="Tecnología"
                      >
                        OpenAI, Anthropic, Qdrant, FastAPI, LangChain
                      </ListItem>
                      <ListItem
                        onClick={() => scrollToSection("prueba-social")}
                        title="Arquitectura"
                      >
                        Microservicios, Docker, Kubernetes, Redis
                      </ListItem>
                      <ListItem
                        onClick={() => scrollToSection("prueba-social")}
                        title="Integración"
                      >
                        APIs RESTful, Webhooks, SDK personalizado
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contacto Simple */}
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={navigationMenuTriggerStyle()}
                  >
                    <button
                      onClick={() => scrollToSection("contacto")}
                      className="cursor-pointer text-base font-medium"
                    >
                      Contacto
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions - Posicionado absolutamente */}
          <div className="absolute right-0 flex items-center gap-2">
            {/* Social Links - Solo visible ANTES del hero */}
            {!showCTA && (
              <div className="hidden md:flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            )}

            {/* CTA Button - Desktop - Solo visible DESPUÉS del hero */}
            {showCTA && (
              <button
                onClick={() => scrollToSection("contacto")}
                className="hidden md:inline-flex items-center justify-center gap-2 h-9 rounded-tl-lg rounded-br-lg bg-primary px-5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 hover:scale-105 animate-in fade-in slide-in-from-top-2 duration-300"
              >
                Agendar Meeting
                <ArrowRight className="h-4 w-4" />
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all hover:scale-105"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300"
            style={{
              background: theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={cn(
              "fixed inset-x-4 z-50 lg:hidden rounded-xl overflow-y-auto max-h-[calc(100vh-8rem)]",
              "animate-in fade-in slide-in-from-top-4 duration-300"
            )}
            style={{
              top: scrolled ? '4rem' : '5.5rem',
              background: theme === 'dark'
                ? 'rgba(15, 15, 15, 0.95)'
                : 'rgba(252, 252, 252, 0.95)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              border: '1px solid',
              boxShadow: theme === 'dark'
                ? '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)'
                : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="p-5 space-y-1">
              {/* Soluciones Section */}
              <div className="space-y-2 pb-5 border-b border-border/20">
                <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Soluciones</span>
                </div>
                <button
                  onClick={() => {
                    scrollToSection("hero")
                    setMobileMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-3 rounded-lg hover:bg-background/50 hover:backdrop-blur-sm transition-all group border border-transparent hover:border-primary/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-semibold group-hover:text-primary transition-colors">
                        RAG Personalizado
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1 leading-relaxed">
                        IA que entiende tu negocio, no solo tus prompts
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => {
                    scrollToSection("solucion")
                    setMobileMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-background/50 hover:backdrop-blur-sm transition-all flex items-center gap-3 group border border-transparent hover:border-primary/10"
                >
                  <Code2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">Precisión</span>
                    <p className="text-xs text-muted-foreground">Búsqueda híbrida + perfil de usuario</p>
                  </div>
                </button>
                <button
                  onClick={() => {
                    scrollToSection("solucion")
                    setMobileMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-background/50 hover:backdrop-blur-sm transition-all flex items-center gap-3 group border border-transparent hover:border-primary/10"
                >
                  <Layers className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">Escalabilidad</span>
                    <p className="text-xs text-muted-foreground">De 10 a 10M usuarios sin refactor</p>
                  </div>
                </button>
              </div>

              {/* Stack Section */}
              <div className="space-y-2 py-5 border-b border-border/20">
                <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Stack</span>
                </div>
                <button
                  onClick={() => {
                    scrollToSection("about")
                    setMobileMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-background/50 hover:backdrop-blur-sm transition-all group border border-transparent hover:border-primary/10"
                >
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">Tecnología</div>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">OpenAI, Anthropic, Qdrant, FastAPI</p>
                </button>
                <button
                  onClick={() => {
                    scrollToSection("about")
                    setMobileMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-background/50 hover:backdrop-blur-sm transition-all group border border-transparent hover:border-primary/10"
                >
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">Arquitectura</div>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">Microservicios, Docker, Kubernetes</p>
                </button>
                <button
                  onClick={() => {
                    scrollToSection("about")
                    setMobileMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-background/50 hover:backdrop-blur-sm transition-all group border border-transparent hover:border-primary/10"
                >
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">Integración</div>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">APIs RESTful, Webhooks, SDK personalizado</p>
                </button>
              </div>

              {/* Contacto */}
              <div className="pt-5 space-y-3">
                <button
                  onClick={() => {
                    scrollToSection("contacto")
                    setMobileMenuOpen(false)
                  }}
                  className="w-full text-left px-3 py-3 rounded-lg hover:bg-background/50 hover:backdrop-blur-sm transition-all flex items-center gap-3 group border border-transparent hover:border-primary/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-base font-medium group-hover:text-primary transition-colors">Contacto</span>
                </button>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    scrollToSection("contacto")
                    setMobileMenuOpen(false)
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 active:scale-95"
                >
                  <Mail className="h-4 w-4" />
                  Agendar call
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

function ListItem({
  title,
  children,
  icon,
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { 
  title: string
  icon?: React.ReactNode
  onClick?: () => void
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <button
          onClick={onClick}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-background/50 hover:backdrop-blur-sm hover:shadow-sm group w-full text-left border border-transparent hover:border-primary/10"
          )}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <div className="text-base font-semibold leading-none text-foreground group-hover:text-primary transition-colors">
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