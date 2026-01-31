import "./Banner.css";

const Banner = ({ beforeHighlight, highligh, afterHighlight, paragraph, firstButton, firstButtonTarget, secondButton, secondButtonTarget, image }) => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-text">
          <h1>
            {beforeHighlight}
            <strong className="highlight"> {highligh} </strong>
            {afterHighlight}
          </h1>
          <p>
            {paragraph}
          </p>
          <div className="banner-buttons">
            {firstButton && <a href={firstButtonTarget} className="btn-primary">{firstButton}</a>}
            {secondButton && <a href={secondButtonTarget} className="btn-secondary">{secondButton}</a>}
          </div>
        </div>

        {image && <img src={image} alt="Hero illustration" className="banner-illustration" />}
      </div>
    </section>
  );
};

export default Banner;
