import { SLIDERS } from "@/constants/home/sliders";
import Image from "next/image";

export const ImageSlider = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      {SLIDERS.map((slider) => (
        <div key={slider.url} className="relative h-48 lg:h-96 lg:flex-1">
          <Image
            src={slider.url}
            alt={slider.url}
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
            loading="eager"
            fill
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="w-full text-center bg-black/30 text-white text-2xl font-bold">
              {slider.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
