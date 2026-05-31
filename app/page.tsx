import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import CoffeeCup from "@/public/Coffee_Cup.png";

export default function Home() {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-8 my-24">
        <div>
          <h1 className="font-modak text-brown-light text-9xl">
            TAKE A BREAK —
          </h1>
          <h2 className="font-modak text-brown-light text-8xl">
            AND DRINK A COFFEE.
          </h2>
        </div>
        <Link
          href={"/drinks-snacks"}
          className="bg-orange text-brown-light font-grifa font-bold p-4 rounded-2xl"
        >
          Entdecke unsere Spezialitäten
        </Link>
      </section>

      {/* Coffee Section */}
      <section className="flex items-center justify-between gap-8 mt-24 p-16 bg-brown-dark">
        <div className="flex flex-col gap-6 text-orange">
          <p className="font-knicknack text-7xl">
            <span className="block">Good Coffee.</span>
            <span className="block">Good Vibes.</span>
          </p>
          <p className="font-pacifico text-3xl">Schmeckt wie in Italien</p>
        </div>
        <Image
          alt="Coffee Cup"
          src={CoffeeCup}
          className="w-96 -rotate-10"
          loading="eager"
        />
      </section>
    </Fragment>
  );
}
