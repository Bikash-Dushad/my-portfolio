import { useState, useRef, forwardRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLinkedin } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = forwardRef((props, ref) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if (result.text === "OK") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/bikash-dushad/", "_blank");
  };

  return (
    <section ref={ref} className="contact">
      <h1 className="contact-title">
        Let's <span>Connect</span>
      </h1>

      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-left">
          <h3 className="left-title">
            Let's build something interesting together
          </h3>

          <div className="contact-info">
            {/* Email */}
            <div
              className="info-item"
              onClick={() =>
                (window.location.href = "mailto:bikashghll@gmail.com")
              }
            >
              <div className="info-icon">
                <MdEmail className="contact-icon" />
              </div>
              <div className="info-details">
                <span className="info-label">Email</span>
                <span className="info-value">bikashghll@gmail.com</span>
              </div>
            </div>

            {/* Phone */}
            <div
              className="info-item"
              onClick={() => (window.location.href = "tel:+9779811412148")}
            >
              <div className="info-icon">
                <FaPhone className="contact-icon" />
              </div>
              <div className="info-details">
                <span className="info-label">Phone</span>
                <span className="info-value">+977 9811412148</span>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="info-item" onClick={openLinkedIn}>
              <div className="info-icon">
                <FaLinkedin className="contact-icon" />
              </div>
              <div className="info-details">
                <span className="info-label">LinkedIn</span>
                <span className="info-value">Connect with me</span>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="contact-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send me a message</h3>

            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Message Input */}
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <span>
                  Send Message
                  <IoMdSend className="send-icon" />
                </span>
              )}
            </button>

            {/* status Message */}
            {submitStatus === "success" && (
              <div className="success-message">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="error-message">
                Failed to send message. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
