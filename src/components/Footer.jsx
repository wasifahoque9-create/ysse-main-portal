import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link to="/" className="footer-brand" aria-label="YSSE home">
            <img
              src="/images/ysse-logo.png"
              alt="YSSE — Youth School for Social Entrepreneurs"
              className="footer-logo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <span className="footer-brand-fallback">YSSE<span>.</span></span>
          </Link>

          <p>
            Empowering young people to become changemakers through social
            entrepreneurship, learning, and innovation.
          </p>
        </div>

        <div className="footer-column">
          <span className="footer-kicker">DISCOVER</span>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/notices">Latest Notices</Link>
        </div>

        <div className="footer-column">
          <span className="footer-kicker">TAKE PART</span>
          <h4>Get Involved</h4>
          <Link to="/programs">Explore Opportunities</Link>
          <Link to="/contact">Contact Us</Link>
          <a href="https://ysseglobal.org/" target="_blank" rel="noreferrer">
            Official Website <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="footer-column footer-contact">
          <span className="footer-kicker">SAY HELLO</span>
          <h4>Stay Connected</h4>
          <p><Mail size={16} /> Connect with YSSE</p>
          <p><MapPin size={16} /> Bangladesh</p>
          <a
            href="https://ysseglobal.org/"
            target="_blank"
            rel="noreferrer"
            className="footer-visit-link"
          >
            Visit Official Website <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="footer-disclaimer">
        Some program and notice listings are illustrative, and the contact
        form does not transmit messages. For verified information, please
        refer to YSSE's official channels.
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YSSE Main Portal</p>
        <span>Learn with purpose. Lead with impact.</span>
      </div>
    </footer>
  );
}

export default Footer;
