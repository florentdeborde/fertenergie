import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

import "./App.css";
import config from "./config";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import LanguageSelector from './components/common/selectors/LanguageSelector/LanguageSelector';
import { ScrollToTopOrElement } from "./components/common/scroll/ScrollToTopOrElement";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";

const Maintenance = ({ t, pages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(true);
  }, [location]);

  return (
    <div>
      <div className="app-container">
        <Header pages={pages}/>
        <main className="main-content">
          <Home t={t} />
        </main>
        <Footer t={t} pages={pages}/>
        <LanguageSelector />
      </div>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", textAlign: "center", width: "80%", maxWidth: "400px" }}>
            <h1>{t("pages.home.maintenance.title")}</h1>
            <p>{t("pages.home.maintenance.text")}</p>
            <button onClick={() => setIsOpen(false)} style={{ marginTop: "10px", padding: "8px 12px", background: "gray", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const { t } = useTranslation();
  const pages = Object.fromEntries(
    Object.entries(t("pages", { returnObjects: true }))
      .filter(([_, value]) => !value.hide)
      .map(([key, value]) => {
        if (value.submenus) {
          const visibleSubmenus = Object.fromEntries(Object.entries(value.submenus).filter(([_, submenu]) => !submenu.hide));
          return [key, { ...value, submenus: visibleSubmenus }];
        }
        return [key, value];
      })
  );
  const pageComponents = {
    Home: Home,
    Projects: Projects,
    Skills: Skills,
    News: News,
    Gallery: Gallery,
    AboutUs: AboutUs,
  };

  const siteActive = config.globalWebsiteActive;
  if (!siteActive) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<Maintenance t={t} pages={pages} />} />
        </Routes>
      </Router>
    );
  }

  return (
    <>
      <Router>
        <ScrollToTopOrElement />
        <div className="app-container">
          <Header pages={pages}/>
          <main className="main-content">
            <Routes>
              {Object.keys(pages).map((key) => {
                const { to, element, submenus } = pages[key];
                const Component = pageComponents[element];
                if (!submenus) {
                  return (
                    <Route key={key} path={to} element={<Component t={t} />}/>
                  );
                }
                return null;
              })}
              {Object.keys(pages).map((key) => {
                const { submenus } = pages[key];
                return (
                  submenus && Object.keys(submenus).map((subKey) => {
                    const { to: subTo, element: subElement } = submenus[subKey];
                    const SubComponent = pageComponents[subElement];
                    return <Route key={subKey} path={subTo} element={<SubComponent t={t} />} />;
                  })
                );
              })}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer t={t} pages={pages}/>
          <LanguageSelector />
        </div>
      </Router>
    </>
  )
};

export default App;
