import "./CTA.css";

const CTA = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  imagePosition = "right", // 'left' or 'right'
}) => {
  const isImageLeft = imagePosition === "left";

  const contentOrderClass = isImageLeft ? "order-2" : "order-1";
  const imageOrderClass = isImageLeft ? "order-1" : "order-2";

  return (
    <section className="cta-section">
      <div className={`cta-content ${contentOrderClass}`}>
        <div className="cta-text">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-description">{description}</p>
          <div className="cta-button-wrapper">
            <a href={buttonLink} className="cta-button">
              {buttonText}
            </a>
          </div>
        </div>
      </div>

      <div className={`cta-image-wrapper ${imageOrderClass}`}>
        <img
          alt=""
          src={imageUrl}
          className="cta-image"
        />
      </div>
    </section>
  );
};

export default CTA;
