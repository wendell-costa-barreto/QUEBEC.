import ActivitiesTemplate from "../../components/ActivitiesTemplate";
import { FaHome } from "react-icons/fa";

import { placesToGo } from "../../lib/Imports";
import { useParams } from "react-router-dom";
import NotFound from "../../components/404";

export default function DynamicPlaces() {
  const { place } = useParams();
  const index = placesToGo.images.findIndex((v) => v.params === place);
  if (index === -1) {
    return <NotFound />;
  }

  const selectedPlace = placesToGo.images[index];

  return (
    <>
      <div className="absolute top-[12%] left-[11%] z-50 flex items-center gap-3">
        <a className="text-blue-50" href="/">
          <FaHome size={24} />
        </a>
        <p className="text-blue-50 *:underline">
          <a href="/destinations">destinations</a> /{" "}
          <a href="/destinations/aller">où aller</a> /{" "}
          <a href={selectedPlace.params}>{selectedPlace.params}</a>
        </p>
      </div>
      <ActivitiesTemplate
        title={selectedPlace.title}
        subtitle={selectedPlace.subtitle}
        heroImage={selectedPlace.src}
        description={selectedPlace.description}
        mainContent={selectedPlace.title}
      />
    </>
  );
}
