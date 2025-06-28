import ActivitiesTemplate from "../../components/ActivitiesTemplate";
import { sliderData } from "../../lib/Imports";
import { useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import NotFound from "../../components/404";

export default function DynamicWinterActivities() {
  const { activity } = useParams();

  // Ensure sliderData is defined and has enough elements
  const activitésHivernales = sliderData[0]?.images || [];
  const activityIndex = activitésHivernales.findIndex(
    (v) => v.params === activity
  );
  const activityData =
    activityIndex !== -1 ? activitésHivernales[activityIndex] : null;

  return (
    <>
      <div className="absolute top-[12%] left-[11%] z-50 flex items-center gap-3">
        <a className="text-blue-50" href="/">
          <FaHome size={24} />
        </a>
        <p className="text-blue-50 *:underline">
          <a href="/activités">activités</a> /{" "}
          <a href="/activités/hiver">hiver</a> /{" "}
          <a href={`/activites/activit%C3%A9shivernales/${activity}`}>
            {activityData?.params}
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
        <NotFound />
      )}
    </>
  );
}
