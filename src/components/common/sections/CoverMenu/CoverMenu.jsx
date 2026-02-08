import './CoverMenu.css';

const CoverMenu = ({ menuName, menuItems }) => {
  return (
    <div className="cover-menu">
      <div className="cover-menu-inner">
        <div className="menu-name">{menuName} /</div>
        {menuItems &&
        <nav className="menu-items">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.target}`}
              className="menu-link"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.target);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {item.subtitle}
            </a>
          ))}
        </nav>}
      </div>
    </div>
  );
};

export default CoverMenu;
