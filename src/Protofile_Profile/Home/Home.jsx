import { useState } from "react";
import "./Home.scss";
import profile from "./nivi.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();
   const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio showcasing skills and projects.",
      tech: "React.js, SCSS, CSS"
    },
    {
      title: "Smart Inventory and Stock Management System",
      desc: "Developed a system to manage and track product inventory efficiently.",
      tech: "HTML, CSS, Java, Spring Boot, MySQL"
    },
    {
      title: "Job Portal",
      desc: "Full stack job portal with login and job apply system.",
      tech: "HTML, CSS, Java, Servlets, JDBC, MySQL"
    },
    {
      title: "Signup/Login",
      desc: "Authentication system using Servlets and JDBC.",
      tech: "HTML, CSS, Java, MySQL"
    },
    {
      title: "Frontend Projects",
      desc: "10+ UI projects using HTML, CSS, JS.",
      tech: "HTML, CSS, JavaScript"
    },
    {
      title: "CRUD App",
      desc: "Create, Read, Update, Delete operations.",
      tech: "Java, JDBC, MySQL"
    },
    {
      title: "Responsive UI",
      desc: "Mobile-friendly UI designs.",
      tech: "HTML, CSS, Sass"
    }
  ];
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
    <div className="home">
      <h1 className="C">ℂ𝕆𝔻𝔼 𝔹𝕌𝕀𝕃𝔻𝔼ℝ </h1>

      <section className="hero"id="this">
        <div className="left">
          <img src={profile} alt="profile" />
        </div>
        <div className="right">
          <h1>Hi, I'm Nitheesh 👋</h1>
          <h3>Java Full Stack Developer</h3>
          <p>
            Passionate developer skilled in Front-end, Backend and Database .
          </p>
        </div>
        <div className="but">
          <button className="butt" onClick={() => navigate("/Projects")}>Projects</button>
          <button className="butt" onClick={() => navigate("/Contact")}>Contact</button>

        </div>
      </section>
      <div className="sec">
      <section id="about" className="about">
        <div className="container">

          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <div className="about-text">
              

              <p>
                I am Nitheesh A, a motivated Java Full Stack Developer with a strong foundation in both front-end and back-end development. I specialize in designing and developing scalable web applications using Java, Spring Boot, React, and modern web technologies.
              </p>

        
              <h3 className="he">Internships</h3>

              <div className="internship">
                <h4>Python Full Stack Developer Intern – DEV Technology Solutions</h4>
                <p>
                  Completed a 15-day internship focused on full stack development, working with HTML, CSS, JavaScript, Java, and database integration to build dynamic web applications.
                </p>
              </div>

              <h3>Certifications</h3>

              <ul className="certifications">
                <li>Python Full Stack Development - DEV Technology Solutions</li>
                <li>SQL and Relational Database - IBM </li>
                <li>Introduction to Cloud Computing – Infosys</li>
                <li>Data Analysis with Python - IBM</li>
                <li>Introduction to Cyber Security - Infosys</li>
              </ul>


              <div className="skills">
                <h3>Technical Skills</h3>
                <ul>
                  <li>Java</li>
                  <li>Spring Boot</li>
                  <li>Servlets</li>
                  <li>Hibernate</li>
                  <li>JDBC</li>
                  <li>React.js</li>
                  <li>HTML5</li>
                  <li>CSS3, Sass, Less</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Bootstrap</li>
                  <li>REST APIs</li>
                  <li>MySQL</li>
                  <li>Git & GitHub</li>
                </ul>

                <h3>DSA & Problem Solving</h3>
                <ul>
                  <li>Data Structures & Algorithms</li>
                  <li>Arrays</li>
                  <li>Strings</li>
                  <li>Linked List</li>
                  <li>Stack & Queue</li>
                  <li>Searching & Sorting</li>
                  <li>Recursion</li>
                  <li>Time & Space Complexity (Big-O)</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>
    
    </div>
     <div className="thr">
          <section className="projects">
      <h2 className="title">My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span>Tech: {project.tech}</span>
          </div>
        ))}
      </div>
    </section>
     </div>
     <div className="fou">
          
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
     </div>

    </div>
    
  );
};

export default Home;