import { HeroSection } from "@/components/sections/hero"

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Sección 2 - El Problema (próximamente) */}
      <section id="problema" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Sección 2: El Problema</h2>
          <p className="text-muted-foreground mt-2">Próximamente...</p>
        </div>
      </section>

      {/* Sección 3 - Solución (próximamente) */}
      <section id="solucion" className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Sección 3: Tu Solución</h2>
          <p className="text-muted-foreground mt-2">Próximamente...</p>
        </div>
      </section>

      {/* Sección 4 - Stack (próximamente) */}
      <section id="stack" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Sección 4: Stack</h2>
          <p className="text-muted-foreground mt-2">Próximamente...</p>
        </div>
      </section>

      {/* Sección 5 - Contacto (próximamente) */}
      <section id="contacto" className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Sección 5: Contacto</h2>
          <p className="text-muted-foreground mt-2">Próximamente...</p>
        </div>
      </section>
    </>
  )
}