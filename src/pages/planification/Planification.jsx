import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import DividedSection from "../../components/DividedSection";
import Section from "../../components/Section";
import SecondarySection from "../../components/SecondarySection";

export default function Planification() {
  return (
    <>
      <Hero
        HeroTitle="Planifiez votre voyage au Québec"
        HeroSubtitle="Découvrez les étapes pour préparer votre séjour"
        description="Prenez le temps de vous organiser pour profiter pleinement de votre voyage au Québec. Découvrez comment vous pouvez vous déplacer, entrer et vivre au Québec."
        heroButton="Découvrez comment se déplacer au Québec"
        heroButton2="Découvrez comment entrer au Québec"
        gradient="from-blue-500 to-green-500"
        isImg={false}
      />

      <DividedSection
        src="/road.jpg"
        alt="Carte du Québec"
        title="Se déplacer au Québec"
        subtitle="Découvrez comment vous pouvez vous déplacer au Québec"
        buttonText="En savoir plus"
        link="/planification/deplacer"
      />

      <SecondarySection
        image="/entrer.webp"
        title="Entrer au Québec"
        subtitle="Découvrez comment entrer au Québec"
        cta="En savoir plus"
        isInverted={true}
        link="/planification/entrer"
      />
      <Footer />
    </>
  );
}
