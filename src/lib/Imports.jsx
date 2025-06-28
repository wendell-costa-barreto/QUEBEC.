import {
  ChevronDown,
  MapPin,
  Sun,
  Snowflake,
  Leaf,
  Flower,
  Calendar,
} from "lucide-react";

export const sliderData = [
  {
    title: "Activités hivernales",
    subtitle: "Découvrez les merveilles de l’hiver québécois",
    images: [
      {
        src: "/skiing.webp",
        alt: "Skiing",
        title: "Ski et snowboard",
        description:
          "Profitez des meilleures pistes dans les plus belles stations de ski du Québec",
        link: "/activites/activiteshiverales/ski",
        linkText: "Découvrez les pistes de ski",
        params: "ski",
      },
      {
        src: "/country_side_skiing.jpg",
        alt: "Ski de fond",
        title: "Ski de fond",
        description:
          "C'est prendre son temps pour profiter de la beauté de la nature enneigée.",
        link: "/activites/activiteshiverales/skidefond",
        linkText: "Skier au ski de fond",
        params: "skidefond",
      },
      {
        src: "/igloo.jpg",
        alt: "Igloo",
        title: "Nuit en igloo",
        description: "Expérience polaire, zéro pingouin garanti",
        link: "https://example.com/igloo",
        linkText: "En savoir plus",
        params: "igloo",
      },
      {
        src: "/assets/winterActivities/dogSledding.webp",
        alt: "Traineu à chien",
        title: "Traineu à chien",
        description: "Profitez de la piste de ski de chien en hiver.",
        link: "/activites/activiteshiverales/traineauachiens",
        linkText: "Découvrez les pistes de ski de chien",
        params: "traineauachiens",
      },
      {
        src: "/assets/winterActivities/iceFishing.jpg",
        alt: "Pêche sur glace",
        title: "Pêche sur glace",
        description: "Pêchez sur la glace et profitez de la magnifique vue.",
        link: "/activites/activiteshiverales/pechesurglace",
        linkText: "Pêchez sur la glace",
        params: "pechesurglace",
      },
      {
        src: "/assets/winterActivities/iceSkating.jpg",
        alt: "Patinage sur glace",
        title: "Patinage sur glace",
        description: "Profitez de la glace pour patiner et vous amuser.",
        link: "/activites/activiteshiverales/patinage",
        linkText: "Découvrez les pistes de ski de chien",
        params: "patinage",
      },
      {
        src: "/assets/winterActivities/sledding.jpg",
        alt: "Luge",
        title: "Luge",
        description: "Lugez sur la neige et profitez de la magnifique vue.",
        link: "/activites/activiteshiverales/Luge",
        linkText: "Lugez sur la neige",
        params: "luge",
      },
    ],
  },
  {
    title: "Destinations Populaires",
    subtitle: "Découvrez nos destinations populaires",
    images: [
      {
        src: "/assets/montreal.jpg",
        alt: "Montréal",
        title: "Montréal",
        description: "Profitez de la magnifique ville de Montréal",
        link: "/destinations/villes/montreal",
        linkText: "Découvrez la ville de Montréal",
      },
      {
        src: "/quebeccity.jpg",
        alt: "Québec",
        title: "Québec",
        description: "Profitez de la ville de Quebec",
        link: "/destinations/villes/quebec",
        linkText: "Démasquez les merveilles de Quebec",
      },
      {
        src: "/assets/saguenay.jpg",
        alt: "Saguenay",
        title: "Saguenay",
        description: "Profitez de la plus beau paysage de Saguenay",
        link: "/destinations/villes/saguenay",
        linkText: "T'envouler dans Saguenay",
      },
      {
        src: "/gaspesie.jpg",
        alt: "Gaspésie",
        title: "Gaspésie",
        description: "Découvrez les paysages spectaculaires de la péninsule",
        link: "/destinations/villes/gaspesie",
        linkText: "Découvrez les secrets de la Gaspésie",
      },
      {
        src: "/charlevoix.webp",
        alt: "Charlevoix",
        title: "Charlevoix",
        description: "Explorez les montagnes et les vallées de la région",
        link: "/destinations/villes/charlevoix",
        linkText: "Découvrez la beauté de Charlevoix",
      },
      {
        src: "/cantons.jpg",
        alt: "Cantons de l'Est",
        title: "Cantons de l'Est",
        description:
          "Découvrez les villages et les villes pittoresques de la région",
        link: "/destinations/villes/cantonselest",
        linkText: "Découvrez les Cantons de l'Est",
      },
      {
        src: "/mont-tremblant.jpg",
        alt: "Mont Tremblant",
        title: "Mont Tremblant",
        description: "Profitez de la station de ski et de ses activités",
        link: "/destinations/monttremblant",
        linkText: "Découvrez les activités de Mont Tremblant",
      },
    ],
  },
  {
    title: "Activités de plein air",
    subtitle: "Aventures en plein air pour tous",
    images: [
      {
        src: "/assets/outdoorActivities/kayak.jpg",
        alt: "canoë",
        title: "Canoë sur le lac",
        description: "Profitez de la paix et de la tranquillité sur l'eau",
        dynamicDescription:
          "Profitez de la paix et de la tranquillité sur l'eau",
        link: "activités/plainair/kayak",
        linkText: "En savoir plus",
      },
      {
        src: "/assets/outdoorActivities/biking.jpg",
        alt: "vélo",
        title: "Balade à vélo",
        description: "Découvrez les routes sinueuses et les vues imprenables",
        link: "activités/plainair/velo",
        linkText: "En savoir plus",
      },
      {
        src: "/assets/outdoorActivities/camping.jpg",
        alt: "camping",
        title: "Camping",
        description: "Profitez de la liberté de camper sous les étoiles",
        link: "activités/plainair/camping",
        linkText: "En savoir plus",
      },
      {
        src: "/assets/outdoorActivities/whaleWatching.jpg",
        alt: "baleines",
        title: "Observation des baleines",
        description: "Découvrez les merveilles de la faune marine",
        link: "activités/plainair/observationdesbaleines",
        linkText: "En savoir plus",
      },
      {
        src: "/assets/outdoorActivities/horseRiding.jpeg",
        alt: "equitation",
        title: "Equitation",
        description: "Montez un cheval et explorez les sentiers de campagne",
        link: "/activités/plainair/equitation",
        linkText: "En savoir plus",
      },
    ],
  },
  {
    title: "Destinations au Québec",
    subtitle: "Explorez les incontournables du Québec",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "Ville de Québec",
        title: "Visite de la ville de Québec",
        description: "Plongez dans l'histoire et la culture",
        link: "/destinations/villes/quebec",
        linkText: "En savoir plus",
      },
      {
        src: "https://placehold.co/600x400",
        alt: "Montréal",
        title: "Découverte de Montréal",
        description: "Vivez l'effervescence urbaine et la gastronomie",
        link: "/destinations/villes/montréal",
        linkText: "En savoir plus",
      },
      {
        src: "https://placehold.co/600x400",
        alt: "Gaspésie",
        title: "Road trip en Gaspésie",
        description: "Admirez les paysages spectaculaires de la péninsule",
        link: "/destinations/villes/gaspésie",
        linkText: "En savoir plus",
      },
    ],
  },
];

