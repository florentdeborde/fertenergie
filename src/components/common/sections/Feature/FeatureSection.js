import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeatureSection.css';

const FeatureSection = ({ id, title, items, buttonText, buttonLink, buttonTarget, image, imagePosition = 'right', imageSize = 'normal', enableLightbox = false, useAccordion = false }) => {
  const hasImage = !!image;
  const isImageLeft = imagePosition === 'left';
  const [openIndexes, setOpenIndexes] = useState([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const toggleAccordion = (index) => {
    if (!useAccordion) return;
    setOpenIndexes((prev) => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  return (
    <>
      <section id={id} className={`feature-section ${hasImage ? 'with-section-image' : ''}`}>
        <div className={`feature-layout ${isImageLeft ? 'reverse' : ''}`}>
          {hasImage && (
            <div className={`feature-section-image ${imageSize === 'big' ? 'big' : ''}`}>
              <img src={image} alt="Section visual" onClick={enableLightbox && window.innerWidth > 768 ? () => setIsLightboxOpen(true) : undefined} style={{ cursor: enableLightbox ? 'pointer' : 'default' }}/>
            </div>
          )}

          <div className="feature-content">
            <h2 className="section-title">{title}</h2>

            <div className="feature-list" style={{ marginTop: items?.length ? "3.75rem" : 0 }}>
              {items.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                  <div className="feature-item" key={index}>
                    <h3 className={`feature-subtitle ${useAccordion ? 'accordion-toggle' : ''}`} onClick={() => toggleAccordion(index)}>
                      <span className="accordion-title-text">{item.subtitle}</span>
                      {useAccordion && <span className={`accordion-caret ${isOpen ? 'open' : ''}`} />}
                    </h3>
                    {(!useAccordion || isOpen) && (
                      <div className="feature-paragraphs">
                        {item.paragraphs.map((p, i) => (
                          <p className="feature-paragraph" key={i} dangerouslySetInnerHTML={{ __html: p === "" ? "&nbsp;" : p }} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {buttonText && 
              <div className="feature-footer" style={{ marginTop: "3.75rem" }}>
                <Link to={buttonTarget ? `${buttonLink}#${buttonTarget}` : buttonLink} className="feature-button">{buttonText}</Link>
              </div>
            }
          </div>
        </div>
      </section>
      {enableLightbox && isLightboxOpen && (
        <div className="lightbox" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-content">
            <img src={image} alt="Zoomed" className="lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureSection;
