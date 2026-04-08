import React from 'react'
import './About.less'

const About = () => {
  
  return (
    <div>
      
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
  )
}

export default About