export const seasons = [
  {
    id: "hiver",
    name: "Hiver",
    title: "Québec hivernal",
    subtitle: "Un paradis de neige et de glace",
    videoSrc: "/videos/winter.mp4", // Replace with actual video path
    videoDuration: 10, // Replace with actual duration in seconds
    icon: <Snowflake size={20} className="text-blue-300" />,
    color: "from-blue-400 to-blue-600",
    image: "/assets/winter.jpg",
    params: "hiver",

    description:
      "Découvrez les joies de l'hiver au Québec. Profitez des pistes de ski, des sentiers de randonnée en raquettes, des lacs gelés pour la pêche blanche et de la beauté de la nature enneigée.",
    mainContent:
      "Vous trouverez des centaines de kilomètres de pistes de ski de fond, des sentiers de motoneige et des endroits pour faire du snowboard, du ski alpin et de la luge. Il y a également des festivals de neige et de glace pour vous divertir.",
  },
  {
    id: "spring",
    name: "Printemps",
    title: "Réveil printanier",
    subtitle: "La nature en éclosion",
    videoSrc: "/videos/spring.mp4", // Replace with actual video path
    videoDuration: 10, // Replace with actual duration in seconds
    icon: <Flower size={20} className="text-pink-300" />,
    color: "from-pink-400 to-purple-600",
    image: "/assets/spring.jpg",
    params: "printemps",
    description:
      "Le printemps est une saison magique au Québec. Les fleurs s'épanouissent, les oiseaux chantent et la nature se réveille.",
    mainContent:
      "Vous pouvez faire des activités de plein air comme la randonnée, le kayak, le vélo, la pêche ou la cueillette de fruits et de légumes. Les festivals et les événements culturels sont également très courus.",
  },
  {
    id: "summer",
    name: "Été",
    title: "Aventures estivales",
    subtitle: "Exploration et festivals",
    videoSrc: "/videos/summer.mp4", // Replace with actual video path
    videoDuration: 10, // Replace with actual duration in seconds
    icon: <Sun size={20} className="text-yellow-300" />,
    color: "from-yellow-400 to-orange-600",
    image: "/assets/summer.jpg",
    params: "eté",
    description:
      "L'été est la saison idéale pour explorer les régions du Québec. Les beaux jours et les longues nuits sont propices aux activités de plein air.",
    mainContent:
      "Vous pouvez faire du camping, de la randonnée, du kayak, du rafting ou de la pêche. Les festivals et les événements culturels sont également très courus. N'oubliez pas de visiter les marchés publics et les fermes pour déguster des fruits et des légumes frais.",
  },
  {
    id: "fall",
    name: "Automne",
    title: "Couleurs d'automne",
    subtitle: "Forêts flamboyantes et saveurs",
    videoSrc: "/videos/autumn.mp4", // Replace with actual video path
    videoDuration: 10, // Replace with actual duration in seconds
    icon: <Leaf size={20} className="text-orange-300" />,
    color: "from-orange-400 to-red-600",
    image: "/assets/fall.jpg",
    params: "automne",
    images: [
      "/assets/fall/fall1.jpg",
      "/assets/fall/fall2.jpg",
      "/assets/fall/fall3.webp",
      "/assets/fall/fall4.jpg",
      "/assets/fall/fall5.jpg",
    ],
    description:
      "L'automne est une saison de fête au Québec. Les forêts sont couvertes de couleurs vives et les fruits et les légumes sont abondants.",
    mainContent:
      "Vous pouvez faire des activités de plein air comme la randonnée, le kayak, le vélo, la pêche ou la cueillette de fruits et de légumes. Les festivals et les événements culturels sont également très courus.",
  },
];

