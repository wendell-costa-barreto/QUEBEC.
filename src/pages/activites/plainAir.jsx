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
      <DividedSection
        src="/whaleWatching.jpg"
        alt="Observation des baleines"
        title="Observation des baleines"
        subtitle="Observez ces g nteux dans leur habitat naturel. Partez   la d couverte de ces cr atures majestueuses. Une exp rience inoubliable qui vous laissera sans voix."
        buttonText="Decouvrez l'observation des baleines"
        link="/activités/plainair/baleines"
      />
      <Slider
        title={sliderData[2].title}
        subtitle={sliderData[2].subtitle}
        images={sliderData[2].images}
      />
      <Footer />
    </>
  );
}
