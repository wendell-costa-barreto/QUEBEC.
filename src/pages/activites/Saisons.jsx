import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import DividedSection from "../../components/DividedSection";
import Section from "../../components/Section";

export default function Saisons() {
  return (
    <>
      <Hero
        HeroSubtitle="Découvrez les multiples facettes du Québec selon les saisons"
        description="Découvrez les activités, les festivals et les sorties en plein air qui font de chaque saison une expérience inoubliable au Québec"
        heroButton="Découvrez les activités"
        heroButton2="Découvrez les activités hivernales"
        gradient="from-emerald-400 to-blue-400"
        isImg={true}
        imgSrc="/saisonsHero.jpg"
      />
      <DividedSection
        src="/assets/activités/summerSaisons.jpg"
        alt="Été au Québec"
        title="Été au Québec"
        subtitle="Profitez d'un été ensoleillé et de la magie de la belle saison. Partez   la découverte des activités estivales, des festivals, des fêtes et des sorties en plein air. Une expérience inoubliable qui vous laissera sans voix."
        buttonText="Découvrez l'été au Québec"
        link="/activités/saisons/eté"
      />
      <Section
        src="/assets/activités/hiverQuebecSaisons.jpg"
        alt="Hiver au Québec"
        title="Hiver au Québec"
        subtitle="Profitez d'un hiver enneigé et de la magie de la saison froide. Partez   la découverte des activités hivernales, des spectacles, des jeux de neige et des défilés de chars allégoriques. Une expérience inoubliable qui vous laissera sans voix."
        buttonText="Découvrez l'hiver au Québec"
        link="/activités/saisons/hiver"
      />

      <DividedSection
        src="/assets/activités/fallQuebecSaisons.jpg"
        alt="Automne au Québec"
        title="Automne au Québec"
        subtitle="Profitez d'un automne coloré et de la magie de la récolte. Partez   la découverte des activités automnales, des festivals, des fêtes et des sorties en plein air. Une expérience inoubliable qui vous laissera sans voix."
        buttonText="Découvrez l'automne au Québec"
        link="/activités/saisons/automne"
      />

      <Section
        src="/assets/activités/springQuebecSaisons.webp"
        alt="Printemps au Québec"
        title="Printemps au Québec"
        subtitle="Profitez d'un printemps fleuri et de la magie de la rentrée. Partez   la découverte des activités printanières, des festivals, des fêtes et des sorties en plein air. Une expérience inoubliable qui vous laissera sans voix."
        buttonText="Découvrez le printemps au Québec"
        link="/activités/saisons/printemps"
      />
      <Footer />
    </>
  );
}
