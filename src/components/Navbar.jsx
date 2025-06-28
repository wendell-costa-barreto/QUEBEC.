// components/Navbar.js
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TiArrowRight } from "react-icons/ti";
import Hamburger from "hamburger-react";
import SubSidebar from "./SubSidebar";
import { FaArrowRight } from "react-icons/fa";
import ThirdSidebar from "./ThirdSidebar";

export default function Navbar({ currentSeason }) {
  const [isOpen, setOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSubItem, setCurrentSubItem] = useState(null);

  const subsections = {
    Activités: [
      { title: "Aperçu", link: "/activités" },
      {
        title: "Saisons",
        link: "/activités/saisons",
        submenu: [
          { title: "Hiver", link: "/activités/saisons/hiver" },
          { title: "Été", link: "/activités/saisons/eté" },
          { title: "Automne", link: "/activités/saisons/automne" },
          { title: "Printemps", link: "/activités/saisons/printemps" },
        ],
      },
      { title: "Festivités", link: "/activités/festivites" },
      {
        title: "Activités en plain air",
        link: "/activités/plainair",
        submenu: [
          { title: "Camping", link: "/activités/plainair/camping" },
          { title: "Equitation", link: "/activités/plainair/equitation" },
          { title: "Vélo", link: "/activités/plainair/velo" },
          { title: "Canoë", link: "/activités/plainair/canoe" },
          {
            title: "Observation des baleines",
            link: "/activités/plainair/baleines",
          },
        ],
      },
      {
        title: "Activités hivernales",
        link: "/activités/hiver",
        submenu: [
          { title: "Ski", link: "/activités/hiver/ski" },
          { title: "Ski de fond", link: "/activités/hiver/skidefond" },
          { title: "Nuit en igloo", link: "/activités/hiver/igloo" },
          { title: "Traineu à chien", link: "/activités/hiver/traineuachien" },
          {
            title: "Pêche sur glace",
            link: "/activités/hiver/pechesurglace",
          },
          {
            title: "Patinage",
            link: "/activités/hiver/patinage",
          },
          {
            title: "Luge",
            link: "/activités/hiver/luge",
          },
        ],
      },
    ],
    Destinations: [
      {
        title: "Villes et paysages",
        link: "/destinations/villes",
        submenu: [
          { title: "Montréal", link: "/destinations/villes/montreal" },
          { title: "Quebec", link: "/destinations/villes/quebec" },
          { title: "Saguenay", link: "/destinations/villes/saguenay" },
          { title: "Gaspésie", link: "/destinations/villes/gaspesie" },
          {
            title: "Cantons de l'Est",
            link: "/destinations/villes/estrie",
          },
          {
            title: "Mont Tremblant",
            link: "/destinations/villes/monttremblant",
          },
        ],
      },
      {
        title: "Stations de ski",
        link: "/destinations/ski",
        submenu: [
          {
            title: "Massif de Charlevoix",
            link: "/destinations/ski/massifdecharlevoix",
          },
          { title: "Stoneham", link: "/destinations/ski/stoneham" },
          {
            title: "Mont-Sainte-Anne",
            link: "/destinations/ski/montsainteanne",
          },
          {
            title: "Centre de ski Le Relais",
            link: "/destinations/ski/lerelais",
          },
          {
            title: "Mont Tremblant",
            link: "/destinations/ski/monttremblant",
          },
        ],
      },
      {
        title: "Endroits où aller",
        link: "/destinations/aller",
        submenu: [
          {
            title: "Montmorrency Chute",
            link: "/destinations/aller/montmorrency",
          },
          {
            title: "Parc Jacques-Cartier",
            link: "/destinations/aller/jacquescartier",
          },
          { title: "Hôtel de Glace", link: "/destinations/aller/hoteldeglace" },
        ],
      },
      { title: "Art et Culture", link: "/destinations/art" },
    ],
    Planification: [
      { title: "Se déplacer", link: "/planification/deplacer" },
      { title: "Conditions d'entrée", link: "/planification/entrer" },
    ],
    Articles: [
      { title: "Tous les articles", link: "/articles" },
      { title: "Après la tombée de la nuit", link: "/articles/nightlife" },
      { title: "Cuisine", link: "/articles/cuisine" },
      { title: "Festivals", link: "/articles/festivals" },
    ],
  };

  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const openSubMenu = (category) => {
    setCurrentCategory(category);
    setIsSubOpen(true);
    if (currentCategory) removeAccents(category);
  };

  const openThirdMenu = (subItem) => {
    setCurrentSubItem(subItem);
    setIsThirdOpen(true);
  };

  const getSeasonColorClass = () => {
    switch (currentSeason) {
      case "hiver":
        return "text-blue-400";
      case "spring":
        return "text-pink-400";
      case "summer":
        return "text-yellow-400";
      case "fall":
        return "text-orange-400";
      default:
        return "text-gray-400";
    }
  };

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const subsidebar = document.getElementById("subsidebar");
    const thirdsidebar = document.getElementById("thirdsidebar");

    if (!sidebar || !subsidebar || !thirdsidebar) return;

    sidebar.classList.toggle("translate-x-0", isOpen);
    sidebar.classList.toggle("-translate-x-full", !isOpen);

    subsidebar.classList.toggle("translate-x-0", isSubOpen);
    subsidebar.classList.toggle("-translate-x-full", !isSubOpen);

    thirdsidebar.classList.toggle("translate-x-0", isThirdOpen);
    thirdsidebar.classList.toggle("-translate-x-full", !isThirdOpen);
  }, [isOpen, isSubOpen, isThirdOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => {
            setOpen(false);
            setIsSubOpen(false);
            setIsThirdOpen(false);
          }}
        />
      )}

      <aside
        id="sidebar"
        className="fixed top-0 left-0 h-screen w-1/4 bg-white -translate-x-full transition-transform duration-300 z-50 flex flex-col"
      >
        <div className="border-t border-gray-500/40 w-full h-full pt-6 mt-24 ">
          {Object.keys(subsections).map((category, i) => (
            <div
              key={i}
              className="font-bold text-3xl p-4 flex items-center cursor-pointer hover:bg-gray-100"
              onClick={() => openSubMenu(category)}
            >
              <span className="text-black hover:underline">{category}</span>
              <TiArrowRight size={36} className="ml-auto" fill="black" />
            </div>
          ))}
        </div>
      </aside>

      <SubSidebar
        isOpen={isSubOpen}
        setIsOpen={setIsSubOpen}
        subsections={subsections[currentCategory]}
        category={currentCategory}
        openThirdMenu={openThirdMenu}
      />

      <ThirdSidebar
        isOpen={isThirdOpen}
        setIsOpen={setIsThirdOpen}
        item={currentSubItem}
      />

      <div className="absolute top-4 left-4 z-50">
        <Hamburger
          toggled={isOpen}
          toggle={() => {
            const newState = !isOpen;
            setOpen(newState);
            if (!newState) {
              setIsSubOpen(false);
              setIsThirdOpen(false);
            }
          }}
          color={isOpen ? "black" : "white"}
        />
      </div>

      <motion.nav
        className="relative z-20 flex justify-between items-center px-6 md:px-12 py-6 h-[8vh]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-2xl font-bold tracking-wider flex items-center">
          <span>
            <a href="/" className="text-white ml-10">
              QUÉBEC
            </a>
          </span>
          <span className={getSeasonColorClass()}>.</span>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
            FR | EN
          </button>
          <button className="hidden md:block px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
            En savoir plus
          </button>
        </div>
      </motion.nav>
    </>
  );
}
