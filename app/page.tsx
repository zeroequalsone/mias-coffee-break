import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import CoffeeCup from "@/public/Coffee_Cup.png";

const sliders = [
  { text: "Wärmend.", url: "/Slider1.webp" },
  { text: "Herzhaft.", url: "/Slider2.webp" },
  { text: "Frisch.", url: "/Slider3.webp" },
];

export default function Home() {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-8 mt-12 lg:mt-24">
        <div className="text-center font-modak text-brown-light text-4xl lg:text-9xl">
          <h1>TAKE A BREAK —</h1>
          <h2 className="text-3xl lg:text-8xl">AND DRINK A COFFEE.</h2>
        </div>
        <Link
          href={"/drinks-snacks"}
          className="bg-orange text-brown-light font-grifa lg:text-xl text-sm font-bold p-4 lg:p-6 rounded-2xl"
        >
          Entdecke unsere Spezialitäten
        </Link>
      </section>

      {/* Coffee Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-12 lg:mt-24 py-8 lg:px-16 lg:p-16 bg-brown-dark">
        <div className="flex flex-col gap-4 lg:gap-6 text-orange">
          <p className="font-knicknack text-4xl lg:text-7xl text-center lg:text-left">
            <span className="block">Good Coffee.</span>
            <span className="block">Good Vibes.</span>
          </p>
        </div>
        <Image
          alt="Coffee Cup"
          src={CoffeeCup}
          className="w-48 lg:w-96 -rotate-10"
          loading="eager"
        />
        <p className="font-pacifico italic text-xl lg:text-3xl text-orange">
          Schmeckt wie in Italien
        </p>
      </section>

      {/* Slider Section */}
      <section className="flex flex-col lg:flex-row">
        {sliders.map((slider) => (
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

      {/* Coffee Banner */}
      <section className="relative h-48 lg:h-96 overflow-hidden">
        <Image
          src={"/CoffeeBeansBanner.webp"}
          alt="Kaffeebohnen Banner"
          className="object-cover scale-150 lg:scale-none"
          loading="eager"
          fill
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="w-48 lg:w-96 text-center font-sundayNotes text-lg lg:text-4xl text-brown-dark">
            Auch Kaffeebohnen brauchen einen Break. Nimm dir deinen.
          </p>
        </div>
      </section>

      {/* Ende Section */}
      <section className="h-48 lg:h-96 my-16">
        <div className="flex flex-col items-center justify-center h-full text-orange text-xl lg:text-3xl font-knicknack">
          <div className="flex flex-col items-center justify-center w-96 lg:w-3xl text-center gap-8">
            <p className="text-3xl lg:text-6xl">
              Du hast es bis zum Ende der Seite geschafft!
            </p>
            <p>Jetzt fehlt nur noch dein perfekter Kaffee.</p>
            <p>See you at the coffee break? 👀</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
