import React from "react";
import styles from "@/styles/common/Footer.module.scss";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.waveSection}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className={styles.wave}
        >
          <path
            d="M0,80 C150,120 350,40 600,70 C850,100 1050,140 1440,80 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.topSection}>
            {/* Logo & Brand */}
            <div className={styles.brandSection}>
              <div className={styles.logoBox}>
                <Image src={logo} alt="X Energy" width={60} height={60} />
              </div>
              <div className={styles.brandText}>
                <h3 className={styles.brandName}>Jasmine Beauty Parlor</h3>
              </div>
            </div>

            {/* Navigation Links */}
            <div className={styles.linksSection}>
              <div className={`${styles.linkColumn}`}>
                <h4>Connect</h4>

                <div className={styles.connectDiv}>
                  <span>
                    <a href="#instagram">
                      <IconBrandInstagram stroke={2} />
                    </a>
                  </span>

                  <a href="#facebook">
                    <IconBrandFacebook stroke={2} />
                  </a>

                  <a href="#twitter">
                    <IconBrandX stroke={2} />
                  </a>

                  <a href="#youtube">
                    <IconBrandYoutube stroke={2} />
                  </a>
                  <a href="#youtube">
                    <IconBrandWhatsapp stroke={2} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* Bottom Section */}
          <div className={styles.bottomSection}>
            <div className={styles.copyright}>
              <p>© {currentYear} All rights reserved</p>
            </div>
            <div className={styles.legalLinks}>
              <a href="#privacy">By Tarun Appari🖤</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
