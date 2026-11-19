
import { ArrowUpRight, Bell } from "lucide-react";

function NoticeCard({ notice }) {
  return (
    <article className="notice-card">
      <div className="notice-card-icon">
        <Bell size={21} />
      </div>

      <div className="notice-card-content">
        <div className="notice-meta">
          <span className="notice-category">
            {notice.category}
          </span>
          <span>{notice.date}</span>
        </div>

        <h3>{notice.title}</h3>

        <p>{notice.description}</p>

        <a
          href={notice.link}
          target="_blank"
          rel="noreferrer"
          className="card-link"
        >
          Read More
          <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  );
}

export default NoticeCard;

