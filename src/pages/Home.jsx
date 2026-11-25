
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Users,
  Globe2,
  Sparkles,
  CalendarDays,
} from "lucide-react";

import programs from "../data/programs";
import notices from "../data/notices";
import ProgramCard from "../components/ProgramCard";
import NoticeCard from "../components/NoticeCard";
import Button from "../components/Button";

function Home() {
  const featuredPrograms = programs.slice(0, 3);
  const latestNotices = notices.slice(0, 3);

  const upcomingEvents = [
    {
      id: 1,
      number: "01",
      category: "WORKSHOP",
      title: "Social Entrepreneurship Workshop",
      description:
        "Explore how creative ideas and innovative thinking can address social challenges.",
    },
    {
      id: 2,
      number: "02",
      category: "NETWORKING",
      title: "Youth Connect Session",
      description:
        "Meet other young people, exchange experiences, and discover new opportunities.",
    },
    {
      id: 3,
      number: "03",
      category: "LEARNING",
      title: "Leadership Development Session",
      description:
        "Discover practical approaches to personal growth and effective leadership.",
    },
  ];

  return (
    <div className="page-enter">

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-background-shape hero-shape-one" />
        <div className="hero-background-shape hero-shape-two" />

        <div className="hero-content">
          <div className="hero-copy animate-fade-up">
            <span className="eyebrow hero-eyebrow">
              <Sparkles size={15} />
              Youth School for Social Entrepreneurs
            </span>

            <h1>
              Growing Ideas.
              <br />
              <span>Creating Impact.</span>
            </h1>

            <p>
              A space where young minds discover their potential,
              develop meaningful skills, and turn ideas into positive
              change.
            </p>

            <div className="hero-actions">
              <Button to="/programs" variant="light">
                Explore Programs
              </Button>

              <Link to="/about" className="text-link">
                Discover YSSE <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-note-dot" />
              Learn · Grow · Lead
            </div>
          </div>

          {/* HERO MOSAIC */}
          <div className="hero-art hero-mosaic">
            <div className="mosaic-topline">
              <span>THE POWER OF YOUTH</span>
              <span>YSSE — 2026</span>
            </div>

            <div className="mosaic-main">
              <div className="mosaic-feature">

                <div className="mosaic-feature-copy">
                  <span>THINK BIGGER</span>
                  <h2>
                    Ideas
                    <br />
                    change
                    <br />
                    <em>everything.</em>
                  </h2>
                </div>

                <div className="mosaic-sparkle">
                  <Sparkles size={30} />
                </div>
              </div>

              <div className="mosaic-side">
                <div className="mosaic-people">
                  <Users size={34} strokeWidth={1.3} />
                  <span>PEOPLE</span>
                  <strong>BETTER TOGETHER</strong>
                </div>

                <div className="mosaic-light">
                  <Lightbulb size={38} strokeWidth={1.3} />
                  <span>
                    FRESH
                    <br />
                    THINKING
                  </span>
                </div>
              </div>
            </div>

            <div className="mosaic-bottom">
              <div>
                <span className="mosaic-bottom-label">
                  OUR APPROACH
                </span>
                <strong>
                  Curiosity. Collaboration. Change.
                </strong>
              </div>

              <div className="mosaic-arrow">
                <ArrowUpRight size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRODUCTION */}
      <section className="section home-intro">
        <div className="intro-label">
  <span>WHO WE ARE</span>
</div>

        <div className="intro-content">
          <h2>
            Young people are not just the leaders of tomorrow.
            <span> They can create change today.</span>
          </h2>

          <div className="intro-description">
            <p>
              Youth School for Social Entrepreneurs (YSSE) is a
              youth-led, socially volunteered non-profit organization
              working for social development through the power of
              young people and social entrepreneurship.
            </p>

            <Link to="/about" className="text-link">
              Get to know us <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="intro-values">
          <div className="value-item">
            <span className="value-icon">
              <Lightbulb />
            </span>
            <h3>Think Creatively</h3>
            <p>
              Explore fresh perspectives and meaningful ideas.
            </p>
          </div>

          <div className="value-item">
            <span className="value-icon">
              <Users />
            </span>
            <h3>Grow Together</h3>
            <p>
              Learn through collaboration and shared experiences.
            </p>
          </div>

          <div className="value-item">
            <span className="value-icon">
              <Globe2 />
            </span>
            <h3>Create Impact</h3>
            <p>
              Use your potential to contribute to social progress.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="section programs-preview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LEARN & DEVELOP</span>
            <h2>
              Explore opportunities
              <br />
              to <span>grow.</span>
            </h2>
          </div>

          <Link to="/programs" className="text-link">
            View all programs <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="program-grid">
          {featuredPrograms.length > 0 ? (
            featuredPrograms.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
              />
            ))
          ) : (
            <p className="col-span-full py-10 text-center text-gray-500">
              No programs are available right now.
            </p>
          )}
        </div>
      </section>

      {/* NOTICES SECTION */}
      <section className="section notices-preview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT'S HAPPENING</span>
            <h2>
              Updates & <span>notices.</span>
            </h2>
          </div>

          <Link to="/notices" className="text-link">
            All notices <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="notice-grid">
          {latestNotices.length > 0 ? (
            latestNotices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
              />
            ))
          ) : (
            <p className="col-span-full py-10 text-center text-gray-500">
              No notices are available right now.
            </p>
          )}
        </div>
      </section>

      {/* UPCOMING EVENTS SECTION */}
      <section className="bg-[#f2f7f2] px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-emerald-700">
                MARK YOUR CALENDAR
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#073f35] sm:text-4xl">
                Upcoming{" "}
                <span className="text-emerald-700">
                  events.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
                Explore opportunities to learn, connect, and
                exchange ideas.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-semibold text-emerald-800 transition-all duration-300 hover:gap-3"
            >
              Get in touch <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="group rounded-2xl border border-emerald-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-3xl font-light text-emerald-700/40">
                    {event.number}
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold tracking-wider text-emerald-800">
                    {event.category}
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-2 text-emerald-700">
                  <CalendarDays size={15} />
                  <span className="text-xs font-semibold">
                    Sample event
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-[#073f35]">
                  {event.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {event.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-emerald-600 transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs text-gray-500">
            Note: These are illustrative sample events, not official
            YSSE announcements.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="home-cta">
        <div className="cta-decoration">✳</div>

        <div className="cta-content">
          <span className="eyebrow">
            YOUR JOURNEY STARTS HERE
          </span>

          <h2>
            Have an idea?
            <br />
            <span>Let's grow it together.</span>
          </h2>

          <p>
            Discover opportunities, connect with a community of
            changemakers, and take your next step.
          </p>

          <Button
            to="/contact"
            variant="light"
            className="!font-extrabold !text-[#056747] hover:!bg-[#c9ecd6] hover:!text-[#052e27] [text-shadow:none]"
          >
            Connect with us
          </Button>
        </div>

        <div className="cta-side-note">
          <span>LEARN</span>
          <ArrowRight size={18} />
          <span>GROW</span>
          <ArrowRight size={18} />
          <span>LEAD</span>
        </div>
      </section>

    </div>
  );
}

export default Home;
