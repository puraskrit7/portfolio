import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import './ContactModal.css';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';

function ContactModal({ isOpen, onClose }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
    setSent(true);
    form.current.reset();
    setTimeout(() => setSent(false), 3000);
    // emailjs.sendForm(
    //   process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //   form.current,
    //   {
    //     publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    //   }
    // ).then(() => {
    //   setLoading(false);
    //   setSent(true);
    //   form.current.reset();
    //   setTimeout(() => setSent(false), 3000); // Auto-hide success after 3s
    // }, (error) => {
    //   setLoading(false);
    //   alert('Failed to send message. Try again later.');
    //   console.error('EmailJS Error:', error.text);
    // });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}><FaTimes /></button>
        <h2>Let's Connect</h2>
        <p className="modal-note">Feel free to reach out for collaboration or just to say hi!</p>

        {sent ? (
          <div className="success-message">
            <FaCheckCircle className="success-icon" />
            <p>Message sent successfully!</p>
          </div>
        ) : (
          <form className="modal-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea rows="5" name="message" placeholder="Your Message" required />
            <button type="submit" disabled={loading}>
              {loading ? <span className="loader"></span> : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
