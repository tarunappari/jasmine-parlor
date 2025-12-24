// components/ui/service-grid.tsx

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "@/styles/landingpage/Services.module.scss";

const ServiceGrid = (
  { title, subtitle, services, className, ...props },
  ref
) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the animation of children by 0.1s
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={ref}
      className={cn("w-full py-12 md:py-16 lg:py-20", className)}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Animated Grid Section */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              className="group flex flex-col items-center justify-start gap-3 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }} // Hover animation
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div
                className={`${styles.card} flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28`}
              >
                <img
                  src={service.imageUrl.src}
                  alt={`${service.name} service icon`}
                  width={100}
                  height={100}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-medium">{service.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

ServiceGrid.displayName = "ServiceGrid";

export { ServiceGrid };
