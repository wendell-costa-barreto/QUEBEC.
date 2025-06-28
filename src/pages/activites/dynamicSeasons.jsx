import DividedSection from "../../components/DividedSection";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import SeasonShowcase from "../../components/SeasonTemplate";
import Slider from "../../components/Sliders";
import { seasons, sliderData } from "../../lib/Imports";
import { useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import NotFound from "../../components/404";

export default function DynamicSeasons() {
  const { season } = useParams();
  const index = seasons.findIndex((v) => v.params === season);
  if (index === -1) {
    return <NotFound />;
  }
  return (
    <>
      <div className="absolute top-[12%] left-[11%] z-50 flex items-center gap-3">
        <a className="text-blue-50" href="/">
          <FaHome size={24} />
        </a>
        <p className="text-blue-50 *:underline">
          <a href="/activités">activités</a> /{" "}
          <a href="/activités/saisons">saisons</a> /
          <a href={seasons[index].params}>{seasons[index].params}</a>
        </p>
      </div>
      <SeasonShowcase
        title={seasons[index].title}
        subtitle={seasons[index].subtitle}
        heroImage={seasons[index].image}
        description={seasons[index].description}
        mainContent={seasons[index].mainContent}
      />
      <Slider
        images={
          seasons[index].params === "hiver"
            ? sliderData[0].images
            : sliderData[2].images
        }
        subtitle={
          seasons[index].params === "hiver"
            ? sliderData[0].subtitle
            : sliderData[2].subtitle
        }
        title={
          seasons[index].params === "hiver"
            ? sliderData[0].title
            : sliderData[2].title
        }
      />

      <div className="flex flex-col gap-2 items-start justify-start p-12">
        <h1 className="text-5xl font-bold mb-8 ml-[8%]">
          Galerie de {seasons[index].name === "Automne" ? "l'" : ""}
          {seasons[index].name === "Eté" ? "l'" : ""}
          {seasons[index].name === "Hiver" ? "l'" : ""}
          {seasons[index].name.toLowerCase()}
        </h1>
        <Gallery images={seasons[index].images} />
      </div>
      <Footer />
    </>
  );
}
