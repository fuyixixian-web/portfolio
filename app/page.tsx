"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import AIWorks from "@/components/AIWorks";
import Contact from "@/components/Contact";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    { component: Home, name: "home" },
    { component: AIWorks, name: "ai-works" },
    { component: Projects, name: "projects" },
    { component: Contact, name: "contact" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pages.length]);

  const CurrentComponent = pages[currentPage].component;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {currentPage === 0 ? (
            <Home onNavigate={setCurrentPage} />
          ) : currentPage === 1 ? (
            <AIWorks onNavigate={setCurrentPage} />
          ) : currentPage === 2 ? (
            <Projects onNavigate={setCurrentPage} />
          ) : (
            <CurrentComponent />
          )}
        </motion.div>
      </AnimatePresence>

      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {pages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentPage ? "bg-neutral-900 w-8" : "bg-neutral-300"
            }`}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </nav>
    </div>
  );
}
