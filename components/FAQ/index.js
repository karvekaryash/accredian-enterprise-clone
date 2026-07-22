"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faqData from "../../data/faq";
import "./index.css";

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq" data-aos="fade-up">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">FAQ</span>

          <h2 className="section-title">
            Frequently Asked Questions
          </h2>

          <p className="section-description">
            Find answers to the most common questions about our enterprise learning programs.
          </p>
        </div>

        <div className="faq-container">

          {faqData.map((item) => (

            <div
              key={item.id}
              className={`faq-item ${
                activeId === item.id ? "active" : ""
              }`}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
              >
                <h3>{item.question}</h3>

                <span className="icon">
                  {activeId === item.id ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </span>
              </button>

              <div
                className={`faq-answer ${
                  activeId === item.id ? "show" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}