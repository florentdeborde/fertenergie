import FeatureSection from '../components/common/sections/Feature/FeatureSection';
import CoverMenu from "../components/common/sections/CoverMenu/CoverMenu";

const Projects = ({t}) => {
    const title = t("pages.projects.title");
    
    const menu_section = t("pages.projects.menu_section", { returnObjects: true });
    const feature_section_intro = t("pages.projects.feature_section_intro", { returnObjects: true });
    const feature_section_PS = t("pages.projects.feature_section_PS", { returnObjects: true });
    const feature_section_JP = t("pages.projects.feature_section_JP", { returnObjects: true });
    const feature_section_LI = t("pages.projects.feature_section_LI", { returnObjects: true });

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
      </div>
    );
}

export default Projects;