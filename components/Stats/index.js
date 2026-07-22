"use client";

import { useEffect, useState } from "react";
import "./index.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";

export default function Stats() {
  const [stats, setStats] = useState([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats");
        const data = await response.json();

        setStats(data);

        setTimeout(() => {
          AOS.refresh();
        }, 100);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  if (stats.length === 0) {
    return (
      <section className="stats-section">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Loading Stats...</h2>
        </div>
      </section>
    );
  }

  return (
    <section
      className="stats-section"
      ref={ref}
      data-aos="zoom-in"
    >
      <div className="container">

        <div className="stats-grid">

          {stats.map((item) => (

            <div
              className="stat-card"
              key={item.id}
            >

              <h2>

                {inView ? (
                  <>
                    <CountUp
                      end={item.number}
                      duration={2}
                    />
                    {item.suffix}
                  </>
                ) : (
                  <>
                    0{item.suffix}
                  </>
                )}

              </h2>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}