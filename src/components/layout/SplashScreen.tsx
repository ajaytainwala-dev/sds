"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("Ignition ON...");

  useEffect(() => {
    const messages = [
      "Ignition ON...",
      "Calibrating dual controls...",
      "Adjusting rear-view mirrors...",
      "Ready to navigate Bengaluru!",
    ];

    // Exactly 3.0 seconds runtime: 100 steps * 30ms = 3000ms
    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem("sds_splash_viewed", "true");
            setLoading(false);
          }, 150);
          return 100;
        }

        const msgIndex = Math.min(
          Math.floor((next / 100) * messages.length),
          messages.length - 1
        );
        if (msgIndex !== currentStep) {
          currentStep = msgIndex;
          setStatusMessage(messages[msgIndex]);
        }

        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem("sds_splash_viewed", "true");
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAF7] text-[#18181B] select-none p-3.5 sm:p-4 min-h-[100dvh] overflow-hidden"
        >
          {/* Subtle background warm glow */}
          <div
            aria-hidden="true"
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#FEF9C3] via-[#FACC15]/25 to-transparent blur-2xl pointer-events-none -z-10"
          />

          <div className="w-full max-w-[320px] xs:max-w-[350px] sm:max-w-md flex flex-col items-center">
            {/* Vector Illustration Stage - Framed & Ultra-Responsive on Mobile */}
            <div className="w-full rounded-2xl bg-white border border-[#E4E4E7] shadow-lg p-2.5 sm:p-5 overflow-hidden">
              <svg
                viewBox="0 0 360 160"
                className="w-full h-auto max-h-[140px] sm:max-h-[180px] block"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sky & faint city backdrop */}
                <rect width="360" height="160" fill="#FAFAF7" rx="10" />
                <g opacity="0.12">
                  <rect x="20" y="55" width="22" height="60" fill="#71717A" rx="2" />
                  <rect x="48" y="40" width="28" height="75" fill="#71717A" rx="2" />
                  <rect x="82" y="60" width="18" height="55" fill="#71717A" rx="2" />
                  <rect x="105" y="35" width="32" height="80" fill="#71717A" rx="2" />
                  <rect x="142" y="50" width="22" height="65" fill="#71717A" rx="2" />
                  <rect x="170" y="42" width="36" height="73" fill="#71717A" rx="2" />
                  <rect x="212" y="48" width="28" height="67" fill="#71717A" rx="2" />
                  <rect x="245" y="58" width="22" height="57" fill="#71717A" rx="2" />
                  <rect x="272" y="38" width="34" height="77" fill="#71717A" rx="2" />
                  <rect x="312" y="62" width="26" height="53" fill="#71717A" rx="2" />
                </g>

                {/* Asphalt Road */}
                <rect x="0" y="115" width="360" height="35" fill="#18181B" />
                <rect x="0" y="115" width="360" height="2" fill="#3F3F46" />

                {/* Animated Dashed Yellow Road Markings */}
                <motion.g
                  animate={{ x: [0, -40] }}
                  transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                >
                  <rect x="10" y="131" width="25" height="3.5" fill="#FACC15" rx="1.5" />
                  <rect x="50" y="131" width="25" height="3.5" fill="#FACC15" rx="1.5" />
                  <rect x="90" y="131" width="25" height="3.5" fill="#FACC15" rx="1.5" />
                  <rect x="130" y="131" width="25" height="3.5" fill="#FACC15" rx="1.5" />
                  <rect x="170" y="131" width="25" height="3.5" fill="#FACC15" rx="1.5" />
                  <rect x="210" y="131" width="25" height="3.5" fill="#FACC15" rx="1.5" />
                  <rect x="250" y="131" width="25" height="3.5" fill="#FACC15" rx="1.5" />
                  <rect x="290" y="131" width="25" height="3.5" fill="#FACC15" rx="1.5" />
                  <rect x="330" y="131" width="25" height="3.5" fill="#FACC15" rx="1.5" />
                  <rect x="370" y="131" width="25" height="3.5" fill="#FACC15" rx="1.5" />
                </motion.g>

                {/* Training Car with Driving Suspension Bounce */}
                <motion.g
                  animate={{ y: [0, -2, 0, -1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
                >
                  {/* Road Contact Shadow */}
                  <ellipse cx="180" cy="117" rx="68" ry="5" fill="#000000" opacity="0.3" />

                  {/* Main Car Lower Chassis */}
                  <path
                    d="M115 94 C115 88 120 83 128 83 L232 83 C242 83 250 89 254 98 L257 106 C258 108 256 111 253 111 L112 111 C109 111 107 108 108 106 Z"
                    fill="#FACC15"
                  />
                  {/* Amber Accent Trim */}
                  <path
                    d="M110 102 L254 102 C252 105 249 108 245 108 L113 108 Z"
                    fill="#EAB308"
                  />

                  {/* Glass Cabin */}
                  <path
                    d="M136 83 L153 58 C156 54 160 52 165 52 L212 52 C218 52 224 55 227 61 L240 83 Z"
                    fill="#FFFFFF"
                    stroke="#D4D4D8"
                    strokeWidth="1.5"
                  />

                  {/* Windows with Tint */}
                  <path
                    d="M213 56 L224 56 C228 56 232 59 234 63 L242 80 L213 80 Z"
                    fill="#38BDF8"
                    opacity="0.8"
                  />
                  <path
                    d="M139 80 L153 60 C155 57 158 56 162 56 L168 56 L168 80 Z"
                    fill="#38BDF8"
                    opacity="0.7"
                  />
                  <rect x="172" y="56" width="37" height="24" fill="#38BDF8" opacity="0.85" rx="1.5" />

                  {/* Student Driver (left side) */}
                  <circle cx="163" cy="67" r="4.5" fill="#18181B" />
                  {/* Steering wheel */}
                  <path d="M168 66 C170 69 170 75 168 78" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />

                  {/* Instructor (right side) */}
                  <circle cx="190" cy="66" r="4.5" fill="#18181B" />
                  <path d="M194 71 L200 71" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />

                  {/* Headlight & Taillight */}
                  <path d="M252 98 C254 98 256 100 256 102 L254 105 L251 106 Z" fill="#FFFFFF" />
                  <path d="M110 100 C109 100 108 101 108 103 L109 106 L111 106 Z" fill="#EF4444" />

                  {/* Headlight beam */}
                  <polygon points="256,101 320,90 330,116 254,106" fill="url(#splashBeam)" opacity="0.5" />

                  {/* Learner "L" Plate on Roof */}
                  <g transform="translate(180, 38)">
                    <rect x="0" y="0" width="14" height="14" rx="2" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
                    <path
                      d="M3.5 2.5 L3.5 11 L10.5 11"
                      stroke="#DC2626"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                      fill="none"
                    />
                  </g>

                  {/* Rear Wheel */}
                  <g transform="translate(138, 111)">
                    <circle cx="0" cy="0" r="12" fill="#18181B" />
                    <circle cx="0" cy="0" r="7.5" fill="#E4E4E7" />
                    <circle cx="0" cy="0" r="3.5" fill="#18181B" />
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.45, ease: "linear" }}
                    >
                      <line x1="-6.5" y1="0" x2="6.5" y2="0" stroke="#71717A" strokeWidth="1.5" />
                      <line x1="0" y1="-6.5" x2="0" y2="6.5" stroke="#71717A" strokeWidth="1.5" />
                    </motion.g>
                  </g>

                  {/* Front Wheel */}
                  <g transform="translate(222, 111)">
                    <circle cx="0" cy="0" r="12" fill="#18181B" />
                    <circle cx="0" cy="0" r="7.5" fill="#E4E4E7" />
                    <circle cx="0" cy="0" r="3.5" fill="#18181B" />
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.45, ease: "linear" }}
                    >
                      <line x1="-6.5" y1="0" x2="6.5" y2="0" stroke="#71717A" strokeWidth="1.5" />
                      <line x1="0" y1="-6.5" x2="0" y2="6.5" stroke="#71717A" strokeWidth="1.5" />
                    </motion.g>
                  </g>
                </motion.g>

                <defs>
                  <linearGradient id="splashBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Title & Badge */}
            <div className="text-center mt-4 sm:mt-5">
              <h2 className="text-xl sm:text-2xl font-black text-[#18181B] tracking-tight">
                Sridhar Driving School
              </h2>
              <div className="text-xs font-semibold text-[#854D0E] flex items-center justify-center gap-1.5 mt-1">
                <span className="h-2 w-2 rounded-full bg-[#15803D] animate-ping" />
                Austin Town, Bengaluru
              </div>
            </div>

            {/* Progress Meter */}
            <div className="w-full mt-5 sm:mt-6 px-2 space-y-2">
              <div className="h-2 w-full bg-[#E4E4E7] rounded-full overflow-hidden p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FACC15] to-[#EAB308] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#71717A] font-medium">
                <span className="italic">{statusMessage}</span>
                <span className="font-bold text-[#18181B]">{progress}%</span>
              </div>
            </div>

            {/* Skip Button with generous touch target */}
            <button
              onClick={handleSkip}
              type="button"
              className="mt-6 py-2.5 px-5 rounded-full text-xs font-bold text-[#52525B] hover:text-[#18181B] bg-white border border-[#E4E4E7] shadow-2xs hover:bg-[#F4F4F5] active:scale-95 transition-all"
            >
              Skip to Website →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
