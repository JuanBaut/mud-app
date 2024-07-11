"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeqywewj");

  return (
    <div className="mx-auto flex max-w-[1025px] flex-wrap items-center justify-between gap-4 p-4 md:flex-nowrap">
      <div className="w-[100%] shrink md:max-w-[500px]">
        <div className="mb-2 flex flex-col gap-2">
          <div>
            <p className="font-bold">Dirección</p>
            <p className="text-muted">P° de la Castellana 79, Madrid, 28046</p>
          </div>

          <div>
            <p className="font-bold">Teléfono</p>
            <p className="text-muted">(+34) 947 002 963</p>
          </div>

          <div>
            <p className="font-bold">Email</p>
            <p className="text-muted">mhw.consultora@gmail.com</p>
          </div>
          <hr />
        </div>
        {state.succeeded ? (
          <p className="text-center text-green-600">
            ¡Gracias por contactarnos!
          </p>
        ) : (
          <form
            action="https://formspree.io/f/xeqywewj"
            method="POST"
            onSubmit={handleSubmit}
          >
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              className="mb-2 w-full"
              placeholder="m@example.com"
              required
              id="email"
              type="email"
              name="email"
              aria-describedby="email-error"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              id="email-error"
              className="mb-4 text-red-600"
            />
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              required
              aria-describedby="message-error"
              className="mb-4"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              id="message-error"
              className="mb-4 text-red-600"
            />

            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full text-secondary"
              variant={"outline"}
            >
              Enviar
              <Send className="ml-2 size-5" />
            </Button>
          </form>
        )}
      </div>

      <div className="aspect-[3/2] size-fit w-[100%] shrink-0 overflow-hidden rounded-xl sm:aspect-video md:aspect-square md:max-w-[420px]">
        <iframe
          className="object-contain"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.45340273721!2d-58.51569885718409!3d-34.61565476971351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sco!4v1716317826405!5m2!1sen!2sco"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
