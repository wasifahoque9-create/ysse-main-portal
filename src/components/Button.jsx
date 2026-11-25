
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
  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#07845b]/20";

  const variants = {
    primary:
      "bg-[#087653] text-white shadow-lg shadow-[#087653]/15 hover:-translate-y-1 hover:bg-[#056747] hover:shadow-xl hover:shadow-[#087653]/20",

    secondary:
      "border-2 border-[#087653] bg-transparent text-[#087653] hover:-translate-y-1 hover:bg-[#087653] hover:text-white",

    light:
  "bg-white text-[#056747] font-extrabold shadow-md hover:-translate-y-1 hover:bg-[#c9ecd6] hover:text-[#052e27] hover:shadow-lg",

    text:
      "rounded-none bg-transparent px-0 py-2 text-[#087653] shadow-none hover:gap-3 hover:text-[#056747]",
  };

  const classes = `${baseClasses} ${
    variants[variant] || variants.primary
  } ${className}`;

  const arrow =
    variant !== "text" ? (
      <ArrowRight
        size={17}
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      />
    ) : null;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
        {arrow}
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
        onClick={onClick}
      >
        {children}
        {arrow}
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
      {arrow}
    </button>
  );
}

export default Button;
