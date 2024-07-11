"use client";
import { CldImage } from "next-cloudinary";

export default function LandingImage() {
  return (
    <div className="relative mx-auto aspect-[3/2] w-full overflow-hidden rounded-xl object-center p-2 lg:order-last">
      <CldImage
        src="landing/1"
        alt="Furgoneta"
        className="object-cover"
        sizes="50vw"
        priority
        fill
      />
    </div>
  );
}
