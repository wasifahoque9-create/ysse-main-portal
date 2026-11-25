
import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  User,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

function Contact() {
  const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialForm);
      setErrors({});
    }
  };

  const inputClasses =
    "mt-2 w-full rounded-xl border border-[#dce9df] bg-[#fbfdfb] px-4 py-3.5 text-sm text-[#174535] outline-none transition placeholder:text-[#a3b0a7] hover:border-[#a8cbb2] focus:border-[#07845b] focus:bg-white focus:ring-4 focus:ring-[#07845b]/10";

  const labelClasses =
    "text-sm font-semibold text-[#315a46]";

  const errorClasses =
    "mt-2 block text-xs font-medium text-red-500";

  return (
    <div className="min-h-screen bg-[#f7faf7]">
      <PageHeader
        eyebrow="LET'S CONNECT"
        title="We would love to hear from you."
        description="Have a question, an idea, or simply want to connect? Send us a message."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* Contact Information */}
          <div className="relative overflow-hidden rounded-3xl bg-[#073f34] p-7 text-white shadow-xl shadow-[#073f34]/10 sm:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#07845b]/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#a8dfb9]/25 bg-[#a8dfb9]/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#b8e8c5]">
                <Sparkles size={14} />
                GET IN TOUCH
              </span>

              <h2 className="mt-7 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Every great connection starts with a conversation.
              </h2>

              <p className="mt-5 text-sm leading-8 text-white/65 sm:text-base">
                Whether you want to explore opportunities or learn more
                about YSSE, feel free to reach out.
              </p>

              {/* Official Website */}
              <a
                href="https://ysseglobal.org/"
                target="_blank"
                rel="noreferrer"
                className="group mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:-translate-y-1 hover:border-[#a8dfb9]/40 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#a8dfb9]/15 text-[#b8e8c5]">
                  <Mail size={22} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-white/50">
                    Official Website
                  </span>
                  <span className="mt-1 block text-sm font-bold text-white">
                    ysseglobal.org
                  </span>
                </span>

                <ArrowUpRight
                  size={19}
                  className="shrink-0 text-white/50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b8e8c5]"
                />
              </a>

              {/* Stay Connected */}
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#a8dfb9]/15 text-[#b8e8c5]">
                  <MessageSquare size={22} />
                </span>

                <div>
                  <strong className="block text-sm text-white">
                    Stay Connected
                  </strong>
                  <p className="mt-1 text-xs leading-6 text-white/55">
                    Follow YSSE through its official channels.
                  </p>
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-6">
                <p className="text-xs leading-6 text-white/45">
                  Ideas grow when people connect. We look forward to hearing
                  from you.
                </p>
                <div className="mt-5 text-4xl text-[#a8dfb9]">✳</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-[#e3ece5] bg-white p-6 shadow-[0_10px_35px_rgba(20,70,45,0.05)] sm:p-9 lg:p-10">
            {submitted && (
              <div
                className="mb-7 flex items-start gap-3 rounded-2xl border border-[#b8dfc1] bg-[#eff9f0] p-4"
                role="status"
              >
                <CheckCircle2
                  size={23}
                  className="mt-0.5 shrink-0 text-[#07845b]"
                />

                <div>
                  <strong className="text-sm font-bold text-[#056747]">
                    Thank you for reaching out!
                  </strong>
                  <p className="mt-1 text-xs leading-6 text-[#52745e]">
                    Your form has been validated successfully. This demo does
                    not send or store messages.
                  </p>
                </div>
              </div>
            )}

            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.18em] text-[#07845b]">
                SEND A MESSAGE
              </span>

              <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-[#174535]">
                Let's talk.
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#849188]">
                Fill in the details below and share what's on your mind.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-4 top-[26px] -translate-y-1/2 text-[#91a397]"
                  />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    className={`${inputClasses} pl-11 ${
                      errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""
                    }`}
                  />
                </div>

                {errors.name && (
                  <small className={errorClasses}>{errors.name}</small>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-[26px] -translate-y-1/2 text-[#91a397]"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    className={`${inputClasses} pl-11 ${
                      errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""
                    }`}
                  />
                </div>

                {errors.email && (
                  <small className={errorClasses}>{errors.email}</small>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className={labelClasses}>
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  className={`${inputClasses} ${
                    errors.subject ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""
                  }`}
                />

                {errors.subject && (
                  <small className={errorClasses}>{errors.subject}</small>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputClasses} min-h-[140px] resize-y ${
                    errors.message ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""
                  }`}
                />

                {errors.message && (
                  <small className={errorClasses}>{errors.message}</small>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#087653] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#087653]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#056747] hover:shadow-xl hover:shadow-[#087653]/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#07845b]/20"
              >
                Send Message
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </button>

              <p className="text-center text-xs leading-6 text-[#9aa69d]">
                This is a frontend demo. Messages are not sent or stored.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
