import React, { useRef, useEffect, useState } from "react";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const coordinates = [46.829853, -71.254028]; // [lat, lng] for Leaflet
  const zoom = 11;

  // Sample places data
  const places = [
    {
      id: 1,
      name: "Downtown Cafe",
      coordinates: [46.829853, -71.254028],
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=200&fit=crop",
      description: "Cozy cafe in the heart of downtown",
      category: "restaurant",
    },
    {
      id: 2,
      name: "City Park",
      coordinates: [46.839853, -71.244028],
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop",
      description: "Beautiful park with walking trails",
      category: "park",
    },
    {
      id: 3,
      name: "Art Museum",
      coordinates: [46.819853, -71.264028],
      image:
        "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=300&h=200&fit=crop",
      description: "Contemporary art exhibitions",
      category: "museum",
    },
    {
      id: 4,
      name: "Riverside Hotel",
      coordinates: [46.849853, -71.274028],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
      description: "Luxury hotel with river views",
      category: "hotel",
    },
  ];

  const getMarkerIcon = (category) => {
    const icons = {
      restaurant: "🍽️",
      park: "🌳",
      museum: "🎨",
      hotel: "🏨",
      default: "📍",
    };
    return icons[category] || icons.default;
  };

  const getCategoryColor = (category) => {
    const colors = {
      restaurant: "#ff6b6b",
      park: "#51cf66",
      museum: "#339af0",
      hotel: "#845ef7",
      default: "#868e96",
    };
    return colors[category] || colors.default;
  };

  const createCustomIcon = (place) => {
    const color = getCategoryColor(place.category);
    const icon = getMarkerIcon(place.category);

    return `
      <div class="custom-marker-container" data-place-id="${place.id}">
        <div class="custom-marker-pin" style="background-color: ${color};">
          <div class="custom-marker-icon">${icon}</div>
        </div>
        <div class="custom-marker-pulse" style="background-color: ${color};"></div>
      </div>
    `;
  };

  useEffect(() => {
    // Load Leaflet dynamically
    const loadLeaflet = async () => {
      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css";
        document.head.appendChild(link);
      }

      // Load Leaflet JS
      if (!window.L) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js";
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (map.current || !mapContainer.current) return;

      try {
        // Initialize map
        map.current = window.L.map(mapContainer.current, {
          center: coordinates,
          zoom: zoom,
          zoomControl: true,
          scrollWheelZoom: true,
        });

        // Add OpenStreetMap tiles (completely free)
        window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 19,
          }
        ).addTo(map.current);

        // Add custom markers
        addCustomMarkers();

        // Handle map clicks
        map.current.on("click", (e) => {
          // Close place card when clicking on map (not on markers)
          if (
            e.originalEvent &&
            !e.originalEvent.target.closest(".custom-marker-container")
          ) {
            setSelectedPlace(null);
          }
        });

        setMapLoaded(true);
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    const addCustomMarkers = () => {
      places.forEach((place) => {
        try {
          // Create custom HTML marker
          const customIcon = window.L.divIcon({
            html: createCustomIcon(place),
            className: "custom-leaflet-marker",
            iconSize: [40, 50],
            iconAnchor: [20, 50],
            popupAnchor: [0, -50],
          });

          // Create marker
          const marker = window.L.marker(place.coordinates, {
            icon: customIcon,
          }).addTo(map.current);

          // Add click event
          marker.on("click", (e) => {
            e.originalEvent.stopPropagation();
            setSelectedPlace(place);
          });

          markersRef.current.push(marker);
        } catch (error) {
          console.error(`Error adding marker for ${place.name}:`, error);
        }
      });
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (map.current) {
        markersRef.current.forEach((marker) => {
          if (marker) {
            map.current.removeLayer(marker);
          }
        });
        markersRef.current = [];
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="map-wrap">
      <div
        ref={mapContainer}
        className="map"
        style={{ height: "100%", width: "100%" }}
      />

      {/* Place Info Card */}
      {selectedPlace && (
        <div className="place-card">
          <button
            className="place-card-close"
            onClick={() => setSelectedPlace(null)}
            type="button"
          >
            ×
          </button>
          <div className="place-card-image">
            <img
              src={selectedPlace.image}
              alt={selectedPlace.name}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
          <div className="place-card-content">
            <h3 className="place-card-title">{selectedPlace.name}</h3>
            <p className="place-card-description">
              {selectedPlace.description}
            </p>
            <div className="place-card-category">
              <span
                className={`category-tag category-${selectedPlace.category}`}
                style={{
                  backgroundColor: getCategoryColor(selectedPlace.category),
                }}
              >
                {selectedPlace.category}
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .map-wrap {
          position: relative;
          width: 100%;
          height: 400px;
        }

        .map {
          height: 100%;
          width: 100%;
        }

        .custom-leaflet-marker {
          background: none !important;
          border: none !important;
        }

        .custom-marker-container {
          position: relative;
          cursor: pointer;
        }

        .custom-marker-pin {
          width: 30px;
          height: 30px;
          border-radius: 50% 50% 50% 0;
          position: relative;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          border: 2px solid white;
        }

        .custom-marker-icon {
          transform: rotate(45deg);
          font-size: 14px;
        }

        .custom-marker-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.6;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.6;
          }
        }

        .place-card {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 300px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          z-index: 1000;
        }

        .place-card-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          cursor: pointer;
          font-size: 16px;
          z-index: 1001;
        }

        .place-card-image {
          width: 100%;
          height: 150px;
          overflow: hidden;
        }

        .place-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .place-card-content {
          padding: 16px;
        }

        .place-card-title {
          margin: 0 0 8px 0;
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        .place-card-description {
          margin: 0 0 12px 0;
          color: #666;
          font-size: 14px;
          line-height: 1.4;
        }

        .place-card-category {
          display: flex;
          justify-content: flex-start;
        }

        .category-tag {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          color: white;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
