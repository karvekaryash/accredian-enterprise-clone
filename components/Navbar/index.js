"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "programs", label: "Programs" },
  { id: "benefits", label: "Benefits" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <div className="logo">
          Accredian
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          {navLinks.map(link => (

            <li key={link.id}>

              <a
                href={`#${link.id}`}
                className={
                  activeSection === link.id ? "active-link" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>

            </li>

          ))}

        </ul>

        <button className="talk-btn">
          Talk to Expert
        </button>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}