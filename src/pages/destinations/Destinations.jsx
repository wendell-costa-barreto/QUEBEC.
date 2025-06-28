import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Slider from "../../components/Sliders";
import { placesToGo, stations, sliderData } from "../../lib/Imports";
import Footer from "../../components/Footer";
import DividedSection from "../../components/DividedSection";
export default function Destinations() {
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
        title={sliderData[1]?.title}
        subtitle={sliderData[1]?.subtitle}
        images={sliderData[1]?.images}
      />

      <DividedSection
        src="/culturehome.jpg"
        alt="Patrimoine culturel du Québec"
        title="Plongez dans le riche patrimoine du Québec"
        subtitle="Découvrez la culture unique du Québec, où traditions franco-canadiennes et modernité se rencontrent. Promenez-vous dans les rues pavées du Vieux-Québec, classé au patrimoine mondial de l'UNESCO, assistez à des festivals vibrants comme le Carnaval de Québec ou explorez les galeries d'art locales."
        buttonText="Explorez le cœur du Québec"
        link="/destinations/art"
      />

      <Slider
        title={stations.title}
        subtitle={stations.subtitle}
        images={stations.images}
      />
      <Slider
        title={placesToGo.title}
        subtitle={placesToGo.subtitle}
        images={placesToGo.images}
      />
      <Footer />
    </>
  );
}
