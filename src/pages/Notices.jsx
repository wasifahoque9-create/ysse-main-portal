
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, BellRing } from "lucide-react";

import notices from "../data/notices";
import NoticeCard from "../components/NoticeCard";
import PageHeader from "../components/PageHeader";

function Notices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(notices.map((notice) => notice.category)),
  ];

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesSearch =
        notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        notice.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="STAY IN THE LOOP"
        title="Notices & Updates"
        description="Explore updates, learning resources, and opportunity-related information."
      />

      <section className="section notices-page-section">
        <div className="notice-page-toolbar">
          <div className="notice-results">
            <BellRing size={20} />
            <span>
              Showing <strong>{filteredNotices.length}</strong> notices
            </span>
          </div>

          <div className="notice-search">
            <Search size={18} />
            <input
              type="search"
              placeholder="Search notices..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search notices"
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

        {filteredNotices.length > 0 ? (
          <div className="notice-grid notices-page-grid">
            {filteredNotices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={34} />
            <h3>No notices found</h3>
            <p>
              Try another search term or choose a different category.
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

export default Notices;
