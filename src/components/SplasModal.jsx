import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import splashImage from "../assets/oyster-ad.jpg"; // <-- replace with your image

export default function SplashModal({ showOnce = false, duration = 0 }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (showOnce) {
      const seen = localStorage.getItem("splash_seen_v1");
      if (!seen) {
        setOpen(true);
        localStorage.setItem("splash_seen_v1", "1");
      }
    } else {
      setOpen(true);
    }
  }, [showOnce]);

  useEffect(() => {
    if (!open) return;
    if (duration > 0) {
      const t = setTimeout(() => setOpen(false), duration);
      return () => clearTimeout(t);
    }
  }, [open, duration]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative max-w-3xl w-[90%] md:w-3/4 bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Image only */}
            <div className="relative w-full h-full">
              <img
                src={splashImage}
                alt="Splash"
                className="w-full h-full object-cover"
              />

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close splash"
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}