import ContactForm from "@/components/home/contact/contact";
import ExtraProducts from "../info/extra-products";
import MainProducts from "../info/main-products";
import LandingImage from "./landing-image";
import LinkButton from "@/components/ui/link-button";

export default function Landing() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 pt-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Reduce costos y toma decisiones inteligentes con EasyTrack.
                  </h1>
                  <p className="max-w-[600px] text-muted md:text-xl">
                    Adaptabilidad y análisis se combinan para una logística más
                    eficiente, aumentando la productividad y reduciendo los
                    costos con tecnología avanzada.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <LinkButton variant={"outline"} href="#features">
                    Más información
                  </LinkButton>
                  <LinkButton href="/login">Iniciar sesión</LinkButton>
                </div>
              </div>
              <LandingImage />
            </div>
          </div>
        </section>
        <MainProducts />
        <ExtraProducts />
        <ContactForm />
      </main>
    </div>
  );
}
