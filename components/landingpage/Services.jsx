"use client";
import React from "react";
import styles from "@/styles/landingpage/Services.module.scss";
import { IconSparkles } from "@tabler/icons-react";
import { ServiceGrid } from "../ui/service-grid";
import spa from "@/public/assets/services/spa.webp";
import man from "@/public/assets/services/man.webp";
import ped from "@/public/assets/services/ped.webp";
import facial from "@/public/assets/services/facial.webp";
import bride from "@/public/assets/services/bride.webp";
import hair from "@/public/assets/services/hair.webp";
import mar from "@/public/assets/services/mar.webp";
import party from "@/public/assets/services/party.webp";
import fly from "@/public/assets/decors/fly.webp";
import Image from "next/image";
import fly2 from "@/public/lottie/fly3.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      name: "Bridal Makeup",
      imageUrl: bride,
      href: "#",
    },
    {
      name: "Facials & Cleanups",
      imageUrl: facial,
      href: "#",
    },
    {
      name: "Party Makeup",
      imageUrl: party,
      href: "#",
    },
    {
      name: "Manicure",
      imageUrl: man,
      href: "#",
    },
    {
      name: "Pedicure",
      imageUrl: ped,
      href: "#",
    },
    {
      name: "Bridal Packages",
      imageUrl: mar,
      href: "#",
    },
    {
      name: "Spa Treatments",
      imageUrl: spa,
      href: "#",
    },
    {
      name: "Hair Styling",
      imageUrl: hair,
      href: "#",
    },
  ];

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
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      className={styles.container}
      id="services"
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <motion.span variants={itemVariants} className={styles.pill}>
            <IconSparkles size={16} stroke={2} />
            Our Services
            <Image src={fly} alt="fly" width={80} />
          </motion.span>
          <motion.h2 variants={itemVariants}>
            Tailored Beauty Solutions
            <div className={styles.lotie}>
              <Lottie animationData={fly2} loop autoplay />
            </div>
          </motion.h2>
          <motion.p variants={itemVariants}>
            Discover our range of professional beauty services designed to
            enhance your natural beauty
          </motion.p>
        </div>

        <div className={styles.servicesGrid}>
          <ServiceGrid services={services} />
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
