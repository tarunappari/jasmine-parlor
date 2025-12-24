"use client";
import React from "react";
import styles from "@/styles/landingpage/Contact.module.scss";
import {
  IconMapPin,
  IconPhone,
  IconClock,
  IconBrandWhatsapp,
  IconSparkles,
  IconMail,
} from "@tabler/icons-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <IconMapPin size={24} stroke={1.5} />,
      title: "Location",
      details: [
        "Main Road, Ravulapalem",
        "East Godavari, Andhra Pradesh",
        "India - 533238",
      ],
    },
    {
      icon: <IconPhone size={24} stroke={1.5} />,
      title: "Phone",
      details: ["+91 98765 43210"],
      link: "tel:+919876543210",
    },
    {
      icon: <IconMail size={24} stroke={1.5} />,
      title: "Phone",
      details: ["+91 98765 43210"],
      link: "tel:+919876543210",
    },
  ];

  return (
    <section className={styles.container} id="contact">
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.pill}>
            <IconSparkles size={16} stroke={2} />
            Contact Us
          </span>
          <h2>Book Your Appointment</h2>
          <p>We'd love to hear from you. Reach out to us anytime!</p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          {/* Left Side - Contact Info */}
          <div className={styles.infoSection}>
            <div className={styles.brandCard}>
              <div className={styles.brandHeader}>
                <h3>Jasmine Beauty Parlor</h3>
              </div>

              <div className={styles.contactCards}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.infoCard}>
                    <div className={styles.iconBox}>{info.icon}</div>
                    <div className={styles.infoText}>
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <a href="tel:+919876543210" className={styles.callButton}>
                  <IconPhone size={20} stroke={2} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                >
                  <IconBrandWhatsapp size={20} stroke={2} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className={styles.mapSection}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283.234567890123!2d81.8!3d16.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzAwLjAiTiA4McKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jasmine Beauty Parlor Location"
              ></iframe>
              <div className={styles.mapOverlay}>
                <a
                  href="https://maps.google.com/?q=Ravulapalem,Andhra+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsButton}
                >
                  <IconMapPin size={18} stroke={2} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
