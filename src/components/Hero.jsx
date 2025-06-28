// HeroSection.jsx - Optimized for Performance, Accessibility & SEO
import { memo, useRef, useEffect, useState, useCallback } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const Hero = memo(function Hero({
  HeroTitle,
  HeroSubtitle,
  description,
  heroButton,
  gradient,
  heroButton2,
  onHeroButtonClick,
  onHeroButton2Click,
  videoSrc = "/videos/winter.mp4",
  videoPoster = "/images/winter-poster.jpg",
  isImg,
  imgSrc,
}) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Optimize video loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setVideoLoaded(true);
    const handleError = () => {
      console.warn("Video failed to load, falling back to poster image");
      setVideoLoaded(false);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    // Preload video metadata
    video.preload = "metadata";

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, []);

  const handleHeroButton = useCallback(
    (e) => {
      e.preventDefault();
      onHeroButtonClick?.();
    },
    [onHeroButtonClick]
  );

  const handleHeroButton2 = useCallback(
    (e) => {
      e.preventDefault();
      onHeroButton2Click?.();
    },
    [onHeroButton2Click]
  );

  // Animation variants with reduced motion support
  const animationVariants = {
    container: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: reducedMotion ? 0.1 : 0.8,
          ease: "easeOut",
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
          ease: "easeOut",
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
    title: {
      initial: { y: reducedMotion ? 0 : 30, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: reducedMotion ? 0.1 : 0.7,
          delay: reducedMotion ? 0 : 0.2,
          ease: "easeOut",
        },
      },
    },
    description: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: reducedMotion ? 0.1 : 0.7,
          delay: reducedMotion ? 0 : 0.4,
          ease: "easeOut",
        },
      },
    },
    buttons: {
      initial: { y: reducedMotion ? 0 : 20, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: reducedMotion ? 0.1 : 0.5,
          delay: reducedMotion ? 0 : 0.6,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden text-white"
      aria-label="Hero section"
    >
      {/* SEO-optimized structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          name: HeroTitle,
          description: description,
          url: window.location.href,
        })}
      </script>

      <AnimatePresence>
        <motion.div
          className="absolute inset-0 w-full h-full"
          variants={animationVariants.container}
          initial="initial"
          animate="animate"
        >
          {/* Overlay for better text contrast */}
          <div
            className="absolute inset-0 bg-black/20 z-10"
            aria-hidden="true"
          />

          {/* Optimized video with proper loading states */}
          {!isImg ? (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover z-0"
              autoPlay
              playsInline
              muted
              loop
              poster={videoPoster}
              preload="metadata"
              aria-label="Background video showcasing Quebec winter scenery"
            >
              <source src={videoSrc} type="video/mp4" />
              <track
                kind="descriptions"
                src="/videos/winter-descriptions.vtt"
                srcLang="fr"
                label="Descriptions françaises"
              />
              <p>
                Votre navigateur ne supporte pas les vidéos HTML5. Voici un{" "}
                <a href={videoPoster}>lien vers l'image de fond</a>.
              </p>
            </video>
          ) : (
            <img
              src={imgSrc}
              alt="Vue hivernale du Québec"
              className="absolute inset-0 w-full h-full object-cover z-0"
              loading="eager"
              decoding="async"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <Navbar />

      <main className="relative z-20 flex flex-col h-[calc(100vh-120px)] justify-center px-6 md:px-16 lg:px-24 mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            className="max-w-4xl"
            variants={animationVariants.content}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4"
              variants={animationVariants.title}
              initial="initial"
              animate="animate"
            >
              <span className="block">{HeroTitle}</span>
              <span
                className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
              >
                {HeroSubtitle}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl font-light max-w-2xl mb-8 text-gray-200"
              variants={animationVariants.description}
              initial="initial"
              animate="animate"
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              variants={animationVariants.buttons}
              initial="initial"
              animate="animate"
              role="group"
              aria-label="Actions principales"
            >
              <motion.button
                className={`px-8 py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-full transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50`}
                whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                onClick={handleHeroButton}
                aria-describedby="hero-button-desc"
              >
                {heroButton}
              </motion.button>
              <span id="hero-button-desc" className="sr-only">
                Bouton principal pour explorer le contenu
              </span>

              <motion.button
                className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                onClick={handleHeroButton2}
                aria-describedby="hero-button2-desc"
              >
                {heroButton2}
              </motion.button>
              <span id="hero-button2-desc" className="sr-only">
                Bouton secondaire pour obtenir plus d'informations
              </span>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>
    </section>
  );
});

export default Hero;
