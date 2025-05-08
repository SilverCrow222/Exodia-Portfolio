import React, { useRef } from "react";

function Contact() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    formRef.current.reset();
  };

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title fade-in">Get In Touch</h2>
      <div className="contact-container">
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group fade-in">
            <input
              type="text"
              className="form-input"
              id="name"
              placeholder=" "
              required
            />
            <label htmlFor="name" className="form-label">
              Name
            </label>
          </div>
          <div className="form-group fade-in">
            <input
              type="email"
              className="form-input"
              id="email"
              placeholder=" "
              required
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
          <div className="form-group fade-in">
            <input
              type="text"
              className="form-input"
              id="subject"
              placeholder=" "
              required
            />
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
          </div>
          <div className="form-group fade-in">
            <textarea
              className="form-input"
              id="message"
              placeholder=" "
              required
            ></textarea>
            <label htmlFor="message" className="form-label">
              Message
            </label>
          </div>
          <button type="submit" className="btn-submit fade-in">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
