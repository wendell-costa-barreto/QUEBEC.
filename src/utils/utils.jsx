import React from "react";
// Utility for preloading critical resources
export const preloadCriticalResources = () => {
  // Preload critical CSS
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "style";
  link.href = "/critical.css";
  document.head.appendChild(link);

  // Preload critical images
  const criticalImages = [
    "/videos/winter-poster.jpg",
    "/culturehome.jpg",
    "/art.jpg",
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};

// Error boundary for video loading
export class VideoErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Video loading error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <p className="text-white text-lg">
            Impossible de charger la vidéo. Veuillez actualiser la page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
