import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import CoffeeCup from "@/public/Coffee_Cup.png";

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
    </Fragment>
  );
}
