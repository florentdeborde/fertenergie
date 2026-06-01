import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({
  image,
  title,
  description,
  paragraphs,
  link,
  date,
  source,
  horizontal = false,
  imagePosition = "left",
  buttonText,
  handlePostClick
}) => {
  const isExternal = link && (link.startsWith("http") || link.startsWith("//"));

  const renderContent = () => (
    <>
      {image && (
        <div className="blog-card-image-wrapper">
          <img src={image} alt={title || ""} className="blog-card-image" loading="lazy" />
        </div>
      )}
      
      <div className="blog-card-content">
        <div className="blog-card-meta">
          {source && <span className="blog-card-source">{source}</span>}
          {source && date && <span className="blog-card-meta-separator">•</span>}
          {date && <span className="blog-card-date">{date}</span>}
        </div>
        
        <h3 className="blog-card-title">{title}</h3>
        
        {paragraphs && paragraphs.length > 0 ? (
          <div className="blog-card-paragraphs">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="blog-card-description">{paragraph}</p>
            ))}
          </div>
        ) : (
          description && <p className="blog-card-description">{description}</p>
        )}

        {buttonText && link && (
          <div className="blog-card-footer">
            <span className="blog-card-button">{buttonText}</span>
          </div>
        )}
      </div>
    </>
  );

  const cardClassName = [
    "blog-card",
    horizontal ? "horizontal" : "",
    horizontal && imagePosition === "right" ? "reverse" : ""
  ].filter(Boolean).join(" ");

// 1. Custom click handler (Priority if you want to control the event from the parent component)
if (handlePostClick) {
  return (
    <article
      className={cardClassName}
      onClick={(e) => {
        // 1. Trigger the parent function if it exists
        handlePostClick(link);
        
        // 2. Force open in a new tab right here
        if (link) {
          window.open(link, "_blank", "noopener,noreferrer");
        }
      }}
      style={{ cursor: "pointer" }}
    >
      {renderContent()}
    </article>
  );
}

  // 2. External Link (Handles your Ouest-France / Actu.fr articles)
  if (isExternal) {
    return (
      <a
        href={link}
        className={cardClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {renderContent()}
      </a>
    );
  }

  // 3. Internal Link (Converted to open in a new tab as well)
  if (link) {
    return (
      <a
        href={link}
        className={cardClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {renderContent()}
      </a>
    );
  }

  // 4. Default fallback (Card without any link)
  return (
    <article className={cardClassName}>
      {renderContent()}
    </article>
  );
};

export default BlogCard;