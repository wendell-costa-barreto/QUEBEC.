// SeasonalQuebecHero.jsx - Optimized Version
import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import { sliderData } from "../lib/Imports";
import { seasons } from "../lib/Imports";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import DividedSection from "../components/DividedSection";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "../components/Sliders";
import Navbar from "../components/Navbar";
import { preloadCriticalResources, VideoErrorBoundary } from "../utils/utils";
import { useIntersectionObserver } from "../hooks/hooks";

// Memoized components for better performance
const MemoizedSlider = memo(Slider);
const MemoizedDividedSection = memo(DividedSection);
const MemoizedSection = memo(Section);
const MemoizedNavbar = memo(Navbar);

export default function SeasonalQuebecHero() {
  const [currentSeason, setCurrentSeason] = useState("hiver");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState({});

  // Refs for video elements
  const videoRefs = useRef({
    winter: null,
    spring: null,
    summer: null,
    fall: null,
  });

  // Intersection Observer for performance optimization
  const heroRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Intersection Observer for hero visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Memoized current season data
  const currentSeasonData = useMemo(
    () => seasons.find((season) => season.id === currentSeason),
    [currentSeason]
  );

  // Optimized season change with proper error handling
  const changeSeason = useCallback(
    (newSeason) => {
      if (newSeason === currentSeason || isTransitioning) return;

      setIsTransitioning(true);

      // Pause current video
      const currentVideo = videoRefs.current[currentSeason];
      if (currentVideo) {
        currentVideo.pause();
      }

      // Start playing the new video
      const newVideo = videoRefs.current[newSeason];
      if (newVideo) {
        newVideo.currentTime = 0;
        newVideo.play().catch(console.warn);

        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
          setCurrentSeason(newSeason);
          setIsTransitioning(false);
        });
      }
    },
    [currentSeason, isTransitioning]
  );

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!isHeroVisible) return;

    setScrollPosition(window.scrollY);
  }, [isHeroVisible]);

  useEffect(() => {
    let ticking = false;

    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [handleScroll]);

  // Auto-rotate with proper cleanup
  useEffect(() => {
    if (!autoPlayEnabled || !isHeroVisible) return;

    const currentIndex = seasons.findIndex(
      (season) => season.id === currentSeason
    );
    const nextIndex = (currentIndex + 1) % seasons.length;

    const timer = setTimeout(() => {
      changeSeason(seasons[nextIndex].id);
    }, (currentSeasonData?.videoDuration || 10) * 1000);

    return () => clearTimeout(timer);
  }, [
    currentSeason,
    autoPlayEnabled,
    isHeroVisible,
    changeSeason,
    currentSeasonData,
  ]);

  // Optimized video initialization
  useEffect(() => {
    const loadPromises = Object.keys(videoRefs.current).map((season) => {
      const video = videoRefs.current[season];
      if (!video) return Promise.resolve();

      return new Promise((resolve) => {
        const handleLoadedData = () => {
          setVideosLoaded((prev) => ({ ...prev, [season]: true }));
          resolve();
        };

        const handleError = () => {
          console.warn(`Video for ${season} failed to load`);
          resolve();
        };

        video.addEventListener("loadeddata", handleLoadedData, { once: true });
        video.addEventListener("error", handleError, { once: true });

        video.muted = true;
        video.preload = "metadata";
        video.load();

        // Only play current season's video
        if (season === currentSeason) {
          video.play().catch(console.warn);
        }
      });
    });

    Promise.all(loadPromises);
  }, [currentSeason]);

  // Memoized animation variants
  const animationVariants = useMemo(
    () => ({
      container: {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: reducedMotion ? 0.1 : 1.2,
            ease: "easeInOut",
          },
        },
        exit: {
          opacity: 0,
          transition: {
            duration: reducedMotion ? 0.1 : 0.6,
          },
        },
      },
      content: {
        initial: { opacity: 0, y: reducedMotion ? 0 : 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reducedMotion ? 0.1 : 0.7,
          },
        },
        exit: {
          opacity: 0,
          y: reducedMotion ? 0 : -20,
          transition: {
            duration: reducedMotion ? 0.1 : 0.3,
          },
        },
      },
      seasonSelector: {
        initial: { y: reducedMotion ? 0 : -20, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            delay: reducedMotion ? 0 : 0.5,
            duration: reducedMotion ? 0.1 : 0.5,
          },
        },
      },
    }),
    [reducedMotion]
  );

  const parallaxOffset = useMemo(
    () => (reducedMotion ? 0 : -scrollPosition * 0.3),
    [scrollPosition, reducedMotion]
  );

  return (
    <>
      {/* SEO Meta Tags */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Québec Saisonnier",
          description:
            "Découvrez toute la beauté du Québec à travers les quatre saisons",
          image: seasons.map((season) => season.imageSrc),
          location: {
            "@type": "Place",
            name: "Québec, Canada",
          },
        })}
      </script>

      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden text-white"
        aria-label="Hero section saisonnier du Québec"
      >
        <AnimatePresence>
          {seasons.map((season) => (
            <motion.div
              key={season.id}
              className="absolute inset-0 w-full h-full"
              variants={animationVariants.container}
              initial="initial"
              animate={{
                opacity: currentSeason === season.id ? 1 : 0,
                y: parallaxOffset,
              }}
              exit="exit"
              style={{ zIndex: currentSeason === season.id ? 5 : 1 }}
              aria-hidden={currentSeason !== season.id}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${season.color} opacity-[0.01] z-10`}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-black/40 z-5"
                aria-hidden="true"
              />

              <video
                ref={(el) => (videoRefs.current[season.id] = el)}
                className="absolute inset-0 w-full h-full object-cover z-0"
                playsInline
                muted
                loop
                preload="metadata"
                aria-label={`Vidéo de fond pour la saison ${season.name}`}
                poster={season.posterSrc}
              >
                <source src={season.videoSrc} type="video/mp4" />
                <track
                  kind="descriptions"
                  src={`/videos/${season.id}-descriptions.vtt`}
                  srcLang="fr"
                  label={`Descriptions ${season.name}`}
                />
              </video>

              {!videosLoaded[season.id] && (
                <img
                  src={season.posterSrc}
                  alt={`Vue ${season.name} du Québec`}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  loading={currentSeason === season.id ? "eager" : "lazy"}
                  decoding="async"
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        <MemoizedNavbar currentSeason={currentSeason} />

        {/* Season Selector */}
        <nav className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30">
          <motion.div
            className="flex space-x-2 md:space-x-4 bg-black/30 backdrop-blur-md rounded-full p-1.5"
            variants={animationVariants.seasonSelector}
            initial="initial"
            animate="animate"
            role="tablist"
            aria-label="Sélecteur de saisons"
          >
            {seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => {
                  changeSeason(season.id);
                  setAutoPlayEnabled(false);
                }}
                className={`flex items-center px-3 md:px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
                  currentSeason === season.id
                    ? `bg-gradient-to-r ${season.color} text-white`
                    : "bg-transparent text-white/70 hover:bg-white/10"
                }`}
                role="tab"
                aria-selected={currentSeason === season.id}
                aria-controls={`panel-${season.id}`}
                aria-label={`Changer vers la saison ${season.name}`}
              >
                <span className="mr-2" aria-hidden="true">
                  {season.icon}
                </span>
                <span className="font-medium">{season.name}</span>
              </button>
            ))}
          </motion.div>
        </nav>

        {/* Main Content */}
        <main className="relative z-20 flex flex-col h-[calc(100vh-120px)] justify-center px-6 md:px-16 lg:px-24 mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSeason}
              className="max-w-4xl"
              variants={animationVariants.content}
              initial="initial"
              animate="animate"
              exit="exit"
              role="tabpanel"
              id={`panel-${currentSeason}`}
              aria-labelledby={`tab-${currentSeason}`}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4"
                initial={{ y: reducedMotion ? 0 : 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: reducedMotion ? 0.1 : 0.7,
                  delay: reducedMotion ? 0 : 0.2,
                }}
              >
                <span className="block">{currentSeasonData.title}</span>
                <span
                  className={`bg-gradient-to-r ${currentSeasonData.color} bg-clip-text text-transparent`}
                >
                  {currentSeasonData.subtitle}
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light max-w-2xl mb-8 text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: reducedMotion ? 0.1 : 0.7,
                  delay: reducedMotion ? 0 : 0.4,
                }}
              >
                Découvrez toute la beauté du Québec en{" "}
                {currentSeasonData.name.toLowerCase()}, où chaque saison offre
                une expérience unique.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-12"
                initial={{ y: reducedMotion ? 0 : 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: reducedMotion ? 0.1 : 0.5,
                  delay: reducedMotion ? 0 : 0.6,
                }}
                role="group"
                aria-label="Actions principales"
              >
                <a
                  href={`/activités/saisons/${currentSeasonData.params}`}
                  className="cursor-pointer"
                >
                  <motion.button
                    className={`px-8 py-3 bg-gradient-to-r cursor-pointer ${currentSeasonData.color} text-white font-semibold rounded-full transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50`}
                    whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                    whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                    aria-label={`Explorer la saison ${currentSeasonData.name}`}
                  >
                    Explorer {currentSeasonData.name}
                  </motion.button>
                </a>

                <motion.button
                  className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                  whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                  whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                  aria-label="En savoir plus sur cette saison"
                >
                  En savoir plus
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </main>
      </section>

      {/* Content Sections */}
      <div className="w-full">
        <MemoizedSlider
          title={sliderData[0]?.title}
          subtitle={sliderData[0]?.subtitle}
          images={sliderData[0]?.images}
        />
        <MemoizedDividedSection
          src="/culturehome.jpg"
          alt="Patrimoine culturel du Québec"
          title="Plongez dans le riche patrimoine du Québec"
          subtitle="Découvrez la culture unique du Québec, où traditions franco-canadiennes et modernité se rencontrent. Promenez-vous dans les rues pavées du Vieux-Québec, classé au patrimoine mondial de l'UNESCO, assistez à des festivals vibrants comme le Carnaval de Québec ou explorez les galeries d'art locales."
          buttonText="Explorez le cœur du Québec"
          link="/destinations/art"
        />
        <MemoizedSlider
          title={sliderData[1]?.title}
          subtitle={sliderData[1]?.subtitle}
          images={sliderData[1]?.images}
        />

        <MemoizedSection
          src="/art.jpg"
          alt="Art et culture québécois"
          title="Art et Culture québécois"
          subtitle="Le Québec est un vivier d'art et de culture, où les traditions s'enracinent dans l'histoire et où les artistes innovent sans cesse. Découvrez les galeries d'art, les musées, les festivals et les événements qui font vibrer la scène culturelle du Québec."
          buttonText="Découvrez"
          link="/destinations/art"
        />
        <MemoizedSlider
          title={sliderData[2]?.title}
          subtitle={sliderData[2]?.subtitle}
          images={sliderData[2]?.images}
        />
      </div>

      {/* Articles Section */}
      <section className="py-16" aria-labelledby="articles-heading">
        <motion.div className="flex w-full h-[12vh] justify-center items-start flex-col gap-4 ml-[8%] mt-[4%]">
          <motion.h2
            id="articles-heading"
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.6 }}
            viewport={{ once: true }}
          >
            Explorer le Quebec
          </motion.h2>
          <motion.p
            className="text-2xl mb-16 font-light"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Jetez un œil à quelques articles triés sur le volet
          </motion.p>
        </motion.div>

        <motion.div
          className="flex w-full h-[55vh] justify-center gap-4"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.5 }}
          viewport={{ once: true }}
        >
          <article className="w-[30%] h-full flex flex-col justify-start items-start">
            <img
              src="/festival.jpg"
              alt="Festivals colorés du Québec"
              className="w-full h-[80%] object-cover"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-3xl font-bold pt-4">Festivals au Québec</h3>
            <a
              href="/articles/festivals"
              className="font-semibold flex gap-1 items-center cursor-pointer hover:underline focus:underline focus:outline-none"
              aria-label="Lire l'article complet sur les festivals du Québec"
            >
              Voir l'article <FaArrowRight strokeWidth={1} aria-hidden="true" />
            </a>
          </article>

          <article className="w-[60%] flex flex-col justify-start items-start">
            <img
              src="/nightlife.jpg"
              alt="Vie nocturne animée de Québec"
              className="w-full h-[80%] object-cover object-[50%_75%]"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-3xl font-bold pt-4">
              Après la tombée de la nuit à Québec
            </h3>
            <a
              href="/articles/nightlife"
              className="font-semibold flex gap-1 items-center cursor-pointer hover:underline focus:underline focus:outline-none"
              aria-label="Lire l'article complet sur la vie nocturne à Québec"
            >
              Voir l'article <FaArrowRight strokeWidth={1} aria-hidden="true" />
            </a>
          </article>
        </motion.div>

        <motion.article
          className="mx-auto w-[90vw] mt-4 h-[48vh] flex flex-col justify-start items-start"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/food.jpg"
            alt="Cuisine traditionnelle du Québec"
            className="w-full h-[100%] object-cover object-[50%_55%]"
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-3xl font-bold pt-4">La cuisine du Quebec</h3>
          <a
            href="/articles/cuisine"
            className="font-semibold flex gap-1 items-center cursor-pointer hover:underline focus:underline focus:outline-none"
            aria-label="Lire l'article complet sur la cuisine du Québec"
          >
            Voir l'article <FaArrowRight strokeWidth={1} aria-hidden="true" />
          </a>
        </motion.article>
      </section>

      <Footer />
    </>
  );
}
