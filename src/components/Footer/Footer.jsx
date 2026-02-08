import { Link, useNavigate } from "react-router-dom";
import config from "../../config";
import './Footer.css';

const Footer = ({t, pages}) => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <div className="footer-left-1">
            <div onClick={() => navigate('/')} style={{cursor: "pointer" }}><img src={config.globalLogo} style={{maxHeight: "200px" }} alt="Logo" className="footer-logo" /></div>
            
            <div className="social-links-2">
              <div><a className="a-footer" href={"mailto:"+t("footer.email", { returnObjects: true })}>{t("footer.email", { returnObjects: true })}</a></div>
              <div style={{display: "flex", justifyContent: "center"}}>
                <a className="a-footer" href={"tel:"+t("footer.phone", { returnObjects: true })}>
                <img src="/images/social_network/icons8-telephone-32.png" alt="Whatsapp" className="social-icon" style={{ verticalAlign: "middle", marginRight: "8px", maxWidth: "32px" }} />
                {t("footer.phone", { returnObjects: true })}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-left-2">
            <h2 className="content-h2-no-margin">{t("footer.title", { returnObjects: true })}</h2>
            <nav className="footer-menu">
              {Object.keys(pages).map((key) => {
                const { title, to, hide, logo, submenus } = pages[key];
                
                if (hide || logo) {
                  return null;
                }

                if (submenus) {
                  return (
                    <div key={key} className="footer-submenu">
                      {Object.keys(submenus).map((submenuKey) => {
                        const { title: submenuTitle, to: submenuTo } = submenus[submenuKey];
                        return (
                          <Link key={submenuKey} className="footer-link" to={submenuTo}>{submenuTitle}</Link>
                        );
                      })}
                    </div>
                  );
                }

                return (
                  <Link key={key} className="footer-link" to={to}>{title}</Link>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="footer-map">
        <iframe title="Location" src={config.globalIframeSrc} width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="footer-address">
            {t("footer.address", { returnObjects: true })
              .split("\n")
              .map((line, index) => (
                <div key={index}>{line}</div>
              ))}
          </div>
        </div>

      </div>

      <div className="footer-partnership">
        <h2 className="content-h2-no-margin">{t("footer.partners_title")}</h2>
        <div className="partner-logos">
          {t("footer.partners", { returnObjects: true }).map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={partner.src}
                alt={`Logo ${index + 1}`}
                className="partner-logo"
              />
            </a>
          ))}
        </div>
      </div>

      {/*       
      <div style={{ display: "flex", justifyContent: "center" }}><a className="a-footer a-info-legal">{t("footer.legal_information")}</a></div>
      */}
    </footer>
  );
};

export default Footer;
