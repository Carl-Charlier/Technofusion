import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function OverviewContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      image: "AI insurance Advisor.jpg",
      title: "AI Insurance Advisor",
      description: "Intelligent insurance recommendations powered by AI",
    },
    {
      image: "AI school.jpg",
      title: "AI School Platform",
      description: "Personalized learning experiences for students",
    },
    {
      image: "Spoofing detection.jpg",
      title: "Cybersecurity Spoofing Detection System (ML)",
      description: "Advanced security for fraud prevention (using AI and ML)",
    },
    {
      image: "insurance 2.jpg",
      title: "Insurance comparisons AI Tool",
      description: " Insights for better coverage",
    },
    {
      image: "Business Finance Asssistant(AI Agent).png",
      title: "Business Finance  Assistant",
      description: "Financial intelligence and automation for growth",
    },
  ];

  useEffect(() => {
    if (isPaused) return; // do not auto-advance when paused (pressed/tapped)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [projects.length, isPaused]);

  // Track viewport to tailor layout for mobile without affecting desktop
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handle = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    // Initial
    handle(mq);
    // Listen for changes
    mq.addEventListener?.("change", handle as (e: MediaQueryListEvent) => void);
    // Fallback for older browsers
    // @ts-ignore - Safari < 14
    mq.addListener && mq.addListener(handle);
    return () => {
      mq.removeEventListener?.("change", handle as (e: MediaQueryListEvent) => void);
      // @ts-ignore - Safari < 14
      mq.removeListener && mq.removeListener(handle);
    };
  }, []);

  // simple swipe handlers for mobile smooth navigation
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setIsPaused(true);
    setTouchStartX(e.changedTouches[0].clientX);
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const threshold = 40; // px
    if (dx < -threshold) {
      setCurrentSlide((s) => (s + 1) % projects.length);
    } else if (dx > threshold) {
      setCurrentSlide((s) => (s - 1 + projects.length) % projects.length);
    }
    setTouchStartX(null);
    setIsPaused(false);
  };

  // Pause/resume on pointer interactions (covers mouse and touch on supporting browsers)
  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = () => {
    setIsPaused(true);
  };
  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = () => {
    setIsPaused(false);
  };
  const onPointerCancel: React.PointerEventHandler<HTMLDivElement> = () => {
    setIsPaused(false);
  };
  const onPointerLeave: React.PointerEventHandler<HTMLDivElement> = () => {
    setIsPaused(false);
  };

  return (
  <div className="md:min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-3 px-2 md:py-12 md:px-4 mt-2 md:mt-5 rounded-2xl md:rounded-3xl shadow-lg">

      <div className="max-w-7xl mx-auto text-center">

        {/* Carousel Section */}
        <div className="relative mt-1 md:mt-2">
          <div
            className="relative h-auto md:h-[600px] bg-linear-to-br from-purple-100 to-blue-100 rounded-2xl md:rounded-3xl p-3 md:p-8 shadow-2xl overflow-hidden flex flex-col md:justify-center"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            onPointerLeave={onPointerLeave}
          >
            
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-blue-300 rounded-full opacity-20 animate-pulse" />
            <div
              className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-purple-300 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            />

            {/* Slides */}
            <div className="relative md:h-full flex md:items-center md:justify-center overflow-hidden">
              {isMobile ? (
                <div className="w-full" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                  <AnimatePresence mode="wait">
                    {(() => {
                      const project = projects[currentSlide];
                      return (
                        <motion.div
                          key={`${currentSlide}-${project.title}`}
                          initial={{ x: 48, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -48, opacity: 0 }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                          className="w-[92vw] max-w-[380px] mx-auto"
                        >
                          {/* Image Card */}
                          <div className="bg-white rounded-xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                            {/* Browser bar */}
                            <div className="bg-slate-800 px-2 py-1.5 flex items-center gap-2">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                              </div>
                            </div>
                            {/* Image */}
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-auto object-contain bg-slate-900"
                            />
                          </div>

                          {/* Project Info */}
                          <div className="mt-3 text-center px-2">
                            <h3 className="text-base font-bold text-slate-900 mb-1">
                              {project.title}
                            </h3>
                            <p className="text-slate-600 text-xs max-w-md mx-auto leading-snug">
                              {project.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>
              ) : (
              projects.map((project, idx) => {
                const position =
                  (idx - currentSlide + projects.length) % projects.length;

                let translateX = 0;
                let opacity = 0;
                let scale = isMobile ? 1 : 0.9;
                let zIndex = 1;
                const slideClass = isMobile ? "relative mx-auto" : "absolute";

                if (position === 0) {
                  translateX = 0;
                  opacity = 1;
                  scale = 1;
                  zIndex = 3;
                } else if (!isMobile && position === 1) {
                  translateX = 85;
                  opacity = 0.8;
                  zIndex = 2;
                } else if (!isMobile && position === projects.length - 1) {
                  translateX = -85;
                  opacity = 0.8;
                  zIndex = 2;
                } else {
                  opacity = 0;
                }

                return (
                  <div
                    key={idx}
                    className={`${slideClass} transition-all duration-700 ease-in-out ${
                      isMobile && position !== 0 ? "hidden" : ""
                    } w-[92vw] max-w-[380px] md:w-[800px] md:max-w-none`}
                    style={{
                      ...(isMobile
                        ? {}
                        : { transform: `translateX(${translateX}%) scale(${scale})` }),
                      opacity,
                      zIndex,
                    }}
                  >
                    {/* Image Card */}
                    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden border-2 md:border-[3px] border-slate-800 shadow-2xl transform hover:scale-105 transition-transform">
                    {/* Browser bar  */}
                    <div className="bg-slate-800 px-2 py-1.5 md:px-4 md:py-3 flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500" />
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
                      </div>
                    </div>

                      
                      {/* Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto md:h-[450px] object-contain bg-slate-900"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="mt-3 md:mt-6 text-center px-2">
                      <h3 className="text-base md:text-xl font-bold text-slate-900 mb-1 md:mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-xs md:text-base max-w-md mx-auto leading-snug md:leading-normal">
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              }))}
            </div>
            {/* Slide indicators removed per request */}
          </div>
        </div>
      </div>
    </div>
  );
}
