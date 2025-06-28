import ActivitiesTemplate from "../../components/ActivitiesTemplate";
import { FaHome } from "react-icons/fa";

import { stations } from "../../lib/Imports";
import { useParams } from "react-router-dom";
import NotFound from "../../components/404";

export default function Stations() {
  const { station } = useParams();
  const index = stations.images.findIndex((v) => v.params === station);
  if (index === -1) {
    return <NotFound />;
  }

  const selectedStation = stations.images[index];

  return (
    <>
      <div className="absolute top-[12%] left-[11%] z-50 flex items-center gap-3">
        <a className="text-blue-50" href="/">
          <FaHome size={24} />
        </a>
        <p className="text-blue-50 *:underline">
          <a href="/destinations">destinations</a> /{" "}
          <a href="/destinations/ski">ski</a> /{" "}
          <a href={selectedStation.params}>{selectedStation.params}</a>
        </p>
      </div>
      <ActivitiesTemplate
        title={selectedStation.title}
        subtitle={selectedStation.subtitle}
        heroImage={selectedStation.src}
        description={selectedStation.description}
        mainContent={selectedStation.title}
      />
    </>
  );
}
