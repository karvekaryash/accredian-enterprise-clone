import "./index.css";
import process from "../../data/process";
import {
  FaComments,
  FaClipboardList,
  FaChalkboardTeacher,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaComments />,
    title: "Talk to an Expert",
    description:
      "Discuss your organization’s learning goals and training requirements.",
  },
  {
    id: 2,
    icon: <FaClipboardList />,
    title: "Choose a Program",
    description:
      "Select a learning path tailored to your workforce and business needs.",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher />,
    title: "Train Your Team",
    description:
      "Deliver engaging instructor-led and self-paced learning experiences.",
  },
  {
    id: 4,
    icon: <FaChartLine />,
    title: "Track Success",
    description:
      "Measure learner progress with insights and performance analytics.",
  },
];

export default function Process() {
  return (
    <section className="process-section" id="process" data-aos="fade-up">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            How It Works
          </span>

          <h2 className="section-title">
            Simple Learning Process
          </h2>

          <p className="section-description">
            From consultation to measurable outcomes, we make enterprise
            learning easy and effective.
          </p>
        </div>

        <div className="process-grid">

          {steps.map(step => (
            <div className="process-card" key={step.id}>

              <div className="step-number">
                {step.id}
              </div>

              <div className="process-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}