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
  return (
    <div className="w-full min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mt-2 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            Inspiration Gallery
          </h1>
          <p className="text-lg text-muted-foreground">
            A showcase of nature's beauty
          </p>
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
    </div>
  );
};

export default Gallery;
