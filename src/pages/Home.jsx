import ContentWithImage from './../components/common/sections/ContentWithImage/ContentWithImage';
import FeatureSection from '../components/common/sections/Feature/FeatureSection';
import Banner from '../components/common/sections/Banner/Banner';

const Home = ({t}) => {
    const content_section = t("pages.home.content", { returnObjects: true });
    const feature_section = t("pages.home.feature_section", { returnObjects: true });
    const hero_section = t("pages.home.hero_section", { returnObjects: true });
    const words = splitByWord(hero_section.title, 'expertise');
    const feature_section_news = t("pages.home.feature_section_news", { returnObjects: true });

    return (
      <div className="content">
        <ContentWithImage 
          title={content_section.title}
          text={content_section.text}
          imageUrl={"/images/cover/PS_3600.jpg"}
        />
        <FeatureSection
          title={feature_section.title}
          items={feature_section.items}
          buttonText={feature_section.button}
          buttonLink="/projects"
          image="/images/cover/LI_1400.jpg"
          imagePosition='left'
        />
       
        <Banner 
          beforeHighlight={words[0]} 
          highligh={words[1]} 
          afterHighlight={words[2]}
          paragraph={hero_section.text}
          firstButton={hero_section.buttonText}
          firstButtonTarget={"/skills"}
          image="/images/cover/JP_2680.jpg"
        />

        <FeatureSection
          title={feature_section_news.title}
          items={feature_section_news.items}
          buttonText={feature_section_news.button}
          buttonLink="/news"
          imagePosition='left'
        />

{/* 
        <CTA 
          title={hero_section.title}
          description={hero_section.text}
          buttonText={hero_section.buttonText}
          buttonLink="/skills"
          imageUrl="/images/carousel_home/2021-09-05_PS.jpg"
          imagePosition="left"
        />
*/}
{/*  
        <HeroSection
          title={hero_section.title}
          shortTitle={hero_section.short_title}
          color="black"
          text={hero_section.text}
          buttonText={hero_section.buttonText}
          buttonLink="/skills"
          image="/images/carousel_home/2021-09-05_PS.jpg"
          verticalAlign="bottom"
          horizontalAlign="right"
        />
 */}
      </div>
    )
};

export default Home;

function splitByWord(str, word) {
  const index = str.indexOf(word);

  if (index === -1) {
    return [str, '', ''];
  }

  const before = str.slice(0, index);
  const after = str.slice(index + word.length);

  return [before, word, after];
}