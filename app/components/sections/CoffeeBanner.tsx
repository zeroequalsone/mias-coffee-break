import Image from "next/image";

export const CoffeeBanner = () => {
  return (
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
  );
};
