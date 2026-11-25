
import {
  ArrowUpRight,
  Clock3,
  Sprout,
  Users,
  Lightbulb,
  Globe2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

const artwork = [
  {
    icon: Sprout,
    word: "GROW",
    background: "bg-[#dceee0]",
    accent: "text-[#087653]",
    orb: "border-[#78b995]/40",
  },
  {
    icon: Users,
    word: "LEAD",
    background: "bg-[#e9e5f5]",
    accent: "text-[#7563a6]",
    orb: "border-[#a69bd0]/40",
  },
  {
    icon: Lightbulb,
    word: "IDEATE",
    background: "bg-[#f9e8dc]",
    accent: "text-[#bd744b]",
    orb: "border-[#dfa17d]/40",
  },
  {
    icon: Globe2,
    word: "CONNECT",
    background: "bg-[#dcecf2]",
    accent: "text-[#43849a]",
    orb: "border-[#83b5c5]/40",
  },
  {
    icon: GraduationCap,
    word: "LEARN",
    background: "bg-[#f5efd8]",
    accent: "text-[#a48735]",
    orb: "border-[#cdbb79]/40",
  },
  {
    icon: Sparkles,
    word: "CREATE",
    background: "bg-[#f5e3eb]",
    accent: "text-[#ad6488]",
    orb: "border-[#d59ab5]/40",
  },
];

function ProgramCard({ program, featured = false }) {
  const visualIndex =
    ((Number(program.id) - 1) % artwork.length + artwork.length) %
    artwork.length;

  const visual = artwork[visualIndex];
  const ArtworkIcon = visual.icon;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e3ece5] bg-white shadow-[0_5px_22px_rgba(20,70,45,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b9d9c2] hover:shadow-[0_16px_35px_rgba(20,90,55,0.10)] ${
        featured ? "ring-2 ring-[#07845b]/20" : ""
      }`}
    >
      {/* Program artwork */}
      <div
        className={`relative flex h-52 items-center justify-center overflow-hidden ${visual.background}`}
      >
        {/* Decorative orbits */}
        <div
          className={`absolute h-48 w-48 rounded-full border ${visual.orb} transition-transform duration-700 group-hover:scale-110`}
        />

        <div
          className={`absolute h-36 w-36 rounded-full border ${visual.orb} transition-transform duration-700 group-hover:scale-110`}
        />

        <div className="absolute -left-10 -top-12 h-36 w-36 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-14 -right-8 h-40 w-40 rounded-full bg-white/30 blur-2xl" />

        {/* Program number */}
        <span className="absolute left-5 top-5 text-sm font-bold tracking-widest text-[#315b48]/60">
          {String(program.id).padStart(2, "0")}
        </span>

        {/* Category */}
        <span className="absolute right-5 top-5 max-w-[65%] truncate rounded-full bg-white/65 px-3 py-1.5 text-xs font-semibold text-[#315b48] backdrop-blur-sm">
          {program.category}
        </span>

        {/* Main artwork */}
        <div
          className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/55 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 ${visual.accent}`}
        >
          <ArtworkIcon size={48} strokeWidth={1.35} />
        </div>

        <span className="absolute bottom-4 right-5 text-xs font-extrabold tracking-[0.28em] text-[#315b48]/35">
          {visual.word}
        </span>

        <div className="absolute bottom-5 left-5 h-2 w-2 rounded-full bg-white/70" />
      </div>

      {/* Program content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-[#819187]">
          <Clock3 size={15} className="text-[#07845b]" />
          <span>{program.duration}</span>
        </div>

        <h3 className="text-lg font-bold leading-snug text-[#174535] transition-colors duration-200 group-hover:text-[#087653]">
          {program.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-[#718078]">
          {program.shortDescription}
        </p>

        <div className="mt-6 border-t border-[#edf2ed] pt-4">
          <Link
            to={`/programs/${program.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#087653] transition-all duration-200 hover:gap-3 hover:text-[#045b3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07845b] focus-visible:ring-offset-4"
          >
            View program
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProgramCard;
