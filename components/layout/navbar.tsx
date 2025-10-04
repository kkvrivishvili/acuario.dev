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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo */}
          <Link 
  href="/" 
  className="flex items-center gap-2.5 group transition-all flex-shrink-0"
>
  <Logo className="h-9 w-auto transition-all group-hover:scale-105" />
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                
                {/* Soluciones Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Soluciones
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => scrollToSection("hero")}
                            className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-primary/10 via-primary/5 to-background p-6 no-underline outline-none hover:shadow-md transition-all group border border-primary/10"
                          >
                            <Sparkles className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                            <div className="mb-2 mt-4 text-lg font-bold text-foreground">
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
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Stack
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4">
                      <ListItem 
                        onClick={() => scrollToSection("stack")} 
                        title="Tecnología"
                      >
                        OpenAI, Anthropic, Qdrant, FastAPI, LangChain
                      </ListItem>
                      <ListItem 
                        onClick={() => scrollToSection("stack")} 
                        title="Arquitectura"
                      >
                        Microservicios, Docker, Kubernetes, Redis
                      </ListItem>
                      <ListItem 
                        onClick={() => scrollToSection("stack")} 
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
                      className="cursor-pointer text-sm font-medium"
                    >
                      Contacto
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("contacto")}
              className="hidden md:inline-flex items-center justify-center gap-2 h-9 rounded-lg bg-primary px-5 text-sm font-semibold text-[#000000] shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 hover:scale-105"
            >
              <Mail className="h-3.5 w-3.5 text-[#000000]" />
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
            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            Soluciones
          </button>
          <button
            onClick={() => {
              scrollToSection("stack")
              document.getElementById('mobile-menu')?.classList.add('hidden')
            }}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            Stack
          </button>
          <button
            onClick={() => {
              scrollToSection("contacto")
              document.getElementById('mobile-menu')?.classList.add('hidden')
            }}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            Contacto
          </button>
          
          <div className="pt-2">
            <button
  onClick={() => scrollToSection("contacto")}
  className="hidden md:inline-flex items-center justify-center gap-2 h-9 rounded-lg bg-primary px-5 text-sm font-semibold text-[#000000] shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 hover:scale-105"
>
  <Mail className="h-3.5 w-3.5 text-[#000000]" />
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
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-primary/5 hover:shadow-sm group w-full text-left border border-transparent hover:border-primary/10"
          )}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <div className="text-sm font-semibold leading-none text-foreground group-hover:text-primary transition-colors">
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