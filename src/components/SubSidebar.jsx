import { FaArrowDown, FaArrowLeft } from "react-icons/fa";

export default function SubSidebar({
  isOpen,
  setIsOpen,
  subsections = [],
  category,
  openThirdMenu,
}) {
  return (
    <aside
      id="subsidebar"
      className="fixed top-0 left-0 h-screen w-1/4 bg-white -translate-x-full transition-transform duration-300 z-50"
    >
      <div className="border-t border-gray-500/40 w-full h-full pt-16">
        <div
          className="font-bold text-3xl p-4 flex items-center cursor-pointer hover:bg-gray-100"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-black mb-6 flex items-center gap-6">
            <FaArrowLeft width={2} size={24} /> Retourner
          </span>
        </div>

        <div className="p-2">
          <h2 className="text-xl font-semibold px-4 py-2 text-gray-700">
            <a href={`/${category?.toLowerCase()}`}>{category}</a>
          </h2>

          {subsections.map((item, index) => (
            <div
              key={index}
              className="block px-4 py-3 text-lg hover:bg-gray-100 rounded-lg mx-2 my-1 cursor-pointer text-black hover:underline"
              onClick={() =>
                item.submenu
                  ? openThirdMenu(item)
                  : window.location.assign(item.link)
              }
            >
              <p className="flex items-center gap-2">
                {" "}
                {item?.submenu ? (
                  <>
                    {item.title} <FaArrowDown />
                  </>
                ) : (
                  item.title
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
