
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  Leaf,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Notices", path: "/notices" },
  { name: "Programs", path: "/programs" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src="/images/ysse-logo.png"
            alt="YSSE - Youth School for Social Entrepreneurs"
            className="brand-logo"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <span className="brand-fallback">
            <span className="brand-icon">
              <Leaf size={22} />
            </span>
            <span className="brand-text">
              <strong>YSSE</strong>
              <small>STAGE OF INNOVATION</small>
            </span>
          </span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/programs"
            className="navbar-cta"
            onClick={closeMenu}
          >
            Explore Programs
            <ArrowUpRight size={17} />
          </Link>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;

