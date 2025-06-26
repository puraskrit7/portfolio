import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="mailto:puraskrit7@gmail.com"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
          <span>puraskritsinha3@gmail.com</span>
        </a>

        <a
          href="https://github.com/puraskrit7"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/puraskrit7"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://drive.google.com/uc?export=download&id=1tggtQEz1kOgc2PhWQJFRgsKHZYtNxfSR"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload />
          <span>Resume</span>
        </a>
      </div>

      <p className="footer-credit">
        © {new Date().getFullYear()} Puraskrit. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
