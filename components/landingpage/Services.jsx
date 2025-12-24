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

  return (
    <section className={styles.container} id="services">
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.pill}>
            <IconSparkles size={16} stroke={2} />
            Our Services
            <Image src={fly} alt="fly" width={80} />
          </span>
          <h2>
            Tailored Beauty Solutions
            <div className={styles.lotie}>
              <Lottie animationData={fly2} loop autoplay />
            </div>
          </h2>
          <p>
            Discover our range of professional beauty services designed to
            enhance your natural beauty
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <ServiceGrid services={services} />
        </div>
      </div>
    </section>
  );
};

export default Services;
