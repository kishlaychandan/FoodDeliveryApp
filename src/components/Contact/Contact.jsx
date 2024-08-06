import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import style from './Contact.module.css';
import Navbar from '../Navbar/Navbar';
import ChatBots from '../ChatBot/ChatBots';
import Footer from '../Footer/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid.';
    if (!formData.message) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      emailjs.send('service_pgmg1eq', 'template_omf4iyo', formData, 'Mx0ztLcbtCPg3GFi2')
        .then(() => {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setLoading(false);
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          setLoading(false);
        });
    }
  };

  return (
    <>
    <Navbar />
    <div className={style.contactContainer}>
      <img src="https://t3.ftcdn.net/jpg/02/57/23/14/240_F_257231440_vnlweMj57SRGMgjWk3NQ7FMtJ3Z57jGs.jpg" alt="" />
      {/* <img src="https://wallpapers.com/images/thumbnail/juice-with-orange-flavor-5367mxgeo3562rwu.webp" alt="" /> */}
      <h1>CONTACT US</h1>
      <form onSubmit={handleSubmit} className={style.contactForm}>
        {submitted && <p className={style.successMessage}>Thank you for your message!</p>}
        {loading && <p className={style.loadingMessage}>Sending...</p>}
        <div className={style.formGroup}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={style.formControl}
          />
          {errors.name && <span className={style.error}>{errors.name}</span>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={style.formControl}
          />
          {errors.email && <span className={style.error}>{errors.email}</span>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={style.formControl}
          />
          {errors.message && <span className={style.error}>{errors.message}</span>}
        </div>
        <button type="submit" className={style.submitButton}>Send Message</button>
      </form>
    </div>
    <ChatBots />
    <Footer />
    </>
  );
};

export default Contact;
