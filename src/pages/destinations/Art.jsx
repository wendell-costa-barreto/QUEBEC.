import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import DividedSection from "../../components/DividedSection";
import Section from "../../components/Section";
import SecondarySection from "../../components/SecondarySection";

export default function Art() {
  return (
    <>
      <Hero
        HeroTitle="Découvrez l'art et la culture québécoise"
        HeroSubtitle="Voyagez à travers les trésors de la culture québécoise"
        description="Plongez dans l'univers riche et varié de l'art et de la culture québécoise. Des festivals aux musées, des artistes aux artisans, préparez-vous pour une exploration inoubliable."
        heroButton="Commencez votre aventure"
        heroButton2="Découvrez les trésors cachés"
        gradient="from-purple-500 to-indigo-500"
        isImg={true}
        imgSrc="/art.jpg"
      />

      <DividedSection
        src="/festivaldete.webp"
        alt="Festival d'Été de Québec"
        title="Festival d'Été de Québec"
        subtitle="Vivez l'expérience musicale la plus grande au Québec"
        buttonText="Découvrez les programmations"
        link="/art/festival-d-ete-de-quebec"
      />

      <SecondarySection
        image="/museum.jpg"
        title="Musée National des Beaux-Arts du Québec"
        subtitle="Découvrez les chefs-d'œuvre de l'art québécois, de la peinture contemporaine aux sculptures monumentales, en passant par la photographie, la gravure, la tapisserie et bien d'autres formes d'art, le Musée National des Beaux-Arts du Québec vous propose une plongée dans l'univers riche et varié de l'art québécois."
        cta="Visitez le Musée"
      />
      <Footer />
    </>
  );
}
