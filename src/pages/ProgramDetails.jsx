
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock3,
  Users,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

import programs from "../data/programs";
import Button from "../components/Button";

function ProgramDetails() {
  const { id } = useParams();

  const program = programs.find(
    (item) => item.id === id
  );

  if (!program) {
    return (
      <section className="section invalid-program">
        <div className="empty-state">
          <GraduationCap size={42} />
          <span className="eyebrow">PROGRAM NOT FOUND</span>
          <h2>This opportunity doesn't exist.</h2>
          <p>
            The program you're looking for may be unavailable or
            the link may be incorrect.
          </p>
          <Button to="/programs">Browse Programs</Button>
        </div>
      </section>
    );
  }

  return (
    <div className="page-enter">
      <section className="program-detail-hero">
        <div className="section">
          <Link to="/programs" className="back-link">
            <ArrowLeft size={17} />
            Back to Programs
          </Link>

          <div className="program-detail-heading">
            <span className="eyebrow">{program.category}</span>
            <h1>{program.title}</h1>
            <p>{program.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="section program-detail-layout">
        <div className="program-detail-main">
          <div className="detail-section">
            <span className="eyebrow">ABOUT THIS PROGRAM</span>
            <h2>What you should know</h2>
            <p>{program.fullDescription}</p>
          </div>

          <div className="detail-section">
            <span className="eyebrow">YOUR LEARNING JOURNEY</span>
            <h2>What you can learn</h2>

            <div className="learning-outcomes">
              {program.learningOutcomes.map((outcome) => (
                <div key={outcome} className="outcome-item">
                  <CheckCircle2 size={19} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <span className="eyebrow">WHO CAN EXPLORE IT</span>
            <h2>Who is it for?</h2>
            <p>{program.audience}</p>
          </div>
        </div>

        <aside className="program-detail-sidebar">
          <div className="detail-info-card">
            <span className="eyebrow">PROGRAM INFORMATION</span>

            <div className="detail-info-row">
              <Clock3 size={20} />
              <div>
                <small>Duration</small>
                <strong>{program.duration}</strong>
              </div>
            </div>

            <div className="detail-info-row">
              <GraduationCap size={20} />
              <div>
                <small>Category</small>
                <strong>{program.category}</strong>
              </div>
            </div>

            <div className="detail-info-row">
              <Users size={20} />
              <div>
                <small>Designed for</small>
                <strong>{program.audience}</strong>
              </div>
            </div>

            {program.officialLink ? (
              <Button href={program.officialLink}>
                Official Program Website
              </Button>
            ) : null}
          </div>
        </aside>
      </section>
    </div>
  );
}

export default ProgramDetails;

