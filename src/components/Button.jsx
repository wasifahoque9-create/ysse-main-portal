
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Button({
  children,
  to,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const classes = `button button-${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        <ArrowRight size={17} />
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer"
      >
        {children}
        <ArrowRight size={17} />
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
      {variant !== "text" && <ArrowRight size={17} />}
    </button>
  );
}

export default Button;

