import { useState, useEffect, useMemo } from "react";
import CoverMenu from "../components/common/sections/CoverMenu/CoverMenu";
import GallerySection from "../components/common/sections/Gallery/GallerySection";

const Gallery = ({t}) => {
    const title = t("pages.gallery.title", { returnObjects: true });
  
    const imageCount = 10;
    const images = Array.from({ length: imageCount }, (_, i) => `/images/gallery/photo${i + 1}.jpg`);
    const [selectedIndex, setSelectedIndex] = useState(null);
  
    const largeImageIndexes = useMemo(() => {
      return new Set(Array.from({ length: Math.floor(imageCount / 3) }, () => Math.floor(Math.random() * imageCount)));
    }, [imageCount]);
  
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
      <div className="content">
        <CoverMenu menuName={title} />
        <GallerySection images={images} largeImageIndexes={largeImageIndexes} />
      </div>
    );
  }

  export default Gallery;