import "./index.css";

export default function Hero() {
  return (
    <section className="hero" id="hero" data-aos="fade-up">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            Enterprise Learning Platform
          </span>

          <h1>
            Transform Your Workforce
            <span> With Future-Ready Skills</span>
          </h1>

          <p>
            Empower your employees with industry-leading programs,
            expert mentors, and measurable business outcomes.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Programs
            </button>

            <button className="secondary-btn">
              Book Demo
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="/images/hero/hero.png"
            alt="Enterprise Learning"
          />

        </div>

      </div>
    </section>
  );
}