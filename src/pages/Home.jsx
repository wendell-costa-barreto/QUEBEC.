import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { ChevronDown, MapPin, Sun, Snowflake, Leaf, Flower, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SeasonalQuebecHero() {
  const [currentSeason, setCurrentSeason] = useState('winter');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  
  const videoRefs = {
    winter: useRef(null),
    spring: useRef(null),
    summer: useRef(null),
    fall: useRef(null)
  };
  
  const seasons = [
    {
      id: 'winter',
      name: 'Hiver',
      title: 'Québec hivernal',
      subtitle: 'Un paradis de neige et de glace',
      videoSrc: '/videos/winter.mp4', // Replace with actual video path
      videoDuration: 10, // Replace with actual duration in seconds
      icon: <Snowflake size={20} className="text-blue-300" />,
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 'spring',
      name: 'Printemps',
      title: 'Réveil printanier',
      subtitle: 'La nature en éclosion',
      videoSrc: '/videos/spring.mp4', // Replace with actual video path
      videoDuration: 10, // Replace with actual duration in seconds
      icon: <Flower size={20} className="text-pink-300" />,
      color: 'from-pink-400 to-purple-600',
    },
    {
      id: 'summer',
      name: 'Été',
      title: 'Aventures estivales',
      subtitle: 'Exploration et festivals',
      videoSrc: '/videos/summer.mp4', // Replace with actual video path
      videoDuration: 10, // Replace with actual duration in seconds
      icon: <Sun size={20} className="text-yellow-300" />,
      color: 'from-yellow-400 to-orange-600',
    },
    {
      id: 'fall',
      name: 'Automne',
      title: 'Couleurs d\'automne',
      subtitle: 'Forêts flamboyantes et saveurs',
      videoSrc: '/videos/autumn.mp4', // Replace with actual video path
      videoDuration: 10, // Replace with actual duration in seconds
      icon: <Leaf size={20} className="text-orange-300" />,
      color: 'from-orange-400 to-red-600',
    }
  ];
  
  // Get current season data
  const currentSeasonData = seasons.find(season => season.id === currentSeason);
  
  // Handle season change with transition effect
  const changeSeason = (newSeason) => {
    if (newSeason === currentSeason || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Pause current video
    if (videoRefs[currentSeason].current) {
      videoRefs[currentSeason].current.pause();
    }
    
    // Start playing the new video and set it as current after transition
    if (videoRefs[newSeason].current) {
      videoRefs[newSeason].current.currentTime = 0;
      videoRefs[newSeason].current.play();
      
      setTimeout(() => {
        setCurrentSeason(newSeason);
        setIsTransitioning(false);
      }, 3);
    }
  };
  
  // Auto-rotate through seasons
  useEffect(() => {
    if (!autoPlayEnabled) return;
    
    const currentIndex = seasons.findIndex(season => season.id === currentSeason);
    const nextIndex = (currentIndex + 1) % seasons.length;
    
    const timer = setTimeout(() => {
      changeSeason(seasons[nextIndex].id);
    }, (currentSeasonData?.videoDuration || 10) * 1000);
    
    return () => clearTimeout(timer);
  }, [currentSeason, autoPlayEnabled]);
  
  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Preload all videos and set them to loop individually
  useEffect(() => {
    // Initialize videos
    Object.keys(videoRefs).forEach(season => {
      if (videoRefs[season].current) {
        videoRefs[season].current.load();
        videoRefs[season].current.muted = true;
        
        // Only play the current season's video initially
        if (season === currentSeason) {
          videoRefs[season].current.play();
        }
      }
    });
  }, []);
  
  // Parallax amount based on scroll position
  const parallaxOffset = -scrollPosition * 0.5;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Video Backgrounds - One for each season */}
      <AnimatePresence>
        {seasons.map((season) => (
          <motion.div
            key={season.id}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSeason === season.id ? 1 : 0,
              y: parallaxOffset 
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.2, ease: "easeInOut" },
              y: { duration: 0.5 }
            }}
            style={{ zIndex: currentSeason === season.id ? 5 : 1 }}
          >
            {/* Gradient overlay specific to each season */}
            <div className={`absolute inset-0 bg-gradient-to-r ${season.color} opacity-30 z-10`}></div>
            <div className="absolute inset-0 bg-black/40 z-5"></div>
            
            <video 
              ref={videoRefs[season.id]}
              className="absolute inset-0 w-full h-full object-cover z-50"
              playsInline 
              muted 
              loop
            >
              <source src={season.videoSrc} type="video/mp4" />
            </video>
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Navigation */}
      <motion.nav 
        className="relative z-20 flex justify-between items-center px-6 md:px-12 py-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-2xl font-bold tracking-wider">
            <span className="text-white">QUÉBEC</span>
            <span className={`text-${currentSeason === 'winter' ? 'blue' : currentSeason === 'spring' ? 'pink' : currentSeason === 'summer' ? 'yellow' : currentSeason === 'autumn' ? 'orange' : 'gray'}-400`}>.</span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#destinations" className="hover:text-white/70 transition-colors">Destinations</a>
          <a href="#experiences" className="hover:text-white/70 transition-colors">Expériences</a>
          <a href="#about" className="hover:text-white/70 transition-colors">À propos</a>
          <a href="#planner" className="hover:text-white/70 transition-colors">Planifier</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
            FR | EN
          </button>
          <button className="hidden md:block px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
            Planifier avec IA
          </button>
        </div>
      </motion.nav>
      
      {/* Season Selector Pills */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30">
        <motion.div 
          className="flex space-x-2 md:space-x-4 bg-black/30 backdrop-blur-md rounded-full p-1.5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => {
                changeSeason(season.id);
                setAutoPlayEnabled(false);
              }}
              className={`flex items-center px-3 md:px-4 py-2 rounded-full transition-all ${
                currentSeason === season.id 
                  ? `bg-gradient-to-r ${season.color} text-white` 
                  : 'bg-transparent text-white/70 hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{season.icon}</span>
              <span className="font-medium">{season.name}</span>
            </button>
          ))}

        </motion.div>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative z-20 flex flex-col h-[calc(100vh-120px)] justify-center px-6 md:px-16 lg:px-24 mt-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSeason}
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="block">{currentSeasonData.title}</span>
              <span className={`text-${currentSeason === 'winter' ? 'blue' : currentSeason === 'spring' ? 'pink' : currentSeason === 'summer' ? 'yellow' : 'orange'}-400`}>
                {currentSeasonData.subtitle}
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl font-light max-w-2xl mb-8 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Découvrez toute la beauté du Québec en {currentSeasonData.name.toLowerCase()}, où chaque saison offre une expérience unique.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.button 
                className={`px-8 py-3 bg-gradient-to-r ${currentSeasonData.color} text-white font-semibold rounded-full transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explorer {currentSeasonData.name}
              </motion.button>
              <motion.button 
                className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Planifier avec IA maintenant
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
    
      </div>
      

      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
      </motion.div>
    </div>
  );
}