
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Users,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  ExternalLink,
  BookOpen,
} from "lucide-react";

import programs from "../data/programs";

function ProgramDetails() {
  const { id } = useParams();

  const program = programs.find(
    (item) => String(item.id) === String(id)
  );

  if (!program) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#f7faf7] px-5 py-16">
        <div className="w-full max-w-lg rounded-3xl border border-[#e3ece5] bg-white px-6 py-12 text-center shadow-[0_10px_35px_rgba(20,70,45,0.06)] sm:px-10">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#eaf5ec] text-[#07845b]">
            <GraduationCap size={39} />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#07845b]">
            Program not found
          </span>

          <h2 className="mt-3 text-2xl font-bold text-[#174535] sm:text-3xl">
            This opportunity doesn't exist.
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#78877e]">
            The program you're looking for may be unavailable or the link
            may be incorrect.
          </p>

          <Link
            to="/programs"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#087653] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#056747]"
          >
            <ArrowLeft size={16} />
            Browse Programs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7faf7]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#073f34]">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-20 h-56 w-56 rounded-full border border-white/10" />
        <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-[#07845b]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          {/* Back to Programs - Clear White Button */}
          <Link
            to="/programs"
            className="mb-10 inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-5 py-3 text-sm font-bold text-[#087653] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#eaf5ec] hover:text-[#056747] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#073f34]"
          >
            <ArrowLeft size={17} strokeWidth={2.5} />
            Back to Programs
          </Link>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#a8dfb9]/25 bg-[#a8dfb9]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#b8e8c5]">
              <Sparkles size={14} />
              {program.category}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {program.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {program.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white/90">
                <Clock3 size={17} className="text-[#a8dfb9]" />
                {program.duration}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white/90">
                <GraduationCap size={18} className="text-[#a8dfb9]" />
                {program.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_350px] lg:gap-12 lg:px-10 lg:py-16">
        {/* Main content */}
        <div className="space-y-8">
          {/* About */}
          <div className="rounded-2xl border border-[#e3ece5] bg-white p-6 shadow-[0_5px_22px_rgba(20,70,45,0.03)] sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf5ec] text-[#07845b]">
                <BookOpen size={21} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#07845b]">
                  About this program
                </span>
                <h2 className="mt-1 text-xl font-bold text-[#174535] sm:text-2xl">
                  What you should know
                </h2>
              </div>
            </div>

            <p className="text-sm leading-8 text-[#718078] sm:text-base">
              {program.fullDescription}
            </p>
          </div>

          {/* Learning outcomes */}
          <div className="rounded-2xl border border-[#e3ece5] bg-white p-6 shadow-[0_5px_22px_rgba(20,70,45,0.03)] sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf5ec] text-[#07845b]">
                <GraduationCap size={22} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#07845b]">
                  Your learning journey
                </span>
                <h2 className="mt-1 text-xl font-bold text-[#174535] sm:text-2xl">
                  What you can learn
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {program.learningOutcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 rounded-xl bg-[#f7faf7] p-4 transition hover:bg-[#edf6ee]"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#07845b]"
                  />
                  <span className="text-sm leading-7 text-[#456454]">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Audience */}
          <div className="rounded-2xl border border-[#e3ece5] bg-white p-6 shadow-[0_5px_22px_rgba(20,70,45,0.03)] sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf5ec] text-[#07845b]">
                <Users size={21} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#07845b]">
                  Who can explore it
                </span>
                <h2 className="mt-1 text-xl font-bold text-[#174535] sm:text-2xl">
                  Who is it for?
                </h2>
              </div>
            </div>

            <p className="text-sm leading-8 text-[#718078] sm:text-base">
              {program.audience}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-[#dcebe1] bg-white shadow-[0_8px_30px_rgba(20,70,45,0.06)]">
            <div className="bg-[#eaf5ec] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#07845b] shadow-sm">
                <GraduationCap size={25} />
              </div>

              <h3 className="mt-4 text-xl font-bold text-[#174535]">
                Program information
              </h3>

              <p className="mt-1 text-sm text-[#718078]">
                A quick overview of this opportunity.
              </p>
            </div>

            <div className="space-y-5 p-6">
              <div className="flex items-start gap-3">
                <Clock3 size={20} className="mt-0.5 shrink-0 text-[#07845b]" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#91a097]">
                    Duration
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#24523e]">
                    {program.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap
                  size={20}
                  className="mt-0.5 shrink-0 text-[#07845b]"
                />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#91a097]">
                    Category
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#24523e]">
                    {program.category}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users size={20} className="mt-0.5 shrink-0 text-[#07845b]" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#91a097]">
                    Designed for
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#24523e]">
                    {program.audience}
                  </p>
                </div>
              </div>

              {program.officialLink && (
                <div className="border-t border-[#edf2ed] pt-5">
                  <a
                    href={program.officialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#087653] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#056747] hover:shadow-lg hover:shadow-[#087653]/15"
                  >
                    Official Program Website
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>

          <Link
            to="/programs"
            className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-[#dcebe1] bg-white px-5 py-3.5 text-sm font-semibold text-[#087653] transition hover:border-[#9bc9a8] hover:bg-[#edf6ee]"
          >
            Explore other programs
            <ArrowRight size={16} />
          </Link>
        </aside>
      </section>
    </div>
  );
}

export default ProgramDetails;
