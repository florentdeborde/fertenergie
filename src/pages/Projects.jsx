import { useState, useEffect, useMemo } from "react";
import FeatureSection from '../components/common/sections/Feature/FeatureSection';
import GallerySection from "../components/common/sections/Gallery/GallerySection";
import CoverMenu from "../components/common/sections/CoverMenu/CoverMenu";

const Projects = ({t}) => {
    const title = t("pages.projects.title");
    
    // projects
    const menu_section = t("pages.projects.menu_section", { returnObjects: true });
    const feature_section_intro = t("pages.projects.feature_section_intro", { returnObjects: true });
    const feature_section_PS = t("pages.projects.feature_section_PS", { returnObjects: true });
    const feature_section_JP = t("pages.projects.feature_section_JP", { returnObjects: true });
    const feature_section_LI = t("pages.projects.feature_section_LI", { returnObjects: true });
    const feature_section_PA = t("pages.projects.feature_section_PA", { returnObjects: true });

    //park
    const imageCount = 8;
    const images = Array.from({ length: imageCount }, (_, i) => `/images/gallery/photo${i + 1}.jpg`);   
    const [selectedIndex, setSelectedIndex] = useState(null);
    const largeImageIndexes = useMemo(() => {
      return new Set([4, 5, 6]);
    }, []);

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
        <div className="desktop"><CoverMenu menuName={title} menuItems={menu_section.items}/></div>
        <div className="mobile"><CoverMenu menuName={title} /></div>
        
        <FeatureSection
          id="intro"
          title={feature_section_intro.title}
          items={feature_section_intro.items}
        />
        <div className="generic-separator" />
        <FeatureSection
          id="psouvray"
          title={feature_section_PS.title}
          items={feature_section_PS.items}
          image="/images/projects/2021-09-05_PS.jpg"
          imagePosition='left'
          enableLightbox={true}
        />
        <div className="generic-separator" />
        <FeatureSection
          id="jprevert"
          title={feature_section_JP.title}
          items={feature_section_JP.items}
          image="/images/projects/2021-11-06_JP.jpg"
          imagePosition='left'
          enableLightbox={true}
        />
        <div className="generic-separator" />
        <FeatureSection
          id="lignou"
          title={feature_section_LI.title}
          items={feature_section_LI.items}
          image="/images/projects/2021-03-23_L.jpg"
          imagePosition='left'
          enableLightbox={true}
        />
        <div className="generic-separator" />
        <FeatureSection
          id="park"
          title={feature_section_PA.title}
          items={feature_section_PA.items}
          image="/images/projects/projects.jpg"
          imagePosition='left'
          enableLightbox={true}
        />
        <GallerySection images={images} largeImageIndexes={largeImageIndexes} />
      </div>
    );
}

export default Projects;