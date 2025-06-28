import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const dropdowns = [
    {
      title: "Destinations",
      links: [
        {
          title: "Villes",
          href: "/destinations/villes",
        },
        {
          title: "Stations de ski",
          href: "/destinations/ski",
        },
        {
          title: "Endroits où aller",
          href: "/destinations/aller",
        },
        {
          title: "Art et Culture",
          href: "/destinations/art",
        },
      ],
    },

    {
      title: "Activités",
      links: [
        {
          title: "Aperçu",
          href: "/activites",
        },
        {
          title: "Saisons",
          href: "/activités/saisons",
        },
        {
          title: "Festivités",
          href: "/activités/festivites",
        },
        {
          title: "Activités en plain air",
          href: "/activités/plainair",
        },
      ],
    },
    {
      title: "Planification",
      links: [
        {
          title: "Comment entrer",
          href: "/planification/entrer",
        },
        {
          title: "Se déplacer",
          href: "/planification/deplacer",
        },
      ],
    },
    {
      title: "Articles",
      links: [
        {
          title: "Tous les articles",
          href: "/articles",
        },
        {
          title: "Après la tombée de la nuit",
          href: "/articles/nightlife",
        },
        {
          title: "Cuisine",
          href: "/articles/cuisine",
        },
        {
          title: "Festivals",
          href: "/articles/festivals",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-950 text-white px-6 py-12 mt-[12%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-3xl font-extrabold tracking-tight mb-10">
          <a href="/"> QUEBEC.</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {dropdowns.map((drop, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">
                <a href={drop.title.toLowerCase()}>{drop.title}</a>
              </h4>
              <ul className="space-y-2">
                {drop.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white hover:underline transition-all duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href="#"
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition-colors"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
          >
            <FaGithub size={18} />
          </a>
        </div>

        <div className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} QUEBEC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
