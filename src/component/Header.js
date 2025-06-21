import React, { useState, useEffect } from "react";
import "./Header.css";
import ContactModal from "./ContactModal";

function Header() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const openModal = () => {
    setShowModal(true);
    setOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModal || open ? "hidden" : "auto";
  }, [showModal, open]);

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <img
              src={`${process.env.PUBLIC_URL}/logo.webp`}
              alt="Profile"
              style={{ width: "32px", height: "32px", borderRadius: "50%" }}
            />
            <div>
              <div className="name">Puraskrit</div>
              <div className="title">Developer</div>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </nav>

          <button className="say-hello-btn" onClick={openModal}>
            Say Hello
          </button>

          <div
            className={`hamburger ${open ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`mobile-menu ${open ? "show" : ""}`}>
          <div className="close-drawer" onClick={toggleMenu}>
            ×
          </div>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <button className="say-hello-btn-mobile" onClick={openModal}>
            Say Hello
          </button>
        </div>

        {open && <div className="mobile-backdrop" onClick={toggleMenu}></div>}
      </header>

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Header;
