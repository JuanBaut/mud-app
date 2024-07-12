import { BarChart3, Map, MapPin } from "lucide-react";

export default function MainProducts() {
  return (
    <>
      <section
        className="w-full bg-accent/20 py-12 md:py-24 lg:py-32"
        id="features"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Funcionalidades clave
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tu aliado para una logística eficiente y rentable.
              </h2>
              <p className="max-w-[600px] text-muted md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                MudApp te permite gestionar tu flota de vehículos de manera
                eficiente con seguimiento en tiempo real, visualización de
                puntos de visita, optimización de rutas dinámicas y análisis de
                datos para obtener información valiosa y mejorar tus operaciones
                logísticas.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="size-8 flex-shrink-0 text-muted" />
                <div>
                  <h3 className="text-lg font-semibold">Monitoreo Vehicular</h3>
                  <p className="text-muted">
                    Nuestra herramienta te permite rastrear la ubicación exacta
                    de cada unidad. Accede a reportes detallados sobre rutas y
                    tiempos de viaje.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Map className="size-8 flex-shrink-0 text-muted" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Administración de recorridos
                  </h3>
                  <p className="text-muted">
                    Sistema eficiente para planificar rutas óptimas, asignar
                    tareas y supervisar recorridos de vehículos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BarChart3 className="size-8 flex-shrink-0 text-muted" />
                <div>
                  <h3 className="text-lg font-semibold">Analisís de datos</h3>
                  <p className="text-muted">
                    Análisis detallado del rendimiento vehicular, patrones de
                    entrega y áreas de mejora basado en datos reales para
                    optimizar la eficiencia operativa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
