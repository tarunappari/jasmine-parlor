"use client";
import React from "react";
import styles from "@/styles/landingpage/AboutUs.module.scss";
import img from "@/public/assets/about/about.jpg";
import img2 from "@/public/assets/about/about2.jpg";
import { IconSparkles } from "@tabler/icons-react";
import Image from "next/image";
import Lottie from "lottie-react";
import butterflyAnimation2 from "@/public/lottie/butterfly2.json";
import fly3 from "@/public/lottie/fly3.json";


const AboutUs = () => {

  return (
    <section className={styles.container} id="about">
      <div className={styles.imgContainer}>
        <div>
          <Image src={img} alt="img" className={styles.img1} />
        </div>
        <div>

          <Image src={img2} alt="img" className={styles.img2} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.pill}>
            <IconSparkles size={16} stroke={2} />
            About Us
          </span>
          <h2>
            Where Beauty Meets Confidence{" "}
            <div className={styles.lottie2}>
              <Lottie animationData={fly3} loop autoplay />
            </div>
          </h2>
        </div>

        <div className={styles.description}>
          <p>
            At <strong>Jasmine Beauty Parlor</strong>, beauty is not just about
            looks — it's about confidence.
          </p>
          <p>
            We are a newly established beauty parlor in{" "}
            <strong>Ravulapalem</strong>, committed to offering hygienic,
            professional, and affordable beauty services using quality products
            and modern techniques.
          </p>
          <p>
            Whether it's your wedding, a special occasion, or regular self-care,
            our goal is to give you a relaxing experience and stunning results
            every time.
          </p>
          <div className={styles.lottie}>
            <Lottie animationData={butterflyAnimation2} loop autoplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
