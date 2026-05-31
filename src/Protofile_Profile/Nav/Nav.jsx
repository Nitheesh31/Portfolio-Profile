import { useState, useEffect } from "react";
import "./Nav.scss";

const LINKS = [
  { label:"Home", href:"#home" },
  { label:"About", href:"#about" },
  { label:"Projects", href:"#projects" },
  { label:"Contact", href:"#contact", cta:true },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = ["home","about","projects","contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 100) { setActive("#"+ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior:"smooth" });
    setActive(href); setOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled?" scrolled":""}`}>
        <div className="logo" onClick={(e) => handleClick(e,"#home")}>My Profile</div>
        <div className="nav-links">
          {LINKS.map(l => (
            <a key={l.href} href={l.href}
               className={`${l.cta?"nav-cta":""}${active===l.href?" active":""}`}
               onClick={(e) => handleClick(e, l.href)}>{l.label}</a>
          ))}
        </div>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span/><span/><span/>
        </div>
      </nav>
      <div className={`sidebar${open?" open":""}`}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href}
             className={active===l.href?"active":""}
             onClick={(e) => handleClick(e, l.href)}>{l.label}</a>
        ))}
      </div>
      {open && <div className="overlay" onClick={() => setOpen(false)}/>}
    </>
  );
};
export default Nav;
