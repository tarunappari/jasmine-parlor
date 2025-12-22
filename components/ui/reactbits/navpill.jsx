'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './navpill.css';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items = [],
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector('.pill-label');
        const hoverLabel = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();

        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, duration: 0.3, ease }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 0.3, ease }, 0);
        }

        if (hoverLabel) {
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 0.3, ease }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0 });
    }

    if (initialLoadAnimation) {
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { scale: 0 },
          { scale: 1, duration: 0.6, ease }
        );
      }

      if (navItemsRef.current) {
        gsap.fromTo(
          navItemsRef.current,
          { width: 0, overflow: 'hidden' },
          { width: 'auto', duration: 0.6, ease }
        );
      }
    }

    return () => window.removeEventListener('resize', layout);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tlRefs.current[i]?.tweenTo(
      tlRefs.current[i].duration(),
      { duration: 0.25, ease }
    );
  };

  const handleLeave = (i) => {
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tlRefs.current[i]?.tweenTo(0, {
      duration: 0.2,
      ease,
    });
  };

  const handleLogoEnter = () => {
    if (!logoImgRef.current) return;
    logoTweenRef.current?.kill();

    logoTweenRef.current = gsap.to(logoImgRef.current, {
      rotate: 360,
      duration: 0.4,
      ease,
    });
  };

  const toggleMobileMenu = () => {
    const open = !isMobileMenuOpen;
    setIsMobileMenuOpen(open);

    const lines = hamburgerRef.current?.querySelectorAll('.hamburger-line');
    const menu = mobileMenuRef.current;

    if (lines) {
      gsap.to(lines[0], { rotation: open ? 45 : 0, y: open ? 4 : 0, duration: 0.3 });
      gsap.to(lines[1], { rotation: open ? -45 : 0, y: open ? -4 : 0, duration: 0.3 });
    }

    if (menu) {
      if (open) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          onComplete: () => gsap.set(menu, { visibility: 'hidden' }),
        });
      }
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
  };

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} style={cssVars}>
        {/* LOGO */}
        <a
          href="#home"
          className="pill-logo"
          ref={logoRef}
          onMouseEnter={handleLogoEnter}
          style={{display:'none'}}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} />
        </a>

        {/* DESKTOP NAV */}
        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list">
            {items.map((item, i) => (
              <li key={item.href || i}>
                <a
                  href={item.href}
                  className="pill"
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <span
                    className="hover-circle"
                    ref={(el) => (circleRefs.current[i] = el)}
                  />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover">{item.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-button mobile-only"
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={item.href || i}>
              <a
                href={item.href}
                className="mobile-menu-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
