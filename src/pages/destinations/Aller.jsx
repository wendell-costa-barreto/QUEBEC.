import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import DividedSection from "../../components/DividedSection";
import Section from "../../components/Section";

export default function Aller() {
  return (
    <>
      <Hero
        HeroTitle="Explorez le Québec"
        HeroSubtitle="Voyagez à travers les merveilles naturelles et culturelles"
        description="Plongez dans l'expérience unique des destinations incontournables du Québec. Des paysages époustouflants aux sites historiques riches, préparez-vous pour une aventure inoubliable."
        heroButton="Commencez votre aventure"
        heroButton2="Découvrez les trésors cachés"
        gradient="from-purple-500 to-indigo-500"
        isImg={true}
        imgSrc="/heroEndroits.jpg"
      />

      <DividedSection
        src="/chutemont.jpg"
        alt="Chute Montmorency"
        title="Chute Montmorency"
        subtitle="Admirez la majesté de la plus haute chute d'eau de la province"
        buttonText="Explorez la Chute Montmorency"
        link="/destinations/aller/montmorrency"
      />

      <Section
        src="/parcjacques.jpg"
        alt="Parc National de la Jacques-Cartier"
        title="Parc National de la Jacques-Cartier"
        subtitle="Parcourez les sentiers pittoresques et découvrez la faune locale"
        buttonText="Visitez le Parc"
        link="/destinations/aller/parc-national-jacques-cartier"
      />

      <DividedSection
        src="/hotelglace.jpg"
        alt="Hôtel de Glace"
        title="Hôtel de Glace"
        subtitle="Vivez une nuit magique dans un hôtel entièrement fait de glace"
        buttonText="Réservez votre séjour"
        link="/destinations/aller/hotel-de-glace"
      />

      <Footer />
    </>
  );
}
