import ActivitiesTemplate from "../../components/ActivitiesTemplate";
import { sliderData } from "../../lib/Imports";
import { useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import NotFound from "../../components/404";

export default function DynamicActivities() {
  const { activity } = useParams();

  // Ensure sliderData is defined and has enough elements
  const activitiesEnPlair = sliderData[2]?.images || [];
  const activityIndex = activitiesEnPlair.findIndex((v) => v.alt === activity);
  const activityData =
    activityIndex !== -1 ? activitiesEnPlair[activityIndex] : null;

  if (activityIndex === -1) {
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
          <a href="/activités/plainair">en plan air</a> /{" "}
          <a href={`/activites/plainair/${activityData.alt}`}>
            {activityData?.alt}
          </a>
        </p>
      </div>
      {activityData ? (
        <ActivitiesTemplate
          title={activityData.title}
          subtitle={activityData.subtitle}
          heroImage={activityData.src}
          description={activityData.description}
          mainContent={activityData.title}
        />
      ) : (
        <div>Activity not found</div>
      )}
    </>
  );
}
