export default function UnderConstruction() {
  return (
    <>
      <div className="bg-[url('/construciton.jpg')] h-screen bg-cover flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold">En cours de construction</h1>
        <p className="text-2xl font-semibold w-[30%] text-justify mt-8">
          Ce contenu est en cours de construction, merci de votre patience. S'il
          vous plait, revenez plus tard.
        </p>
        <a href="/">
          <button className="mt-8 px-8 py-4 cursor-pointer bg-yellow-400/85 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Retourner sur la page d'accueil
          </button>
        </a>
      </div>
    </>
  );
}
