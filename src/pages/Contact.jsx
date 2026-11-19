import { useState } from "react";
import { Mail, Send, CheckCircle2, User, MessageSquare } from "lucide-react";
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

  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="LET'S CONNECT"
        title="We would love to hear from you."
        description="Have a question, an idea, or simply want to connect? Send us a message."
      />

      <section className="section contact-section">
        <div className="contact-info">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Every great connection starts with a conversation.</h2>
          <p>
            Whether you want to explore opportunities or learn more
            about YSSE, feel free to reach out.
          </p>

          <div className="contact-info-item">
            <span><Mail size={21} /></span>
            <div>
              <strong>Official Website</strong>
              <a
                href="https://ysseglobal.org/"
                target="_blank"
                rel="noreferrer"
              >
                ysseglobal.org
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <span><MessageSquare size={21} /></span>
            <div>
              <strong>Stay Connected</strong>
              <p>Follow YSSE through its official channels.</p>
            </div>
          </div>

          <div className="contact-decoration">✳</div>
        </div>

        <div className="contact-form-wrapper">
          {submitted && (
            <div className="form-success" role="status">
              <CheckCircle2 size={23} />
              <div>
                <strong>Thank you for reaching out!</strong>
                <p>
                  Your form has been validated successfully.
                  This demo does not send or store messages.
                </p>
              </div>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-heading">
              <span className="eyebrow">SEND A MESSAGE</span>
              <h3>Let's talk.</h3>
            </div>

            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <small className="field-error">{errors.name}</small>}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <small className="field-error">{errors.email}</small>}
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject && <small className="field-error">{errors.subject}</small>}
            </div>

            <div className="form-field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <small className="field-error">{errors.message}</small>}
            </div>

            <button type="submit" className="button button-primary form-submit">
              Send Message <Send size={17} />
            </button>

          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
