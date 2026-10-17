"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("Ignition ON...");

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("sds_splash_viewed");
    if (hasSeenSplash) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 0);
      return () => clearTimeout(timer);
    }

    const messages = [
      "Ignition ON...",
      "Calibrating dual controls...",
      "Adjusting rear-view mirrors...",
      "Ready to navigate Bengaluru!",
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem("sds_splash_viewed", "true");
            setLoading(false);
          }, 350);
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
    }, 45);

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
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAF7] text-[#18181B] select-none overflow-hidden"
        >
          {/* Subtle warm glow background accent */}
          <div
            aria-hidden="true"
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FEF9C3] via-[#FACC15]/20 to-transparent blur-3xl pointer-events-none -z-10"
          />

          <div className="relative w-full max-w-md px-6 flex flex-col items-center">
            {/* Animated Car & Road SVG Scene */}
            <div className="relative w-full aspect-16/9 flex items-center justify-center">
              <svg
                viewBox="0 0 400 200"
                className="w-full h-auto drop-shadow-md overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* City skyline silhouettes in background */}
                <g opacity="0.15">
                  <rect x="30" y="85" width="25" height="55" fill="#71717A" rx="2" />
                  <rect x="60" y="70" width="30" height="70" fill="#71717A" rx="2" />
                  <rect x="95" y="90" width="20" height="50" fill="#71717A" rx="2" />
                  <rect x="120" y="60" width="35" height="80" fill="#71717A" rx="2" />
                  <rect x="160" y="80" width="25" height="60" fill="#71717A" rx="2" />
                  <rect x="190" y="65" width="40" height="75" fill="#71717A" rx="2" />
                  <rect x="235" y="75" width="30" height="65" fill="#71717A" rx="2" />
                  <rect x="270" y="85" width="25" height="55" fill="#71717A" rx="2" />
                  <rect x="300" y="70" width="35" height="70" fill="#71717A" rx="2" />
                  <rect x="340" y="90" width="30" height="50" fill="#71717A" rx="2" />
                </g>

                {/* Road surface */}
                <rect x="0" y="140" width="400" height="40" fill="#27272A" rx="6" />
                <rect x="0" y="140" width="400" height="3" fill="#3F3F46" />

                {/* Animated road markings (moving dash lines to simulate driving) */}
                <motion.g
                  animate={{ x: [0, -50] }}
                  transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                >
                  <rect x="10" y="158" width="30" height="4" fill="#FACC15" rx="2" />
                  <rect x="60" y="158" width="30" height="4" fill="#FACC15" rx="2" />
                  <rect x="110" y="158" width="30" height="4" fill="#FACC15" rx="2" />
                  <rect x="160" y="158" width="30" height="4" fill="#FACC15" rx="2" />
                  <rect x="210" y="158" width="30" height="4" fill="#FACC15" rx="2" />
                  <rect x="260" y="158" width="30" height="4" fill="#FACC15" rx="2" />
                  <rect x="310" y="158" width="30" height="4" fill="#FACC15" rx="2" />
                  <rect x="360" y="158" width="30" height="4" fill="#FACC15" rx="2" />
                  <rect x="410" y="158" width="30" height="4" fill="#FACC15" rx="2" />
                </motion.g>

                {/* Floating Speed lines in air */}
                <motion.path
                  d="M40 100 L75 100"
                  stroke="#FACC15"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  animate={{ x: [80, -20], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
                />
                <motion.path
                  d="M20 120 L50 120"
                  stroke="#E4E4E7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{ x: [60, -30], opacity: [0, 0.8, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                />

                {/* Car Group with gentle natural driving suspension bounce */}
                <motion.g
                  animate={{ y: [0, -2, 0, -1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
                >
                  {/* Car Shadow */}
                  <ellipse cx="200" cy="142" rx="72" ry="7" fill="#18181B" opacity="0.35" />

                  {/* Main Car Body - Lower */}
                  <path
                    d="M130 115 C130 108 136 102 144 102 L256 102 C268 102 278 110 282 120 L285 130 C286 133 284 136 281 136 L125 136 C122 136 120 133 121 130 Z"
                    fill="#FACC15"
                  />
                  {/* Car accent stripe */}
                  <path
                    d="M123 126 L283 126 C281 130 278 133 274 133 L126 133 Z"
                    fill="#EAB308"
                  />

                  {/* Car Cabin - Upper */}
                  <path
                    d="M152 102 L172 74 C175 70 180 68 185 68 L235 68 C242 68 248 72 252 78 L266 102 Z"
                    fill="#FFFFFF"
                    stroke="#E4E4E7"
                    strokeWidth="1.5"
                  />

                  {/* Car Front Windshield */}
                  <path
                    d="M236 72 L248 72 C253 72 257 75 260 80 L268 100 L236 100 Z"
                    fill="#38BDF8"
                    opacity="0.75"
                  />
                  {/* Car Rear Windshield */}
                  <path
                    d="M156 100 L172 75 C174 72 178 71 182 71 L188 71 L188 100 Z"
                    fill="#38BDF8"
                    opacity="0.65"
                  />
                  {/* Car Center Window */}
                  <rect x="192" y="72" width="40" height="28" fill="#38BDF8" opacity="0.8" rx="2" />

                  {/* Student Driver Silhouette (left) */}
                  <circle cx="182" cy="84" r="5" fill="#18181B" />
                  {/* Hands on steering wheel */}
                  <path
                    d="M185 91 C188 91 190 89 192 88"
                    stroke="#18181B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Steering wheel arc */}
                  <path
                    d="M192 82 C194 85 194 92 192 95"
                    stroke="#EAB308"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Instructor Silhouette (right / passenger) */}
                  <circle cx="212" cy="83" r="5" fill="#18181B" />
                  {/* Instructor giving thumbs up / guiding */}
                  <path
                    d="M216 88 L223 88"
                    stroke="#15803D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Dual mirror indicator */}
                  <rect x="238" y="93" width="7" height="4" rx="1.5" fill="#18181B" />

                  {/* Headlights and Taillights */}
                  <path
                    d="M280 120 C282 120 284 122 284 124 L282 128 C281 129 279 130 278 130 Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M123 122 C122 122 121 123 121 125 L122 128 C123 129 124 130 125 130 Z"
                    fill="#EF4444"
                  />

                  {/* Headlight beam projection */}
                  <polygon points="284,124 350,110 360,140 282,130" fill="url(#headlightBeam)" opacity="0.6" />

                  {/* Learner "L" Board on roof */}
                  <g transform="translate(198, 52)">
                    <rect x="0" y="0" width="16" height="16" rx="2" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
                    {/* Bold Red 'L' */}
                    <path
                      d="M4 3 L4 13 L12 13"
                      stroke="#DC2626"
                      strokeWidth="3"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      fill="none"
                    />
                  </g>

                  {/* Front Wheel */}
                  <g transform="translate(245, 136)">
                    <circle cx="0" cy="0" r="14" fill="#18181B" />
                    <circle cx="0" cy="0" r="9" fill="#D4D4D8" />
                    <circle cx="0" cy="0" r="4" fill="#18181B" />
                    {/* Rotating wheel spokes */}
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                    >
                      <line x1="-8" y1="0" x2="8" y2="0" stroke="#71717A" strokeWidth="2" />
                      <line x1="0" y1="-8" x2="0" y2="8" stroke="#71717A" strokeWidth="2" />
                    </motion.g>
                  </g>

                  {/* Rear Wheel */}
                  <g transform="translate(155, 136)">
                    <circle cx="0" cy="0" r="14" fill="#18181B" />
                    <circle cx="0" cy="0" r="9" fill="#D4D4D8" />
                    <circle cx="0" cy="0" r="4" fill="#18181B" />
                    {/* Rotating wheel spokes */}
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                    >
                      <line x1="-8" y1="0" x2="8" y2="0" stroke="#71717A" strokeWidth="2" />
                      <line x1="0" y1="-8" x2="0" y2="8" stroke="#71717A" strokeWidth="2" />
                    </motion.g>
                  </g>
                </motion.g>

                {/* Headlight beam gradient definition */}
                <defs>
                  <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Brand Title & Austin Town Badge */}
            <div className="text-center mt-3">
              <h2 className="text-xl sm:text-2xl font-black text-[#18181B] tracking-tight">
                Sridhar Driving School
              </h2>
              <p className="text-xs font-semibold text-[#854D0E] flex items-center justify-center gap-1.5 mt-1">
                <span className="h-2 w-2 rounded-full bg-[#15803D] animate-ping" />
                Austin Town, Bengaluru
              </p>
            </div>

            {/* Progress Bar & Status Text */}
            <div className="w-full mt-6 space-y-2">
              <div className="h-2.5 w-full bg-[#E4E4E7] rounded-full overflow-hidden p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FACC15] to-[#EAB308] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#71717A] font-medium px-1">
                <span className="italic">{statusMessage}</span>
                <span className="font-bold text-[#18181B]">{progress}%</span>
              </div>
            </div>

            {/* Quick Skip Button */}
            <button
              onClick={handleSkip}
              type="button"
              className="mt-6 text-xs text-[#A1A1AA] hover:text-[#18181B] transition-colors underline underline-offset-4 font-medium"
            >
              Skip to Website →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
