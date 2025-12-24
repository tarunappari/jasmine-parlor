"use client";
import React from "react";
import styles from "@/styles/landingpage/TestimonialSection.module.scss";
import Lottie from "lottie-react";

import fly3 from "@/public/lottie/fly2.json";

const TestimonialSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>What Our Clients Say</h2>
        <p>Hear from our happy customers about their experience</p>
      </div>
      <div className={styles.rating}>
        <div className={styles.leftContainer}>
          <h2>
            🌟🌟🌟🌟🌟 <span>5.0</span>{" "}
          </h2>
          <p>We are trusted by 1000+ family</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.rightContainer}>
          <div>
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>
          <span></span>
          <div>
            <h3>5+✨</h3>
            <p>Rating</p>
          </div>
          <span></span>
          <div>
            <h3>100%</h3>
            <p>Hygiene</p>
          </div>
        </div>
      </div>

      <div className={styles.lottie2}>
        <Lottie animationData={fly3} loop autoplay />
      </div>
      
    </div>
  );
};

export default TestimonialSection;
