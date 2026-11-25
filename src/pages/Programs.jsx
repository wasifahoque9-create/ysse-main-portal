
import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import programs from "../data/programs";
import ProgramCard from "../components/ProgramCard";
import PageHeader from "../components/PageHeader";

function Programs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(programs.map((program) => program.category)),
  ];

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const matchesSearch =
        program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.shortDescription
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        program.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f7faf7]">
      <PageHeader
        eyebrow="LEARN SOMETHING NEW"
        title="Opportunities to grow."
        description="Explore learning experiences and program concepts designed around youth development and social impact."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* Heading */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#07845b]">
              <Sparkles size={16} />
              <span>Discover opportunities</span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-[#123d32] sm:text-3xl">
              Explore our programs
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-7 text-[#718078] sm:text-base">
              Find opportunities to develop your skills, explore new ideas
              and create meaningful impact.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-[#dcebe1] bg-white px-4 py-2.5 text-sm font-medium text-[#315e4c] shadow-sm">
            <GraduationCap size={19} className="text-[#07845b]" />
            <span>
              <strong className="text-[#087653]">
                {filteredPrograms.length}
              </strong>{" "}
              programs found
            </span>
          </div>
        </div>

        {/* Search and category filters */}
        <div className="mb-8 rounded-2xl border border-[#e4eee6] bg-white p-4 shadow-[0_8px_30px_rgba(20,70,45,0.04)] sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b9b91]"
              />

              <input
                type="search"
                placeholder="Search programs by title or description..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search programs"
                className="w-full rounded-xl border border-[#e1ebe3] bg-[#f9fbf9] py-3.5 pl-11 pr-4 text-sm text-[#234b3b] outline-none transition placeholder:text-[#9aa99f] hover:border-[#a9cfb5] focus:border-[#07845b] focus:bg-white focus:ring-4 focus:ring-[#07845b]/10"
              />
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#426451]">
              <SlidersHorizontal size={17} />
              <span>Filter by category</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "border-[#087653] bg-[#087653] text-white shadow-md shadow-[#087653]/15"
                    : "border-[#e0ebe2] bg-white text-[#557061] hover:border-[#83b99a] hover:bg-[#eff8f1] hover:text-[#087653]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results information */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-[#78877e]">
            Showing{" "}
            <strong className="text-[#24523e]">
              {filteredPrograms.length}
            </strong>{" "}
            of {programs.length} programs
          </p>

          {(searchTerm || selectedCategory !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#087653] transition hover:text-[#045b3d]"
            >
              Clear filters
              <ArrowRight size={15} />
            </button>
          )}
        </div>

        {/* Program grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#cbded0] bg-white px-5 py-16 text-center sm:py-20">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf5ec] text-[#07845b]">
              <Search size={29} />
            </div>

            <h3 className="text-xl font-bold text-[#174535]">
              No programs found
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[#829087]">
              We couldn't find a matching program. Try another search term
              or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#087653] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#087653]/15 transition hover:-translate-y-0.5 hover:bg-[#056747]"
            >
              Clear all filters
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Bottom note */}
        <div className="mt-12 flex flex-col gap-3 rounded-2xl border border-[#dcebe1] bg-[#edf6ee] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-white p-2 text-[#07845b]">
              <GraduationCap size={20} />
            </div>

            <div>
              <h3 className="font-semibold text-[#194b38]">
                Every opportunity starts with curiosity
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#668071]">
                Explore, learn and take your next step towards making a
                difference.
              </p>
            </div>
          </div>

          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#087653]">
            Keep growing <ArrowRight size={15} />
          </span>
        </div>
      </section>
    </div>
  );
}

export default Programs;
