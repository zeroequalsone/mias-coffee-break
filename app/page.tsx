import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
