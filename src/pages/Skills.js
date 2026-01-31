import FeatureSection from '../components/common/sections/Feature/FeatureSection';
import CoverMenu from "../components/common/sections/CoverMenu/CoverMenu";

const Skills = ({t}) => {
    const title = t("pages.skills.title", { returnObjects: true });
    const menu_section = t("pages.skills.menu_section", { returnObjects: true });
    const feature_section_1 = t("pages.skills.feature_section_1", { returnObjects: true });
    const feature_section_2 = t("pages.skills.feature_section_2", { returnObjects: true });

    return (
      <div className="content">
        <div className="desktop"><CoverMenu menuName={title} menuItems={menu_section.items}/></div>
        <div className="mobile"><CoverMenu menuName={title} /></div>

        <FeatureSection
          id={"q-ei"}
          title={feature_section_1.title}
          items={feature_section_1.items}
          useAccordion={true}
        />
        <div className="generic-separator" />
        <FeatureSection
          id={"q-dp"}
          title={feature_section_2.title}
          items={feature_section_2.items}
          useAccordion={true}
        />
      </div>
    );
  }

export default Skills;