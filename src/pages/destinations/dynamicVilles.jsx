import DestinationShowcase from "../../components/ArticlePageTemplate";
import { Villes } from "../../lib/Imports";
import { useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import NotFound from "../../components/404";

export default function DynamicVilles() {
  const { ville } = useParams();
  const index = Villes.findIndex((v) => v.params === ville);
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
          <a href="/activités">destinations</a> /{" "}
          <a href="/activités/saisons">villes</a> /
          <a href={Villes[index].params}>{Villes[index].params}</a>
        </p>
      </div>
      <DestinationShowcase
        stats={Villes[index].stats}
        title={Villes[index].title}
        subtitle={Villes[index].subtitle}
        heroImage={Villes[index].image}
        description={Villes[index].description}
        mainContent={Villes[index].mainContent}
      />
    </>
  );
}
