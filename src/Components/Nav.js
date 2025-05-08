import React, { useEffect, useRef, useState } from "react";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth scrolling for internal anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  function handdleToggle() {
    setIsActive((prev) => !prev);
  }
  function handleClose() {
    setIsActive(false);
  }
  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <a href="#about" className="logo">
        Dev<span>Folio</span> <div className="logo-circle"></div>
      </a>
      <ul className={`nav-links ${isActive ? "active" : ""}`}>
        <li>
          <a href="#hero" onClick={handleClose}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleClose}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleClose}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleClose}>
            Contact
          </a>
        </li>
      </ul>
      <div
        className={`nav-list ${isActive ? "active" : ""}`}
        onClick={handdleToggle}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Nav;
