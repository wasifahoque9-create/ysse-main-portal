
import { ArrowUpRight, Bell } from "lucide-react";

function NoticeCard({ notice }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e3ece5] bg-white p-6 shadow-[0_5px_22px_rgba(20,70,45,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b9d9c2] hover:shadow-[0_16px_35px_rgba(20,90,55,0.10)]">
      {/* Icon */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf5ec] text-[#07845b] transition-all duration-300 group-hover:bg-[#087653] group-hover:text-white">
          <Bell size={21} />
        </div>

        <span className="rounded-full bg-[#f1f7f1] px-3 py-1.5 text-xs font-semibold text-[#347052]">
          {notice.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-[#91a097]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7dbb91]" />
          {notice.date}
        </div>

        <h3 className="text-lg font-bold leading-snug text-[#174535] transition-colors duration-200 group-hover:text-[#087653]">
          {notice.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-[#718078]">
          {notice.description}
        </p>

        {/* Read More */}
        <div className="mt-6 border-t border-[#edf2ed] pt-4">
          <a
            href={notice.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#087653] transition-all duration-200 hover:gap-3 hover:text-[#045b3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07845b] focus-visible:ring-offset-4"
          >
            Read More
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default NoticeCard;
