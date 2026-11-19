
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, GraduationCap } from "lucide-react";

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
        program.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        program.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="LEARN SOMETHING NEW"
        title="Opportunities to grow."
        description="Explore learning experiences and program concepts designed around youth development and social impact."
      />

      <section className="section programs-page-section">
        <div className="notice-page-toolbar">
          <div className="notice-results">
            <GraduationCap size={21} />
            <span>
              <strong>{filteredPrograms.length}</strong> programs found
            </span>
          </div>

          <div className="notice-search">
            <Search size={18} />
            <input
              type="search"
              placeholder="Search programs..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search programs"
            />
          </div>
        </div>

        <div className="category-filters">
          <SlidersHorizontal size={17} />

          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                selectedCategory === category
                  ? "filter-chip selected"
                  : "filter-chip"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredPrograms.length > 0 ? (
          <div className="program-grid programs-page-grid">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={34} />
            <h3>No programs found</h3>
            <p>
              We couldn't find a matching program. Try another search.
            </p>
            <button
              type="button"
              className="text-link"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Programs;
