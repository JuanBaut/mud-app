import { LucideBolt, Mic, ZapOff } from "lucide-react";

export default function ExtraProducts() {
  return (
    <>
      <section
        className="w-full bg-primary/5 py-12 md:py-24 lg:py-32"
        id="extra-features"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-5xl flex-wrap-reverse items-center gap-6 lg:flex-nowrap lg:gap-12 xl:gap-16">
            <div className="grid gap-6 lg:basis-1/2">
              <div className="flex items-start gap-4">
                <LucideBolt className="size-8 flex-shrink-0 text-muted" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Optimización en tiempo real
                  </h3>
                  <p className="text-muted">
                    Optimización en tiempo real de rutas para ajustar cambios
                    inesperados y entregar paquetes de manera más rápida.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ZapOff className="size-8 flex-shrink-0 text-muted" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Corta corriente remoto
                  </h3>
                  <p className="text-muted">
                    Control remoto de vehículos para aumentar la seguridad de la
                    flota, permitiendo desactivar motores en caso de emergencia
                    o robo para proteger activos y responder rápidamente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mic className="size-8 flex-shrink-0 text-muted" />
                <div>
                  <h3 className="text-lg font-semibold">Grabación de audio</h3>
                  <p className="text-muted">
                    Monitoreo de conversaciones dentro de vehículos para
                    respuesta rápida en situaciones críticas, brindando mayor
                    tranquilidad y protección a la flota.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 lg:basis-1/2">
              <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">
                Solución integral de logística
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Siguiente nivel en gestión de entregas
              </h2>
              <p className="max-w-[600px] text-muted md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Nuestra solución brinda optimización dinámica de rutas, control
                remoto de vehículos por seguridad, monitoreo de audio en cabina
                y análisis de rendimiento con datos reales. Maximiza la
                eficiencia de tus entregas con funcionalidades inteligentes en
                un sólo sistema.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
