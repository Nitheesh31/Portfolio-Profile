import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    console.log(form);
  };

  return (
    
    <section className="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">


        <div className="contact-info">
          <h3>Get in Touch</h3>

          <table>
            <tbody>
              <tr>
                <td><b>Email</b></td>
                <td>: nitheeshgeethun@gmail.com</td>
              </tr>

              <tr>
                <td><b>Phone</b></td>
                <td>: +91 93445 86748</td>
              </tr>

              <tr>
                <td><b>Location</b></td>
                <td>: Bangalore, India</td>
              </tr>

              <tr>
                <td><b>GitHub</b></td>
                <td>
                  : <a
                      href="https://github.com/Nitheesh31"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/Nitheesh31
                    </a>
                </td>
              </tr>

              <tr>
                <td><b>LinkedIn</b></td>
                <td>
                  : <a
                      href="https://www.linkedin.com/in/nitheesh3125"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/nitheesh3125
                    </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;