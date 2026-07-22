import "./index.css";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div>

          <h2 className="footer-logo">
            Accredian
          </h2>

          <p>
            Empowering organizations with future-ready learning
            solutions and enterprise training.
          </p>

        </div>

        <div>

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#hero">Home</a></li>

            <li><a href="#programs">Programs</a></li>

            <li><a href="#benefits">Benefits</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>

        <div>

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#"><FaFacebook /></a>

            <a href="#"><FaLinkedin /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaGithub /></a>

          </div>

        </div>

      </div>

      <div className="copyright">

        © 2026 Accredian Enterprise. All Rights Reserved.

      </div>

    </footer>
  );
}