"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Sparkles, Code2, Layers, Mail } from "lucide-react"
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
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("contacto")}
              className="hidden md:inline-flex items-center justify-center gap-2 h-9 rounded-lg bg-primary px-5 text-base font-semibold text-[#000000] shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 hover:scale-105"
            >
              <Mail className="h-4 w-4 text-[#000000]" />
              Agendar call
            </button>

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


          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden lg:hidden pb-4 pt-2 space-y-2 animate-in fade-in slide-in-from-top-5 duration-200">
          <button
            onClick={() => {
              scrollToSection("solucion")
              document.getElementById('mobile-menu')?.classList.add('hidden')
            }}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            Soluciones
          </button>
          <button
            onClick={() => {
              scrollToSection("prueba-social")
              document.getElementById('mobile-menu')?.classList.add('hidden')
            }}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            Stack
          </button>
          <button
            onClick={() => {
              scrollToSection("contacto")
              document.getElementById('mobile-menu')?.classList.add('hidden')
            }}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            Contacto
          </button>
          
          <div className="pt-2">
            <button
  onClick={() => scrollToSection("contacto")}
  className="w-full inline-flex items-center justify-center gap-2 h-9 rounded-lg bg-primary px-5 text-base font-semibold text-[#000000] shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 hover:scale-105"
>
  <Mail className="h-4 w-4 text-[#000000]" />
  Agendar call
</button>
          </div>
        </div>
      </div>
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