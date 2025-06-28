import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery({
  images = [
    "https://picsum.photos/680/350?random=1",
    "https://picsum.photos/680/350?random=2",
    "https://picsum.photos/680/350?random=3",
    "https://picsum.photos/680/350?random=4",
    "https://picsum.photos/680/350?random=5",
    "https://picsum.photos/680/350?random=6",
  ],
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-[780px] h-[380px]  object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200 rounded-lg"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 bg-opacity-5 flex items-center justify-center p-4">
          {/* Modal Container */}
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-60 text-gray-700 hover:text-gray-900 transition-colors p-2"
            >
              <X size={32} />
            </button>

            {/* Main Image Area */}
            <div className="flex-1 flex items-center justify-center relative px-4 py-16">
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform cursor-pointer -translate-y-1/2 text-gray-700 hover:text-gray-900 transition-colors p-2 z-10 bg-white bg-opacity-80 rounded-full shadow-lg"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Current Image */}
              <img
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-[800px] h-[650px] object-contain rounded-lg"
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform cursor-pointer -translate-y-1/2 text-gray-700 hover:text-gray-900 transition-colors p-2 z-10 bg-white bg-opacity-80 rounded-full shadow-lg"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="bg-gray-100 p-4 rounded-b-lg mt-[-5%]">
              <div className="flex justify-center gap-2 overflow-x-auto max-w-full">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-16 object-cover cursor-pointer rounded transition-all duration-200 flex-shrink-0 ${
                      index === currentIndex
                        ? "ring-2 ring-blue-500 opacity-100"
                        : "opacity-60 hover:opacity-80"
                    }`}
                    onClick={() => goToImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-gray-700 text-sm bg-white bg-opacity-90 px-3 py-1 rounded shadow">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
