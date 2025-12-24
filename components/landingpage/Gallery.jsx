"use client";
import React from "react";
import MasonryGrid from "../ui/Images-grid";
import img1 from "@/public/assets/gallery/img1.webp";
import img2 from "@/public/assets/gallery/img2.webp";
import img3 from "@/public/assets/gallery/img3.webp";
import img4 from "@/public/assets/gallery/img4.webp";
import img5 from "@/public/assets/gallery/img5.webp";
import img6 from "@/public/assets/gallery/img6.webp";
import img7 from "@/public/assets/gallery/img7.webp";
import img8 from "@/public/assets/gallery/img8.webp";
import img9 from "@/public/assets/gallery/img9.webp";
import img10 from "@/public/assets/gallery/img10.webp";
import img11 from "@/public/assets/gallery/img11.webp";
import img12 from "@/public/assets/gallery/img12.webp";
import img13 from "@/public/assets/gallery/img13.webp";
import { IconSparkles } from "@tabler/icons-react";
import butterflyAnimation2 from "@/public/lottie/fly1.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const galleryItems = [
  { id: 1, src: img1.src },
  { id: 2, src: img2.src },
  { id: 3, src: img3.src },
  { id: 4, src: img4.src },
  { id: 5, src: img5.src },
  { id: 6, src: img6.src },
  { id: 7, src: img7.src },
  { id: 8, src: img8.src },
  { id: 9, src: img9.src },
  { id: 10, src: img10.src },
  { id: 11, src: img11.src },
  { id: 12, src: img12.src },
  { id: 13, src: img13.src },
];

const Gallery = () => {
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
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full min-h-screen bg-background p-4 sm:p-6 md:p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="flex items-center text-center mt-2 mb-8 "
          style={{ flexDirection: "column" }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--palepink)] text-[0.9rem] font-semibold text-[var(--text)] mb-3"
          >
            <IconSparkles className="text-[var(--pink)]" size={16} stroke={2} />
            Gallery
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="relative galleryTitle text-3xl md:text-5xl font-bold text-foreground mb-3"
          >
            Our Beautiful Work
            <div className="lottie">
              <Lottie animationData={butterflyAnimation2} loop autoplay />
            </div>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            A glimpse of the magic we create at Jasmine Beauty Parlor
          </motion.p>
        </div>

        <MasonryGrid
          items={galleryItems}
          // Responsive columns controlled by Tailwind classes
          className="columns-3 sm:columns-2 lg:columns-3 xl:columns-4"
          gap="1rem"
          renderItem={(item) => (
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card">
              <img
                src={item.src}
                alt={`Gallery item ${item.id}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          )}
        />
      </div>
    </motion.div>
  );
};

export default Gallery;
