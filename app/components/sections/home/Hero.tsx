import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-8 mt-12 lg:mt-24">
      <div className="text-center font-modak text-brown-light text-4xl lg:text-9xl">
        <h1>TAKE A BREAK —</h1>
        <h2 className="text-3xl lg:text-8xl">AND DRINK A COFFEE.</h2>
      </div>
      <Link
        href={"/drinks-snacks"}
        className="bg-orange-dark hover:bg-orange-light text-brown-light font-grifa lg:text-xl text-sm font-bold p-4 lg:p-6 rounded-2xl"
      >
        Entdecke unsere Spezialitäten
      </Link>
    </section>
  );
};
