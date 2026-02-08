
import { useState, useEffect } from "react";
import "./GallerySection.css";

const GallerySection = ({ images, largeImageIndexes }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowRight") {
          setSelectedIndex((prev) => (prev + 1) % images.length);
        } else if (e.key === "ArrowLeft") {
          setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
        } else if (e.key === "Escape") {
          setSelectedIndex(null);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      <div className="gallery-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className={`gallery-image ${largeImageIndexes.has(index) ? "large-image" : ""}`}
            onClick={() => setSelectedIndex(index)}
            loading="lazy"
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
            }}
          >
            ‹
          </button>
          <div className="lightbox-content">
            <img
              src={images[selectedIndex]}
              alt="Full size"
              className="lightbox-image"
              loading="lazy"
            />
          </div>
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((selectedIndex + 1) % images.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default GallerySection;
