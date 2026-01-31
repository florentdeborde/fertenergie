import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config';
import './Header.css';

const Header = ({ pages }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleScroll = () => {
    setIsScrolling(window.scrollY > 5);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (event) => {
    if (isMobile && !event.target.closest('.nav-link') && !event.target.closest('.logo-container')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (key) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  return (
    <header className={`header ${isScrolling && !isMobile ? 'scrolled' : ''}`}>
      <div className="logo-container" onClick={() => navigate('/')}>
        <img src={config.globalLogo} alt="Logo" className={`logo ${isScrolling && !isMobile ? 'scrolled' : ''}`}/>
      </div>

      <div className="nav-container">
        {/* Desktop */}
        {!isMobile && (
          <nav className="nav" ref={menuRef}>
            {Object.keys(pages).map((key) => {
              const { title, to, submenus, logo } = pages[key];

              if (logo) return null;

              return (
                <div key={key} className="nav-item" onMouseEnter={() => submenus && handleMouseEnter(key)} onMouseLeave={() => submenus && handleMouseLeave(key)}>
                  {submenus ? (
                    <span className="nav-link has-submenu">{title}</span>
                  ) : (
                    <Link className="nav-link" to={to}>{title}</Link>
                  )}

                  {submenus && subMenuOpen[key] && (
                    <div className="submenu-container">
                      <ul className="submenu">
                        {Object.keys(submenus).map((subKey) => {
                          const { title, to } = submenus[subKey];
                          return (
                            <li key={subKey}>
                              <Link className="submenu-link" to={to}>{title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        )}

        {/* Small screen */}
        {isMobile && (
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`} ref={menuRef} onClick={handleNavClick}>
            {/* Menus without subemnus */}
            {Object.keys(pages).map((key) => {
              const { title, to, submenus, logo } = pages[key];

              if (logo || submenus) return null;

              return (
                <div key={key} className="nav-item">
                  <Link className="nav-link" to={to} onClick={toggleMenu}>{title}</Link>
                </div>
              );
            })}

            {/* Submenus as menus when mobile  */}
            {Object.keys(pages).map((key) => {
              const { submenus } = pages[key];

              if (!submenus) return null;

              return Object.keys(submenus).map((subKey) => {
                const { title, to } = submenus[subKey];
                return (
                  <div key={subKey} className="nav-item">
                    <Link className="nav-link" to={to} onClick={toggleMenu}>
                      {title}
                    </Link>
                  </div>
                );
              });
            })}
          </nav>
        )}

        {/* Menu hamburger */}
        {isMobile && <MenuIcon className="menu-toggle" onClick={toggleMenu} ref={menuButtonRef} />}
      </div>
    </header>
  );
};

export default Header;