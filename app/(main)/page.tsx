import { Hero } from "../components/sections/home/Hero";
import { CoffeeShowcase } from "../components/sections/home/CoffeeShowcase";
import { ImageSlider } from "../components/sections/home/ImageSlider";
import { CoffeeBanner } from "../components/sections/home/CoffeeBanner";
import { Outro } from "../components/sections/home/Outro";

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