export const Villes = [
  {
    id: "1",
    name: "Montréal",
    params: "montreal",
    image: "/assets/montreal.jpg",
    coords: {},
    stats: {
      inhabitants: "1 704 694",
      location: "Île de Montréal, Québec, Canada",
      area: "365.1 km²",
      elevation: "76 m",
      viewpoint: "Mont Royal",
    },
    title: "Montréal",
    subtitle: "La métropole vibrante du Québec",
    heroImage: "/assets/montreal.jpg",
    description:
      "Montréal est une ville dynamique connue pour sa riche histoire, sa culture diversifiée et sa scène artistique animée. Elle offre un mélange unique d'influences françaises et anglaises.",
    mainContent:
      "Explorez les quartiers cosmopolites, les festivals renommés et la gastronomie variée de Montréal.",
  },
  {
    id: "2",
    name: "Québec",
    params: "quebec",
    image: "/assets/quebeccity.jpg",
    coords: {},
    stats: {
      inhabitants: "557,390",
      location: "Capitale-Nationale, Québec, Canada",
      area: "485.8 km²",
      elevation: "98 m",
      viewpoint: "Haute-Ville",
    },
    title: "Québec",
    subtitle: "Une ville historique au charme européen",
    heroImage: "/assets/quebeccity.jpg",
    description:
      "Québec est célèbre pour son Vieux-Québec, un site du patrimoine mondial de l'UNESCO, ses festivités hivernales et sa beauté naturelle environnante.",
    mainContent:
      "Découvrez les rues pavées, les fortifications historiques et la chaleureuse hospitalité québécoise.",
  },
  {
    id: "3",
    name: "Gaspé",
    params: "gaspesie",
    image: "/assets/gaspe.jpg",
    coords: {},
    stats: {
      inhabitants: "15,102",
      location: "Gaspésie, Québec, Canada",
      area: "1,440.65 km²",
      elevation: "15 m",
      viewpoint: "Mont Jacques-Cartier",
    },
    title: "Gaspé",
    subtitle: "Un paradis naturel au bout du monde",
    heroImage: "/assets/gaspesie.jpg",
    description:
      "Gaspé est le point de départ idéal pour explorer la péninsule de Gaspésie, connue pour ses paysages époustouflants, ses parcs nationaux et son riche patrimoine maritime.",
    mainContent:
      "Profitez des randonnées en montagne, de l'observation des baleines et des fruits de mer frais.",
  },
  {
    id: "4",
    name: "Saguenay",
    params: "saguenay",
    image: "/villeSaguenay.jpg",
    coords: {},
    stats: {
      inhabitants: "144,746",
      location: "Saguenay–Lac-Saint-Jean, Québec, Canada",
      area: "1,136.39 km²",
      elevation: "166 m",
      viewpoint: "Mont Valin",
    },
    title: "Saguenay",
    subtitle: "Une destination nature aux portes de la nature",
    heroImage: "/assets/saguenay.jpg",
    description:
      "Saguenay est une ville située au cœur de la région du Saguenay–Lac-Saint-Jean, à environ 250 km au nord de Québec. C'est un endroit idéal pour profiter de la nature et de ses activités de plein air.",
    mainContent:
      "Découvrez les montagnes, les rivières et les lacs de la région, ainsi que les nombreux parcs et réserves naturelles.",
  },
  {
    id: "5",
    name: "Charlevoix",
    params: "charlevoix",
    image: "/charlevoix.webp",
    coords: {},
    stats: {
      inhabitants: "13,338",
      location: "Charlevoix, Québec, Canada",
      area: "2,373.62 km²",
      elevation: "20 m",
      viewpoint: "Mont du lac des Cygnes",
    },
    title: "Charlevoix",
    subtitle: "Un paradis pour les amoureux de la nature",
    heroImage: "/assets/charlevoix.jpg",
    description:
      "Charlevoix est une région située au nord-est de Québec, célèbre pour ses paysages époustouflants et ses activités de plein air.",
    mainContent:
      "Découvrez les montagnes, les lacs, les rivières et les parcs nationaux de la région, ainsi que les nombreux sentiers de randonnée et les activités nautiques.",
  },
  {
    id: "6",
    name: "Estrie",
    params: "cantonselest",
    image: "/estrie.jpeg",
    coords: {
      lat: 45.47559,
      lon: -71.66742,
    },
    stats: {
      inhabitants: "321,000",
      location: "Estrie, Québec, Canada",
      area: "10,195.64 km²",
      elevation: "150 m",
      viewpoint: "Mont Orford",
    },
    title: "Estrie",
    subtitle: "Un territoire de villégiature et de détente",
    heroImage: "/assets/estrie.jpg",
    description:
      "L'Estrie est une région située au sud-est du Québec, célèbre pour ses paysages de montagnes, ses lacs et ses rivières.",
    mainContent:
      "Découvrez les nombreux parcs nationaux et les sentiers de randonnée de la région, ainsi que les activités nautiques et les stations de ski.",
  },
];
export const stations = {
  title: "Stations de Ski",
  subtitle: "Explorez les meilleures stations de ski du Québec",
  images: [
    {
      src: "/massif.jpg",
      alt: "Massif de Charlevoix",
      title: "Massif de Charlevoix",
      description:
        "Le Massif de Charlevoix est une station de ski de choix pour les skieurs de tous les niveaux. Elle offre 52 pistes balisées, 12 remontées mécaniques, 2 snowparks et une superficie skiable de 295 hectares. Les pistes varient en difficulté, des débutants aux experts, et offrent des vues spectaculaires sur la vallée et la rivière Malbaie.",
      link: "/destinations/ski/massifdecharlevoix",
      linkText: "En savoir plus",
      params: "massifdecharlevoix",
    },
    {
      src: "/stoneham.jpg",
      alt: "Stoneham",
      title: "Stoneham",
      description:
        "La station de ski de Stoneham est l'une des plus populaires au Québec. Elle offre 42 pistes balisées, 13 remontées mécaniques, 2 snowparks et une superficie skiable de 142 hectares. Les pistes varient en difficulté, des débutants aux experts, et offrent des vues spectaculaires sur la vallée et la rivière du même nom.",
      link: "/destinations/ski/stoneham",
      linkText: "En savoir plus",
      params: "stoneham",
    },
    {
      src: "/montsainteanne.jpg",
      alt: "Mont-Sainte-Anne",
      title: "Mont-Sainte-Anne",
      description:
        "La station de ski de Mont-Sainte-Anne est l'une des plus anciennes et des plus réputées au Québec. Elle offre 71 pistes balisées, 13 remontées mécaniques, 3 snowparks et une superficie skiable de 276 hectares. Les pistes varient en difficulté, des débutants aux experts, et offrent des vues spectaculaires sur la vallée et la rivière Montmorency.",
      link: "/destinations/ski/montsainteanne",
      linkText: "En savoir plus",
      params: "montsainteanne",
    },
    {
      src: "/lerelais.jpg",
      alt: "Centre de ski Le Relais",
      title: "Centre de ski Le Relais",
      description:
        "Le Centre de ski Le Relais est une station de ski conviviale et abordable qui offre 22 pistes balisées, 3 remontées mécaniques et une superficie skiable de 40 hectares. Les pistes varient en difficulté, des débutants aux experts, et offrent des vues spectaculaires sur la forêt et la rivière du même nom.",
      link: "/destinations/ski/lerelais",
      linkText: "En savoir plus",
      params: "lerelais",
    },
    {
      src: "/monttremblant.jpg",
      alt: "Mont Tremblant",
      title: "Mont Tremblant",
      description:
        "La station de ski de Mont Tremblant est l'une des plus populaires au Québec. Elle offre 102 pistes balisées, 14 remontées mécaniques, 2 snowparks et une superficie skiable de 650 hectares. Les pistes varient en difficulté, des débutants aux experts, et offrent des vues spectaculaires sur la vallée et la rivière du même nom.",
      link: "/destinations/ski/monttremblant",
      linkText: "En savoir plus",
      params: "monttremblant",
    },
  ],
};
export const placesToGo = {
  title: "Endroits où aller",
  subtitle: "Découvrez nos destinations populaires",
  images: [
    {
      title: "Chute Montmorency",
      subtitle: "Un spectacle naturel à couper le souffle",
      src: "/assets/fallBackImages/homePageFallback.jpg",
      alt: "Chute Montmorency",
      linkText: "Découvrez la Chute Montmorency",
      description:
        "Admirez la majestueuse Chute Montmorency, une des plus hautes chutes d'eau du Québec. Profitez des sentiers de randonnée, des vues panoramiques et des activités saisonnières.",
      params: "montmorrency",
    },
    {
      title: "Parc national de la Jacques-Cartier",
      subtitle: "Découvrez les paysages époustouflants du parc national",
      src: "/parcjacques.jpg",
      alt: "Parc national de la Jacques-Cartier",
      linkText: "Découvrez le parc national de la Jacques-Cartier",
      description:
        "Les paysages époustouflants du parc national de la Jacques-Cartier vous enchanteront. Profitez des randonnées en montagne, des activités nautiques et des stations de ski.",
      params: "jacquescartier",
    },
    {
      title: "Hôtel de Glace",
      subtitle: "Un hôtel de glace unique au monde",
      src: "/hotelglace.jpg",
      alt: "Hôtel de Glace",
      linkText: "Découvrez l'Hôtel de Glace",
      description:
        "Vivez une expérience inoubliable à l'Hôtel de Glace. L'hôtel de glace est un monument unique au monde, entièrement construit en glace et en neige. Profitez des chambres à thème, des bars et des restaurants, ainsi que des activités proposées.",
      params: "hoteldeglace",
    },
  ],
};
