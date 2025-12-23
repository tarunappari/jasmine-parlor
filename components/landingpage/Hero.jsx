"use client";
import React from "react";
import dynamic from "next/dynamic";
const ModelScene = dynamic(() => import("@/components/3dmodels/ModelScene"), {
  ssr: false,
});
import styles from "@/styles/landingpage/Hero.module.scss";
import { IconGenderFemale, IconPhone } from "@tabler/icons-react";
import heroImg from "@/public/assets/hero.png";
import hero2Img from "@/public/assets/hero5.png";
import hero3Img from "@/public/assets/hero6.png";
import fly from "@/public/assets/decors/fly.png";
import fly2 from "@/public/assets/decors/fly2.png";
import Image from "next/image";

const Hero = () => {

  return (
    <div className={`${styles.container} hero-section`}>
      <div className={styles.imgContainer}>
        <Image src={hero3Img} alt="m" className={styles.leftImg} />
      </div>
      <div className={styles.content}>
        <div className={styles.modelContainer}>
          <ModelScene />
        </div>
        <div>
          <h1>
            Enhancing Your Natural <Image src={fly} alt="fly" width={100} />{" "}
          </h1>
          <h1>Beauty with </h1>
          <h1>
            {" "}
            Care & Elegance{" "}
            <i>
              <IconGenderFemale stroke={1} color="#3e171b" />
            </i>
          </h1>
        </div>
        <p>
          We specialize in bridal makeup, skincare, hair styling, and
          personalized beauty services designed to make every woman feel
          confident and beautiful.
          <Image src={fly2} alt="fly" width={70} />
        </p>
        <div className={styles.btnDiv}>
          <button>
            <IconPhone stroke={1.5} /> contact
          </button>
          <div></div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={hero2Img} alt="hero" className={styles.rightImg} />
      </div>
    </div>
  );
};

export default Hero;
