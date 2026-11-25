
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Leaf,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#052e27] text-white">

      {/* FOOTER MAIN */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-12 lg:py-20">

        {/* BRAND COLUMN */}
        <div>
          <Link
            to="/"
            aria-label="YSSE home"
            className="mb-6 inline-flex items-center gap-3"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/ysse-logo.png`}
              alt="YSSE — Youth School for Social Entrepreneurs"
              className="h-16 w-auto max-w-[190px] object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />

            <span className="hidden items-center gap-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-700 text-white">
                <Leaf size={23} />
              </span>
              <strong className="text-2xl font-extrabold tracking-wide">
                YSSE<span className="text-emerald-400">.</span>
              </strong>
            </span>
          </Link>

          <p className="max-w-xs text-sm leading-7 text-emerald-100/70">
            Empowering young people to become changemakers through
            social entrepreneurship, learning, and innovation.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            LEARN · GROW · LEAD
          </div>
        </div>

        {/* DISCOVER */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-emerald-400">
            DISCOVER
          </span>

          <h4 className="mb-6 mt-3 text-xl font-bold">
            Explore
          </h4>

          <div className="flex flex-col items-start gap-4">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Programs", path: "/programs" },
              { name: "Latest Notices", path: "/notices" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-emerald-100/70 transition-colors duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* GET INVOLVED */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-emerald-400">
            TAKE PART
          </span>

          <h4 className="mb-6 mt-3 text-xl font-bold">
            Get Involved
          </h4>

          <div className="flex flex-col items-start gap-4">
            <Link
              to="/programs"
              className="text-sm text-emerald-100/70 transition-colors duration-300 hover:translate-x-1 hover:text-emerald-300"
            >
              Explore Opportunities
            </Link>

            <Link
              to="/contact"
              className="text-sm text-emerald-100/70 transition-colors duration-300 hover:translate-x-1 hover:text-emerald-300"
            >
              Contact Us
            </Link>

            <a
              href="https://ysseglobal.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-100/70 transition-colors duration-300 hover:text-emerald-300"
            >
              Official Website
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-emerald-400">
            SAY HELLO
          </span>

          <h4 className="mb-6 mt-3 text-xl font-bold">
            Stay Connected
          </h4>

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3 text-sm text-emerald-100/70">
              <Mail
                size={18}
                className="mt-0.5 shrink-0 text-emerald-400"
              />
              <span>Connect with YSSE</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-emerald-100/70">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-emerald-400"
              />
              <span>Bangladesh</span>
            </div>
          </div>

          <a
            href="https://ysseglobal.org/"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-5 py-3 text-xs font-bold text-emerald-200 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-800 hover:text-white"
          >
            Visit Official Website
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="border-t border-white/10 px-6 py-5 sm:px-8 lg:px-12">
        <p className="mx-auto max-w-7xl text-xs leading-6 text-emerald-100/50">
          Some program and notice listings are illustrative, and the
          contact form does not transmit messages. For verified
          information, please refer to YSSE's official channels.
        </p>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-white/10 bg-[#042820] px-6 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-emerald-100/60">
            © {new Date().getFullYear()} YSSE Main Portal
          </p>

          <span className="text-xs font-medium tracking-wide text-emerald-300/80">
            Learn with purpose. Lead with impact.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
