"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false); // for background visibility

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scrolling direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      // Detect scroll position for background
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = ["Home", "About", "Projects", "Contact Me"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-20 py-6 
          transition-all duration-500 ${
            scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
          } ${
            visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        {/* Brand */}
        <div className="text-xl md:text-3xl font-bold tracking-widest text-[#ffdca8] hover:text-black transition-colors duration-300 cursor-pointer">
          Technofusion
        </div>

        {/* Nav Links */}
        <ul className="flex items-center justify-center space-x-8 md:space-x-16 text-lg md:text-xl font-light">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[#ffdca8] hover:text-black transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
