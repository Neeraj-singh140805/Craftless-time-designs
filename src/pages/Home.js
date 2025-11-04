import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css"; // keep your animations + styles here

function Home() {
  const testimonials = [
    {
      text: "Amazing designer! Our website has never looked better.",
      client: "Client A",
      img: "image12.png",
    },
    {
      text: "Professional, creative, and reliable. Highly recommended.",
      client: "Client B",
      img: "image13.png",
    },
    {
      text: "Delivered on time with exceptional quality!",
      client: "Client C",
      img: "image15 copy.png",
    },
    {
      text: "A true visionary. Brought our brand to life beautifully.",
      client: "Client D",
      img: "image16 copy.png",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="color hero-heading">Crafting Timeless Designs</h1>
          <p>
            I create visually stunning, user-friendly designs that elevate your brand and engage your audience.
          </p>
          <Link to="/contact" className="btn hero-btn">Get in Touch</Link>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="image.png" alt="Design Hero" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>What I Do</h2>
        <div className="service-cards">
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Web Design</h3>
            <p>Build modern and responsive websites that stand out.</p>
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>UI/UX</h3>
            <p>Design smooth and intuitive user interfaces for better experience.</p>
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Branding</h3>
            <p>Create memorable brand identities that leave a lasting impression.</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {[2, 3, 4].map((num) => (
            <motion.div
              key={num}
              className="project-card"
              whileHover={{ scale: 1.05 }}
            >
              <img src={`image${num}.png`} alt={`Project ${num}`} />
              <h3>Project {num}</h3>
              <p>Category</p>
            </motion.div>
          ))}
        </div>
        <div className="center-btn">
          <Link to="/projects" className="btn">View All Projects</Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>About Me</h2>
          <p>
            I am a passionate designer creating visually stunning and user-friendly designs across web design, UI/UX, branding, and illustration.
          </p>
          <Link to="/contact" className="btn">Contact Me</Link>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="image11.png" alt="Designer" />
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Clients Say</h2>
        <div className="testimonial-slider">
          <button className="arrow left" onClick={prevTestimonial}>‹</button>

          <AnimatePresence custom={1}>
            <motion.div
              key={index}
              className="testimonial"
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <p>"{testimonials[index].text}"</p>
              <h4>- {testimonials[index].client}</h4>
              <img
                src={testimonials[index].img}
                alt={testimonials[index].client}
                className="testimonial-img"
              />
            </motion.div>
          </AnimatePresence>

          <button className="arrow right" onClick={nextTestimonial}>›</button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to start your project?
        </motion.h2>
        <Link to="/contact" className="btn cta-btn">Let's Talk</Link>
      </section>
    </div>
  );
}

export default Home;
