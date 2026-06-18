import Image from "next/image";
import CoffeeCup from "@/public/Coffee_Cup.png";

export const CoffeeShowcase = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-12 lg:mt-24 py-8 lg:px-16 lg:p-16 bg-brown-dark">
      <div className="flex flex-col gap-4 lg:gap-6 text-orange-dark">
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
      <p className="font-pacifico italic text-xl lg:text-3xl text-orange-dark">
        Schmeckt wie in Italien
      </p>
    </section>
  );
};
