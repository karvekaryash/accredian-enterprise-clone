"use client";

import { useEffect, useState } from "react";
import "./index.css";
import Slider from "react-slick";
import AOS from "aos";

import {
  FaStar,
  FaQuoteRight
} from "react-icons/fa";

export default function Testimonials() {

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchTestimonials = async () => {

      try {

        const response = await fetch("/api/testimonials");

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();

        

        setTestimonials(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

        setTimeout(() => {
          AOS.refresh();
        }, 100);

      }

    };

    fetchTestimonials();

  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            Loading Testimonials...
          </h2>
        </div>
      </section>
    );
  }

  return (

    <section
      className="testimonials-section"
      id="testimonials"
    >

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Testimonials
          </span>

          <h2 className="section-title">
            What Our Learners Say
          </h2>

          <p className="section-description">
            Trusted by professionals and organizations across industries.
          </p>

        </div>

        {testimonials.length > 0 && (

          <Slider {...settings}>

            {testimonials.map((item) => (

              <div key={item.id}>

                <div className="testimonial-card">

                  <div className="quote-icon">
                    <FaQuoteRight />
                  </div>

                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>

                  <p className="review">
                    "{item.review}"
                  </p>

                  <div className="user">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="user-info">

                      <h4>{item.name}</h4>

                      <span>{item.designation}</span>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </Slider>

        )}

      </div>

    </section>

  );

}