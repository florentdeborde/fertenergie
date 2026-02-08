import { Link } from "react-router-dom";
import './HeroSection.css';

const HeroSection = ({ title, shortTitle, color, text, buttonText, buttonLink, buttonTarget, image, verticalAlign = "bottom", horizontalAlign = 'right' }) => {

    const allowedColors = ["white", "black"];
    const colorClass = allowedColors.includes(color.toLowerCase()) ? `color-${color.toLowerCase()}` : "color-white";
    const positionClass = `position-${verticalAlign}-${horizontalAlign}`;

    return (
        <div className={`hero-section-wrapper`} style={{ backgroundImage: `url(${image})` }}>
            {title && <h1 className="hero-main-title">{title}</h1>}
            {shortTitle && <h1 className="hero-main-title-mobile">{shortTitle}</h1>}
            <div className={`hero-text-overlay ${colorClass}  ${positionClass}`}>
                <p className="hero-text-p">{text}</p>
                {buttonText && (
                    <Link to={buttonTarget ? buttonLink + "#" + buttonTarget : buttonLink} className={`hero-read-more-btn ${colorClass}`}>{buttonText}</Link>
                )}
            </div>
        </div>
    );
};

export default HeroSection;