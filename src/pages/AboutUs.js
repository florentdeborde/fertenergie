import CoverMenu from "../components/common/sections/CoverMenu/CoverMenu";
import FeatureSection from "../components/common/sections/Feature/FeatureSection";

const AboutUs = ({t}) => {
    const title = t("pages.about_us.title", { returnObjects: true });
    const feature_section = t("pages.about_us.feature_section", { returnObjects: true });
    const feature_section_contact = t("pages.about_us.feature_section_contact", { returnObjects: true });
    const menu_section = t("pages.about_us.menu_section", { returnObjects: true });

    return (
      <div className="content">
        <div className="desktop"><CoverMenu menuName={title} menuItems={menu_section.items}/></div>
        <div className="mobile"><CoverMenu menuName={title} /></div>

        <FeatureSection
          id={"history"}
          title={feature_section.title}
          items={feature_section.items}
          image="/images/gallery/photo10.jpg"
          imagePosition='left'
        />
        <div className="generic-separator" />
        <FeatureSection
          id={"contact"}
          title={feature_section_contact.title}
          items={feature_section_contact.items}
        />
      </div>
    );
  }

export default AboutUs;