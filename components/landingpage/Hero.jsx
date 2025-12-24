"use client";
import React from "react";
import dynamic from "next/dynamic";
const ModelScene = dynamic(() => import("@/components/3dmodels/ModelScene"), {
  ssr: false,
});
import styles from "@/styles/landingpage/Hero.module.scss";
import { IconPhone } from "@tabler/icons-react";
import hero2Img from "@/public/assets/hero5.webp";
import hero3Img from "@/public/assets/hero6.webp";
import fly from "@/public/assets/decors/fly.webp";
import fly2 from "@/public/assets/decors/fly2.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
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
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.content}>
        <div className={styles.modelContainer}>
          <ModelScene />
        </div>
        <motion.div variants={itemVariants} className={styles.pill}>
          We can help you✨
        </motion.div>
        <div>
          <motion.h1 variants={itemVariants}>
            Enhancing Your Natural <Image src={fly} alt="fly" width={100} />{" "}
          </motion.h1>
          <motion.h1 variants={itemVariants}>Beauty with </motion.h1>
          <motion.h1 variants={itemVariants}> Care & Elegance </motion.h1>
        </div>
        <motion.p variants={itemVariants}>
          We specialize in bridal makeup, skincare, hair styling, and
          personalized beauty services designed to make every woman feel
          confident and beautiful.
          <Image src={fly2} alt="fly" width={70} />
        </motion.p>
        <div className={styles.btnDiv}>
          <motion.button variants={itemVariants}>
            <IconPhone stroke={1.5} /> contact
          </motion.button>
          <motion.div variants={itemVariants}></motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        }}
        className={styles.imgMainContainer}
      >
        <div className={styles.imgContainer}>
          <Image src={hero2Img} alt="hero" className={styles.rightImg} />
        </div>
        <div className={styles.imgContainer}>
          <Image src={hero3Img} alt="m" className={styles.leftImg} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
