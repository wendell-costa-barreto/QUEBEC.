import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DynamicActivities from "./pages/activites/dynamicActivities";
import Activites from "./pages/activites/activites";
import Saisons from "./pages/activites/Saisons";
import PlainAir from "./pages/activites/plainAir";
import Aller from "./pages/destinations/Aller";
import SkiStations from "./pages/destinations/ski";
import Festivites from "./pages/activites/Festivites";
import DynamicVilles from "./pages/destinations/dynamicVilles";
import Villes from "./pages/destinations/Villes";
import Planification from "./pages/planification/Planification";
import Entrer from "./pages/planification/Entrer";
import Deplacer from "./pages/planification/Deplacer";
import Destinations from "./pages/destinations/destinations";
import DynamicSeasons from "./pages/activites/dynamicSeasons";
import DynamicWinterActivities from "./pages/activites/dynamicWinterActivities";
import Art from "./pages/destinations/Art";
import Stations from "./pages/destinations/dynamicStations";
import DynamicPlaces from "./pages/destinations/dynamicPlaces";
import ActivitesHiver from "./pages/activites/activitesHiver";
import UnderConstruction from "./components/UnderConstruction";
import NotFound from "./components/404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/*ACTIVITES*/}
        <Route path="/activités" element={<Activites />} />
        <Route path="/activités/saisons/" element={<Saisons />} />
        <Route path="/activités/festivites/" element={<Festivites />} />
        <Route path="/activités/plainair/" element={<PlainAir />} />
        <Route path="/activités/hiver/" element={<ActivitesHiver />} />

        {/*DESTINATIONS*/}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/aller/" element={<Aller />} />
        <Route path="/destinations/ski/" element={<SkiStations />} />
        <Route path="/destinations/villes/" element={<Villes />} />
        <Route path="/destinations/art/" element={<Art />} />

        {/*PLANIFICATION*/}
        <Route path="/planification" element={<Planification />} />
        <Route path="/planification/entrer/" element={<Entrer />} />
        <Route path="/planification/deplacer/" element={<Deplacer />} />

        <Route
          path="/destinations/villes/:ville/"
          element={<DynamicVilles />}
        />

        <Route path="/destinations/ski/:station/" element={<Stations />} />

        <Route
          path="/activités/plainair/:activity/"
          element={<DynamicActivities />}
        />

        <Route
          path="/activités/hiver/:activity/"
          element={<DynamicWinterActivities />}
        />

        <Route path="/destinations/aller/:place/" element={<DynamicPlaces />} />
        <Route path="/destinations/ski/:station/" element={<DynamicVilles />} />
        <Route
          path="/activités/saisons/:season/"
          element={<DynamicSeasons />}
        />

        {/* Add a catch-all route to show not found or redirect */}
        <Route path="/articles/:any" element={<UnderConstruction />} />
        <Route path="/articles" element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
