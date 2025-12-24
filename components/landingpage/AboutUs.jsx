"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/styles/landingpage/AboutUs.module.scss";
import img from "@/public/assets/about/about.jpg";
import img2 from "@/public/assets/about/about2.jpg";
import { IconSparkles, IconShield, IconHeart } from "@tabler/icons-react";
import Image from "next/image";
import Lottie from "lottie-react";
import butterflyAnimation from "@/public/lottie/Butterfly.json";
import butterflyAnimation2 from "@/public/lottie/butterfly2.json";
import gsap from "gsap";

const AboutUs = () => {
  const bottleRef = useRef(null);
  const butterfly = useRef(null);

  useEffect(() => {
    if (!bottleRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1700px)", () => {
        gsap.to(bottleRef.current, {
          scrollTrigger: {
            trigger: bottleRef.current,
            start: "top top+=60",
            end: "bottom top+=10",
            scrub: 1,
          },
          y: "110vh",
          x: "-65vw",
          scale: 2.5,
          rotation: 15,
          opacity: 1,
          ease: "none",
        });

        gsap.to(butterfly.current, {
          scrollTrigger: {
            trigger: butterfly.current,
            start: "top top+=60",
            end: "bottom top+=10",
            scrub: 1,
          },
          y: "38vh",
          x: "27vw",
          scale: 2.4,
          rotation: -15,
          opacity: 1,
          ease: "none",
        });
      });

      // DESKTOP (>= 1024px)
      mm.add("(min-width: 1024px) and (max-width: 1699px)", () => {
        gsap.to(bottleRef.current, {
          scrollTrigger: {
            trigger: bottleRef.current,
            start: "top top+=60",
            end: "bottom top+=40",
            scrub: 1,
          },
          y: "95vh",
          x: "20vw",
          scale: 2,
          rotation: 15,
          opacity: 1,
          ease: "none",
        });

        gsap.to(butterfly.current, {
          scrollTrigger: {
            trigger: butterfly.current,
            start: "top top+=60",
            end: "bottom top+=40",
            scrub: 1,
          },
          y: "68vh",
          x: "30vw",
          scale: 1.8,
          rotation: -15,
          opacity: 1,
          ease: "none",
        });
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        gsap.to(bottleRef.current, {
          scrollTrigger: {
            trigger: bottleRef.current,
            start: "top top+=60",
            end: "bottom top+=70",
            scrub: 1,
          },
          y: "85vh",
          x: "25vw",
          scale: 1.3,
          rotation: -10,
          opacity: 1,
          ease: "none",
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.to(bottleRef.current, {
          scrollTrigger: {
            trigger: bottleRef.current,
            start: "top top+=50",
            end: "bottom top+=60",
            scrub: 1,
          },
          y: "70vh",
          x: "10vw",
          scale: 1.2,
          rotation: -5,
          opacity: 1,
          ease: "none",
        });
      });

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, []);

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
            <div className={styles.lottie2} ref={bottleRef}>
              <Lottie animationData={butterflyAnimation} loop autoplay />
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
          <div className={styles.lottie} ref={butterfly}>
            <Lottie animationData={butterflyAnimation2} loop autoplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
