import { useState } from "react";
import "./Home.scss";
import nivi from "./nivi.jpeg";

const Home = () => {
  const [imgErr, setImgErr] = useState(false);
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <div className="home-section">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="pulse-dot"></span>Available for opportunities
        </div>
        <h1>Crafting Digital<br/>Experiences as<br/><span className="name-highlight">Nitheesh A</span></h1>
        <p className="hero-role">Java Full Stack Developer</p>
        <p className="hero-desc">Building scalable web applications with React, Spring Boot and modern technologies. Focused on clean code, thoughtful UI and impactful user experiences.</p>
        <div className="hero-btns">
          <button className="btn-dark" onClick={() => scrollTo("#projects")}>
            View Projects <i className="ti ti-arrow-right" aria-hidden="true"></i>
          </button>
          <button className="btn-outline" onClick={() => scrollTo("#contact")}>Get In Touch</button>
        </div>
        <div className="hero-stats">
          {[{num:"7+",lbl:"Projects"},{num:"2+",lbl:"Internships"},{num:"5+",lbl:"Certifications"},{num:"13+",lbl:"Technologies"}].map(s => (
            <div className="h-stat" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-right">
        <div className="profile-ring">
          {!imgErr
            ? <img className="profile-img" src={nivi} alt="Nitheesh A" onError={() => setImgErr(true)} />
            : <div className="avatar-fallback">NA</div>}
        </div>
      </div>
      <div className="scroll-cue">
        <div className="scroll-line"></div>scroll
      </div>
    </div>
  );
};
export default Home;
