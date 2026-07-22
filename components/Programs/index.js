"use client";
import AOS from "aos";
import { useEffect, useState } from "react";
import "./index.css";
import { FaArrowRight } from "react-icons/fa";

import {
  FaLaptopCode,
  FaCloud,
  FaChartLine,
  FaShieldAlt,
  FaRobot,
  FaUsers,
} from "react-icons/fa";

const iconMap = {
  laptop: FaLaptopCode,
  cloud: FaCloud,
  chart: FaChartLine,
  shield: FaShieldAlt,
  robot: FaRobot,
  users: FaUsers,
};

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
        try {
          const response = await fetch("/api/programs");
          const data = await response.json();
      
          setPrograms(data);
      
          setTimeout(() => {
            AOS.refresh();
          }, 100);
      
        } catch (error) {
          console.error("Error fetching programs:", error);
        }
      };

    fetchPrograms();
  }, []);

  if (programs.length === 0) {
    return (
      <section className="programs-section" data-aos="fade-right">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            Loading Programs...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section
      className="programs-section"
      id="programs"
      
    >
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Our Programs
          </span>

          <h2 className="section-title">
            Enterprise Learning Programs
          </h2>

          <p className="section-description">
            Industry-focused learning paths designed to help organizations
            build future-ready teams and accelerate business growth.
          </p>
        </div>

        <div className="programs-grid">

          {programs.map((program) => {

const Icon = FaLaptopCode;
            console.log(program.icon);

            return (
              <div
                className="program-card"
                key={program.id}
                data-aos="zoom-in"
              >

                <div className="program-icon">
                  <Icon />
                </div>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <div className="learn-more">
                  <span>Learn More</span>
                  <FaArrowRight className="arrow" />
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}