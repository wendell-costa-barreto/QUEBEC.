import { useRef } from "react";
export default function NotFound() {
  const hootSound = useRef(null);

  const playHoot = () => {
    if (hootSound.current) {
      hootSound.current.currentTime = 0;
      hootSound.current.play();
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="absolute w-full h-screen">
          <div className="relative group">
            <img
              src="/snowyOwl.png"
              alt=""
              className="absolute w-[40%] right-[2%] top-[2%] transition-transform duration-300 group-hover:rotate-[-10deg]"
              onMouseEnter={playHoot}
            />
            <div className="absolute px-6 py-6 flex items-center justify-center top-[10%] mt-[5%] right-[40%] bg-white group-hover:bg-gray-100 text-black p-2 rounded-full font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1>Tu t'as perdu?</h1>
            </div>
          </div>
        </div>
        <audio ref={hootSound} src="/hoot.mp3" preload="auto" />
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl font-semibold">
          Oops. La page que vous cherchez n'existe pas.
        </p>
        <a href="/">
          <button className="mt-6 px-8 py-4 cursor-pointer bg-blue-400/85 text-gray-900 rounded-full font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Revenez sur la page d'accueil.
          </button>
        </a>
      </div>
    </>
  );
}
