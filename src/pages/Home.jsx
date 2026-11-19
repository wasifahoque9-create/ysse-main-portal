
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Users,
  Globe2,
  Sparkles,
} from "lucide-react";

import programs from "../data/programs";
import notices from "../data/notices";
import ProgramCard from "../components/ProgramCard";
import NoticeCard from "../components/NoticeCard";
import Button from "../components/Button";

function Home() {
  const featuredPrograms = programs.slice(0, 3);
  const latestNotices = notices.slice(0, 3);

  return (
    <div className="page-enter">
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
              <Button to="/programs">Explore Programs</Button>

              <Link to="/about" className="text-link">
                Discover YSSE <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-note-dot" />
              Learn · Grow · Lead
            </div>
          </div>

          {/* New right-side mosaic design */}
          <div className="hero-art hero-mosaic">
            <div className="mosaic-topline">
              <span>THE POWER OF YOUTH</span>
              <span>YSSE — 2026</span>
            </div>

            <div className="mosaic-main">
              <div className="mosaic-feature">
                <span className="mosaic-number">01 / IDEAS</span>

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
                <span className="mosaic-bottom-label">OUR APPROACH</span>
                <strong>Curiosity. Collaboration. Change.</strong>
              </div>

              <div className="mosaic-arrow">
                <ArrowUpRight size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-intro">
        <div className="intro-label">
          <span className="section-index">01</span>
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
            <span className="value-icon"><Lightbulb /></span>
            <h3>Think Creatively</h3>
            <p>Explore fresh perspectives and meaningful ideas.</p>
          </div>

          <div className="value-item">
            <span className="value-icon"><Users /></span>
            <h3>Grow Together</h3>
            <p>Learn through collaboration and shared experiences.</p>
          </div>

          <div className="value-item">
            <span className="value-icon"><Globe2 /></span>
            <h3>Create Impact</h3>
            <p>Use your potential to contribute to social progress.</p>
          </div>
        </div>
      </section>

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
          {featuredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>

      <section className="section notices-preview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT'S HAPPENING</span>
            <h2>Updates & <span>notices.</span></h2>
          </div>

          <Link to="/notices" className="text-link">
            All notices <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="notice-grid">
          {latestNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div className="cta-decoration">✳</div>

        <div className="cta-content">
          <span className="eyebrow">YOUR JOURNEY STARTS HERE</span>
          <h2>
            Have an idea?
            <br />
            <span>Let's grow it together.</span>
          </h2>

          <p>
            Discover opportunities, connect with a community of
            changemakers, and take your next step.
          </p>

          <Button to="/contact" variant="light">
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
