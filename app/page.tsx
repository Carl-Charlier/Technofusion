"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col text-[var(--foreground)] bg-[var(--background)] overflow-hidden">
      <Navbar />

      <div className="relative flex-grow flex flex-col items-center justify-center text-center px-6 py-15 max-w-6xl mx-auto mt-20 md:mt-28">

        {/* Soft neutral background glow (removed orange/red) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent-green)]/8 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          We build{" "}
          <motion.span
            className="relative inline-block"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Auto-writing text */}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c00] via-[#ff3a00] to-[#ff6a00] font-bold"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                borderRight: "3px solid rgba(255,90,0,0.7)",
              }}
            >
              smart systems
            </motion.span>

            {/* Smooth curved underline (3D illusion, but stays aligned) */}
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              height="10"
              viewBox="0 0 200 10"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                delay: 0.6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              style={{ transformOrigin: "center", perspective: 400 }}
            >
              <motion.path
                d="M0 5 Q50 1, 100 5 T200 5"
                stroke="url(#grad1)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                filter="drop-shadow(0px 0px 4px rgba(255,80,0,0.5))"
              />
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff5c00" />
                  <stop offset="50%" stopColor="#ff3a00" />
                  <stop offset="100%" stopColor="#ff6a00" />
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.span>{" "}
          that help businesses work better.
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed"
        >
          At{" "}
          <span className="text-[var(--accent-green)] font-semibold">
            Technofusion
          </span>
          , we design intelligent software, automation tools, and AI-powered
          solutions that make organizations{" "}
          <span className="text-[var(--accent)] font-medium">faster</span>,{" "}
          <span className="text-[#ff5c00] font-medium">sharper</span>, and more{" "}
          <span className="text-[var(--accent)] font-medium">connected</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden shadow-[0_0_18px_rgba(255,90,0,0.45)]"
            style={{ backgroundColor: "#ff5c00" }}
          >
            <span className="relative z-10 flex items-center gap-2 text-white">
              See What We Build
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-xl font-semibold border-2 border-[var(--accent)] text-[var(--foreground)] hover:border-[var(--accent-green)] transition-all duration-300"
          >
            <span className="flex items-center gap-2">Let's Talk</span>
          </motion.button>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
