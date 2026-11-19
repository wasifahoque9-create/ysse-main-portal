
import {
  ArrowUpRight,
  HeartHandshake,
  Lightbulb,
  Users,
  GraduationCap,
  Globe2,
  Target,
  Eye,
  Sprout,
} from "lucide-react";

import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

const activities = [
  {
    icon: <GraduationCap size={25} />,
    title: "Learning & Development",
    description:
      "Creating opportunities for young people to strengthen their professional and personal skills.",
  },
  {
    icon: <Lightbulb size={25} />,
    title: "Social Entrepreneurship",
    description:
      "Encouraging innovative thinking and entrepreneurial approaches to social challenges.",
  },
  {
    icon: <Users size={25} />,
    title: "Youth Empowerment",
    description:
      "Supporting young people as they develop confidence, leadership, and collaboration skills.",
  },
  {
    icon: <HeartHandshake size={25} />,
    title: "Community Engagement",
    description:
      "Promoting social awareness, volunteering, and positive community participation.",
  },
];

function About() {
  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="A LITTLE ABOUT US"
        title="Driven by purpose. Growing through people."
        description="Discover the purpose, values, and work behind Youth School for Social Entrepreneurs."
      />

      <section className="section about-intro">
        <div className="about-intro-visual">
          <div className="about-visual-circle">
            <Sprout size={115} strokeWidth={1} />
          </div>
          <span className="about-visual-caption">
            Ideas can change the world.
          </span>
        </div>

        <div className="about-intro-copy">
          <span className="eyebrow">OUR STORY</span>
          <h2>
            Empowering youth to become
            <span> changemakers.</span>
          </h2>
          <p>
            Youth School for Social Entrepreneurs (YSSE) is a
            youth-led, socially volunteered non-profit organization
            focused on social development. Its work connects youth
            empowerment with social entrepreneurship to encourage
            young people to contribute to meaningful change.
          </p>
          <p>
            Since 2015, YSSE has worked toward addressing social
            challenges, including extreme poverty and youth
            unemployment, by empowering young people and women.
          </p>
          <a
            href="https://ysseglobal.org/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Visit the official YSSE website
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision-section">
        <div className="section mission-vision-grid">
          <article className="mission-card">
            <div className="mission-icon">
              <Target size={27} />
            </div>
            <span className="eyebrow">OUR PURPOSE</span>
            <h2>Our Mission</h2>
            <p>
              To empower young people and women through social
              entrepreneurship and meaningful opportunities so
              they can contribute to social development and address
              important community challenges.
            </p>
          </article>

          <article className="vision-card">
            <div className="mission-icon">
              <Eye size={27} />
            </div>
            <span className="eyebrow">OUR ASPIRATION</span>
            <h2>Our Vision</h2>
            <p>
              A society where empowered young people use their
              creativity, leadership, and entrepreneurial mindset
              to build a more inclusive and sustainable future.
            </p>
          </article>
        </div>
      </section>

      {/* What We Do */}
      <section className="section what-we-do">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR AREAS OF WORK</span>
            <h2>What we <span>do.</span></h2>
          </div>
          <p>
            We believe meaningful change begins when young people
            have the space and support to learn, collaborate, and act.
          </p>
        </div>

        <div className="activity-grid">
          {activities.map((activity, index) => (
            <article className="activity-card" key={activity.title}>
              <span className="activity-number">
                0{index + 1}
              </span>
              <div className="activity-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="about-impact">
        <div className="section impact-inner">
          <div className="impact-copy">
            <span className="eyebrow">OUR APPROACH TO IMPACT</span>
            <h2>
              Progress is built through
              <span> people and purpose.</span>
            </h2>
            <p>
              YSSE's public information highlights its work in
              youth empowerment, social entrepreneurship, and
              social development. Rather than presenting
              unverified achievement numbers, this portal focuses
              on these documented areas of work.
            </p>
          </div>

          <div className="impact-points">
            <div>
              <Globe2 size={24} />
              <span>
                <strong>Social Development</strong>
                <small>Working toward positive social change.</small>
              </span>
            </div>

            <div>
              <Users size={24} />
              <span>
                <strong>Youth Empowerment</strong>
                <small>Encouraging young people to reach their potential.</small>
              </span>
            </div>

            <div>
              <Lightbulb size={24} />
              <span>
                <strong>Entrepreneurial Thinking</strong>
                <small>Promoting ideas that address social challenges.</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section about-cta">
        <span className="eyebrow">BE PART OF THE CHANGE</span>
        <h2>Your ideas deserve <span>a place to grow.</span></h2>
        <p>
          Explore learning opportunities or connect with us to
          discover how you can get involved.
        </p>

        <div className="hero-actions">
          <Button to="/programs">Explore Programs</Button>
          <Button to="/contact" variant="outline">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
}

export default About;
