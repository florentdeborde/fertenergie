import "./ContentWithImage.css";

const ContentWithImage = ({ title, text, imageUrl }) => {
  return (
    <section className="content-image-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-block">
            <h2 className="title">{title}</h2>
            <p className="description">{text}</p>
          </div>

          <div className="image-wrapper">
            <img src={imageUrl} alt="" className="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWithImage;
