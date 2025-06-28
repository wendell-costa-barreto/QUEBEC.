import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import DividedSection from "../../components/DividedSection";
import Section from "../../components/Section";
export default function Festivites() {
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
        src="/assets/carnavalDeQuebec.jpg"
        alt="Carnaval de Québec"
        title="Carnaval de Québec"
        subtitle="Profitez d'un hiver enneigé et de la magie du Carnaval de Québec. Partez   la d couverte des activités hivernales, des spectacles, des jeux de neige et des défilés de chars allégoriques. Une expérience inoubliable qui vous laissera sans voix."
        buttonText="Découvrez le Carnaval de Québec"
        link="/activités/festivites/carnavaldequebec"
      />
      <Section
        src="/festivaldete.webp"
        alt="Festival D'été"
        title="Festival D'été"
        subtitle="Profitez d'un été ensoleillé et de la magie du Festival d'été de Québec. Partez la d couverte des concerts, des spectacles, des activités pour les enfants et des dégustations de bières artisanales. Une expérience inoubliable qui vous laissera des souvenirs inoubliables."
        buttonText="Découvrez le Festival D'été"
        link="/activités/festivites/festivaldete"
      />
      <Footer />
    </>
  );
}
