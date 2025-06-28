export default function ThirdSideBar({ isOpen, setIsOpen, item }) {
  return (
    <aside
      id="thirdsidebar"
      className="fixed top-0 left-0 h-screen w-1/4 bg-white -translate-x-full transition-transform duration-300 z-50"
    >
      <div className="border-t border-gray-500/40 w-full h-full pt-16">
        <div
          className="font-bold text-3xl p-4 flex items-center cursor-pointer hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-black">← Retourner</span>
        </div>

        {item?.submenu && (
          <div className="p-2">
            <h2 className="text-xl font-semibold px-4 py-2 text-gray-700">
              <a href={item.link}>{item.title}</a>
            </h2>

            {item.submenu.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="block px-4 py-3 text-lg hover:bg-green-50 text-green-800 rounded-lg mx-2 my-1"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
