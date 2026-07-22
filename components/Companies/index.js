import "./index.css";
import companies from "../../data/companies";

export default function Companies() {
  return (
    <section className="companies-section" data-aos="fade-up">
      <div className="container">

        <h2 className="section-title">
          Trusted by Leading Companies
        </h2>

        <p className="section-description">
          Organizations across industries trust our enterprise learning solutions.
        </p>

        <div className="companies-grid">
          {companies.map(company => (
            <div className="company-card" key={company.id}>
              <img
                src={company.logo}
                alt={company.name}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}