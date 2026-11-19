import {
  ArrowUpRight, Clock3, Sprout, Users, Lightbulb, Globe2,
  GraduationCap, Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const artwork = [
  { icon: Sprout, word: "GROW", className: "artwork-sage" },
  { icon: Users, word: "LEAD", className: "artwork-lilac" },
  { icon: Lightbulb, word: "IDEATE", className: "artwork-peach" },
  { icon: Globe2, word: "CONNECT", className: "artwork-blue" },
  { icon: GraduationCap, word: "LEARN", className: "artwork-yellow" },
  { icon: Sparkles, word: "CREATE", className: "artwork-pink" },
];

function ProgramCard({ program, featured = false }) {
  const visual = artwork[(Number(program.id) - 1) % artwork.length];
  const ArtworkIcon = visual.icon;

  return (
    <article className={`program-card impact-program-card ${featured ? "featured" : ""}`}>
      <div className={`program-card-visual ${visual.className}`}>
        <span className="program-card-number">0{program.id}</span>
        <span className="program-category">{program.category}</span>
        <div className="program-art-orbit orbit-one" />
        <div className="program-art-orbit orbit-two" />
        <div className="program-art-symbol"><ArtworkIcon size={48} strokeWidth={1.35} /></div>
        <span className="program-art-word">{visual.word}</span>
      </div>

      <div className="program-card-content">
        <div className="program-duration">
          <Clock3 size={14} />
          <span>{program.duration}</span>
        </div>
        <h3>{program.title}</h3>
        <p>{program.shortDescription}</p>
        <Link to={`/programs/${program.id}`} className="card-link">
          View program <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}

export default ProgramCard;
