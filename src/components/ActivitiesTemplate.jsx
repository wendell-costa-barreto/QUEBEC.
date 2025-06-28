import React from "react";
import { MapPin, Users, Mountain, Eye, Calendar, Sparkles } from "lucide-react";
import Map from "./Map";

const SeasonShowcase = ({
  title,
  subtitle,
  heroImage,
  description,
  mainContent,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 hover:scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl">
              <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight animate-slide-up">
                {title}
              </h1>

              <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light animate-slide-up-delayed">
                {subtitle}
              </p>

              <div className="flex flex-wrap gap-4 animate-slide-up-delayed-2">
                <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative -mt-20 z-20">
        <div className="container mx-auto px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col gap-0">
              {/* Left Content */}
              <div className="p-12 lg:p-16">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {description}
                  </p>

                  <div className="space-y-6 text-gray-700">
                    {mainContent.split(". ").map((sentence, index) => (
                      <p key={index} className="leading-relaxed">
                        {sentence}
                        {sentence && sentence.slice(-1) !== "." ? "." : ""}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-slide-up-delayed {
          animation: slide-up 1s ease-out 0.3s both;
        }

        .animate-slide-up-delayed-2 {
          animation: slide-up 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default SeasonShowcase;
