import { Hero } from "./components/sections/Hero";
import { CoffeeShowcase } from "./components/sections/CoffeeShowcase";
import { ImageSlider } from "./components/sections/ImageSlider";
import { CoffeeBanner } from "./components/sections/CoffeeBanner";
import { Outro } from "./components/sections/Outro";

export default function Home() {
  return (
    <>
      <Hero />
      <CoffeeShowcase />
      <ImageSlider />
      <CoffeeBanner />
      <Outro />
    </>
  );
}
