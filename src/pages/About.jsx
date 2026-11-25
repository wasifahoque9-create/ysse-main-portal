
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  HeartHandshake,
  Lightbulb,
  Users,
  GraduationCap,
  Globe2,
  Target,
  Eye,
  Sprout,
  Sparkles,
} from "lucide-react";

const activities = [
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description:
      "Creating opportunities for young people to strengthen their professional and personal skills.",
  },
  {
    icon: Lightbulb,
    title: "Social Entrepreneurship",
    description:
      "Encouraging innovative thinking and entrepreneurial approaches to social challenges.",
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    description:
      "Supporting young people as they develop confidence, leadership, and collaboration skills.",
  },
  {
    icon: HeartHandshake,
    title: "Community Engagement",
    description:
      "Promoting social awareness, volunteering, and positive community participation.",
  },
];

function About() {
  return (
    <div className="overflow-hidden bg-[#fafcf9] text-[#173c33]">

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#073f35] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-14 h-52 w-52 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.18em] text-emerald-200">
              <Sparkles size={14} />
              A LITTLE ABOUT US
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Driven by purpose.
              <br />
              <span className="text-emerald-300">
                Growing through people.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-emerald-50/75 sm:text-base">
              Discover the purpose, values, and work behind Youth
              School for Social Entrepreneurs.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wider text-emerald-200">
              <span>OUR STORY</span>
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              <span>OUR PURPOSE</span>
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              <span>OUR IMPACT</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#dcefe3] p-8 sm:min-h-[470px]">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-emerald-200/60" />
              <div className="absolute -bottom-16 -right-12 h-72 w-72 rounded-full bg-[#a8c9b2]/60" />

              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-emerald-800/15 bg-white/40 shadow-inner sm:h-80 sm:w-80">
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-[#073f35] text-emerald-200 shadow-2xl sm:h-60 sm:w-60">
                  <Sprout size={125} strokeWidth={1} />
                </div>
              </div>

              <div className="absolute left-5 top-7 rounded-xl bg-white px-4 py-3 shadow-lg sm:left-8">
                <span className="block text-[10px] font-bold tracking-widest text-emerald-700">
                  OUR BELIEF
                </span>
                <strong className="mt-1 block text-sm text-[#073f35]">
                  Ideas create change.
                </strong>
              </div>

              <div className="absolute bottom-6 right-5 rounded-xl bg-[#073f35] px-5 py-4 text-white shadow-lg sm:bottom-9 sm:right-8">
                <span className="text-xs text-emerald-200">
                  Since
                </span>
                <strong className="ml-2 text-2xl font-bold">
                  2015
                </strong>
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-emerald-100 bg-white px-6 py-3 text-center text-xs font-semibold text-[#087653] shadow-md sm:left-8 sm:translate-x-0">
              Ideas can change the world.
            </div>
          </div>

          {/* STORY CONTENT */}
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-emerald-700">
              OUR STORY
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#073f35] sm:text-4xl lg:text-5xl">
              Empowering youth to become{" "}
              <span className="text-emerald-700">
                changemakers.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-gray-600 sm:text-base">
              Youth School for Social Entrepreneurs (YSSE) is a
              youth-led, socially volunteered non-profit organization
              focused on social development. Its work connects youth
              empowerment with social entrepreneurship to encourage
              young people to contribute to meaningful change.
            </p>

            <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
              Since 2015, YSSE has worked toward addressing social
              challenges, including extreme poverty and youth
              unemployment, by empowering young people and women.
            </p>

            <a
              href="https://ysseglobal.org/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-bold text-emerald-800 transition-all duration-300 hover:gap-4"
            >
              Visit the official YSSE website
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-[#edf6ef] px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-emerald-700">
              WHAT GUIDES US
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#073f35] sm:text-4xl">
              Our purpose & aspiration.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600">
              The values that shape our direction and inspire our work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="group rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 transition-colors group-hover:bg-emerald-800 group-hover:text-white">
                <Target size={28} />
              </div>

              <span className="text-xs font-bold tracking-[0.2em] text-emerald-700">
                OUR PURPOSE
              </span>

              <h3 className="mt-3 text-2xl font-bold text-[#073f35]">
                Our Mission
              </h3>

              <p className="mt-5 text-sm leading-8 text-gray-600">
                To empower young people and women through social
                entrepreneurship and meaningful opportunities so
                they can contribute to social development and address
                important community challenges.
              </p>
            </article>

            <article className="group rounded-3xl border border-emerald-100 bg-[#073f35] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-200 transition-colors group-hover:bg-white group-hover:text-emerald-800">
                <Eye size={28} />
              </div>

              <span className="text-xs font-bold tracking-[0.2em] text-emerald-300">
                OUR ASPIRATION
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-5 text-sm leading-8 text-emerald-50/75">
                A society where empowered young people use their
                creativity, leadership, and entrepreneurial mindset
                to build a more inclusive and sustainable future.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-emerald-700">
                OUR AREAS OF WORK
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#073f35] sm:text-4xl">
                What we{" "}
                <span className="text-emerald-700">do.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-gray-600">
              We believe meaningful change begins when young people
              have the space and support to learn, collaborate, and act.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <article
                  key={activity.title}
                  className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf6ef] text-emerald-800 transition-all duration-300 group-hover:bg-[#087653] group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <span className="text-3xl font-light text-emerald-700/25">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-[#073f35]">
                    {activity.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {activity.description}
                  </p>

                  <div className="mt-7 h-1 w-10 rounded-full bg-emerald-600 transition-all duration-300 group-hover:w-20" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-[#073f35] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-emerald-300">
              OUR APPROACH TO IMPACT
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Progress is built through{" "}
              <span className="text-emerald-300">
                people and purpose.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-emerald-50/70 sm:text-base">
              YSSE's public information highlights its work in youth
              empowerment, social entrepreneurship, and social
              development. Rather than presenting unverified
              achievement numbers, this portal focuses on these
              documented areas of work.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Globe2,
                title: "Social Development",
                description: "Working toward positive social change.",
              },
              {
                icon: Users,
                title: "Youth Empowerment",
                description: "Encouraging young people to reach their potential.",
              },
              {
                icon: Lightbulb,
                title: "Entrepreneurial Thinking",
                description: "Promoting ideas that address social challenges.",
              },
            ].map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-emerald-300/40 hover:bg-white/10 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      {point.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-emerald-50/60">
                      {point.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="ml-auto shrink-0 text-emerald-300/60"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#dcefe3] px-7 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-emerald-800/10" />
          <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full border border-emerald-800/10" />

          <div className="relative mx-auto max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-emerald-800">
              BE PART OF THE CHANGE
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#073f35] sm:text-4xl lg:text-5xl">
              Your ideas deserve{" "}
              <span className="text-emerald-700">
                a place to grow.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Explore learning opportunities or connect with us to
              discover how you can get involved.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#087653] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#056747] hover:shadow-lg"
              >
                Explore Programs
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-800/30 bg-white/60 px-7 py-3.5 text-sm font-bold text-[#073f35] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Get in Touch
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
