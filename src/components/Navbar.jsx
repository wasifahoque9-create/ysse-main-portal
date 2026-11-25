
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

  const exploreButtonStyle =
    "inline-flex items-center justify-center gap-2 rounded-full border border-[#b9e7cf] bg-white px-5 py-3 text-sm font-bold text-[#073f34] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a9e8c2] hover:bg-[#c9ecd6] hover:text-[#052e27] hover:shadow-md";

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* LOGO */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3"
          onClick={closeMenu}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/ysse-logo.png`}
            alt="YSSE - Youth School for Social Entrepreneurs"
className="h-16 w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-[72px]"            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />

          <span className="hidden items-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-800 text-white">
              <Leaf size={23} />
            </span>

            <span className="flex flex-col">
              <strong className="text-xl font-extrabold tracking-tight text-[#073f35]">
                YSSE
              </strong>
              <small className="text-[9px] font-bold tracking-[0.13em] text-emerald-700">
                STAGE OF INNOVATION
              </small>
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-700" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/programs"
            className={`ml-3 ${exploreButtonStyle}`}
          >
            Explore Programs
            <ArrowUpRight size={17} />
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-900 transition hover:bg-emerald-100 lg:hidden"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-emerald-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[440px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/programs"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className={`mt-2 w-full ${exploreButtonStyle}`}
          >
            Explore Programs
            <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
