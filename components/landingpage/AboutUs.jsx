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
import { motion } from "framer-motion";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      id="about"
    >
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
          <motion.span variants={itemVariants} className={styles.pill}>
            <IconSparkles size={16} stroke={2} />
            About Us
          </motion.span>
          <motion.h2 variants={itemVariants}>
            Where Beauty Meets Confidence{" "}
            <div className={styles.lottie2}>
              <Lottie animationData={fly3} loop autoplay />
            </div>
          </motion.h2>
        </div>

        <div className={styles.description}>
          <motion.p variants={itemVariants}>
            At <strong>Jasmine Beauty Parlor</strong>, beauty is not just about
            looks — it's about confidence.
          </motion.p>
          <motion.p variants={itemVariants}>
            We are a newly established beauty parlor in{" "}
            <strong>Ravulapalem</strong>, committed to offering hygienic,
            professional, and affordable beauty services using quality products
            and modern techniques.
          </motion.p>
          <motion.p variants={itemVariants}>
            Whether it's your wedding, a special occasion, or regular self-care,
            our goal is to give you a relaxing experience and stunning results
            every time.
          </motion.p>
          <div className={styles.lottie}>
            <Lottie animationData={butterflyAnimation2} loop autoplay />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
