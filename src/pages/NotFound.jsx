import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-content animate-fade-up">
        <div className="not-found-icon">
          <Compass size={42} />
        </div>

        <span className="eyebrow">OOPS! WRONG TURN</span>
        <h1>404</h1>
        <h2>This page has wandered off.</h2>

        <p>
          The page you are looking for does not exist or may have
          been moved. Let's help you find your way back.
        </p>

        <Link to="/" className="button button-primary">
          <ArrowLeft size={17} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
