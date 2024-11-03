// src/pages/Home.js
import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Tascul</h1>
        <p>
          We always provide Best Service At Tascul, we are a trusted Web
          Development company, combining deep technical expertise and industry
          experience to help our clients stay ahead of the curve and solve
          challenges before they arise. Our web solutions provide a unique
          competitive advantage by empowering businesses to elevate their
          digital presence and achieve success online.
        </p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <h2>Why Choose Tascul?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>MSME Certified</h3>
            <p>
              We are recognized by the MSME for our commitment to excellence in
              service.
            </p>
          </div>
          <div className="feature-card">
            <h3>Experienced Team</h3>
            <p>
              Our team consists of skilled professionals with years of
              experience in web development.
            </p>
          </div>
          <div className="feature-card">
            <h3>Client Satisfaction</h3>
            <p>
              We prioritize our clients' needs and ensure their satisfaction
              with our services.
            </p>
          </div>
          <div className="feature-card">
            <h3>Proven Track Record</h3>
            <p>
              We have successfully delivered numerous projects across various
              industries.
            </p>
          </div>
          <div className="feature-card">
            <h3>Transparent Communication</h3>
            <p>
              We maintain open lines of communication with our clients
              throughout the project lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        {[
          {
            question: "What services do you offer?",
            answer:
              "We provide web and mobile app development, UI/UX design, and custom software solutions tailored to EdTech needs.",
          },
          {
            question: "What is your pricing structure?",
            answer:
              "Our pricing depends on the project scope, complexity, and timeline. Contact us for a detailed quote.",
          },
          {
            question: "Do you provide maintenance after project completion?",
            answer:
              "Yes, we offer post-launch support and maintenance packages to ensure your platform performs optimally.",
          },
          {
            question: "How long does it take to complete a project?",
            answer:
              "Project timelines vary based on requirements. Smaller projects may take 2-4 weeks, while complex apps may take months.",
          },
          {
            question: "Do you offer custom designs?",
            answer:
              "Yes, we provide custom UI/UX designs tailored to your brand and user experience goals.",
          },
          {
            question: "What technology do you use for development?",
            answer:
              "We use modern technologies like React, Node.js, Python, and cloud services like AWS and Firebase.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${openFaq === index ? "open" : ""}`}
          >
            <h3 onClick={() => toggleFaq(index)} className="faq-question">
              {faq.question}
            </h3>
            <p className={`faq-answer ${openFaq === index ? "show" : ""}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
