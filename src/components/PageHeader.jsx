
import { Sparkles } from "lucide-react";

function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="page-header">
      <div className="page-header-content animate-fade-up">
        {eyebrow && (
          <span className="eyebrow">
            <Sparkles size={15} />
            {eyebrow}
          </span>
        )}

        <h1>{title}</h1>

        {description && <p>{description}</p>}
      </div>
    </section>
  );
}

export default PageHeader;

