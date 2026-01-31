import "./PostModal.css";
import { useEffect } from "react";

const PostModal = ({ isOpen, onClose, title, content, imageUrl, detailedDescription }) => {

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
  
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  
  if (!isOpen) return null;

  return (
    <div className="post-modal-overlay" onClick={onClose}>
      <div className="post-modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="post-modal-header">
        <button className="post-modal-close" onClick={onClose}>
          &times;
        </button>
      </div>

        <div className="post-modal-scrollable-content">
          <div className="post-modal-top">
            <div className="post-modal-text">
              <h2 className="post-modal-title">{title}</h2>
              <p className="post-modal-paragraph">{content}</p>
            </div>

            {imageUrl && (
              <div className="post-modal-image-wrapper">
                <img src={imageUrl} alt={title} className="post-modal-image" />
              </div>
            )}
          </div>

          {detailedDescription && (
            <div className="post-modal-detailed">
              <p>{detailedDescription}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostModal;
