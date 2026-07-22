import "./index.css";
import {
  FaUserGraduate,
  FaBriefcase,
  FaGlobe,
  FaBookOpen,
  FaHeadset,
  FaBolt,
} from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaUserGraduate />,
    title: "Expert Mentors",
    description:
      "Learn from experienced professionals and industry leaders.",
  },
  {
    id: 2,
    icon: <FaBookOpen />,
    title: "Industry Curriculum",
    description:
      "Updated learning content aligned with current market demands.",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    title: "Placement Support",
    description:
      "Career guidance and hiring assistance for learners.",
  },
  {
    id: 4,
    icon: <FaGlobe />,
    title: "Global Certifications",
    description:
      "Earn certifications recognized by leading organizations.",
  },
  {
    id: 5,
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "Continuous learning assistance whenever you need help.",
  },
  {
    id: 6,
    icon: <FaBolt />,
    title: "Flexible Learning",
    description:
      "Learn anytime with self-paced and instructor-led programs.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section" id="benefits" data-aos="fade-left">
      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Why Choose Us
          </span>

          <h2 className="section-title">
            Why Organizations Trust Accredian
          </h2>

          <p className="section-description">
            Empower your workforce through practical, industry-focused
            learning experiences.
          </p>

        </div>

        <div className="benefits-grid">

          {benefits.map((item) => (
            <div className="benefit-card" key={item.id}>

              <div className="benefit-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}