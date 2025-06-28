import DividedSection from "../../components/DividedSection";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Slider from "../../components/Sliders";
import { sliderData } from "../../lib/Imports";

export default function PlainAir() {
  return (
    <>
      <Hero
        HeroTitle=""
        HeroSubtitle="Une grande variété d'activités pour tous les goûts"
        description="Découvrez les multiples facettes du Québec grâce à nos activités diverses et variées"
        heroButton="Découvrez les activités"
        heroButton2="Découvrez les activités hivernales"
        gradient="from-blue-400 to-blue-600"
      />
      <Slider
        title={sliderData[0].title}
        subtitle={sliderData[0].subtitle}
        images={sliderData[0].images}
      />
      <Footer />
    </>
  );
}
