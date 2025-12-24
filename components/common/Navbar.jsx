import React from "react";
import logo from "@/public/assets/logo.png";
import PillNav from "../ui/reactbits/navpill";
import styles from "@/styles/common/Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={120} />
        <h1>Jasmine</h1>
      </div>
      <div className={styles.button}>
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#feb1c6"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>
      <div className={styles.divider}>

      </div>
    </div>
  );
};

export default Navbar;
