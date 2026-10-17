"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SITE_CONFIG, GalleryItem } from "@/lib/site-config";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % SITE_CONFIG.gallery.length);
    }
  }, [selectedImageIndex]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + SITE_CONFIG.gallery.length) % SITE_CONFIG.gallery.length
      );
    }
  }, [selectedImageIndex]);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handleClose, handleNext, handlePrev]);

  // Lock scroll when lightbox is active
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex]);

  const activeItem = selectedImageIndex !== null ? SITE_CONFIG.gallery[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            Behind the Wheel
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Training & Vehicle Gallery
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#52525B]">
            A glimpse into our driving sessions, dual-control training vehicles, and student practice environments in Austin Town.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.gallery.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-[#E4E4E7] shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F4F4F5]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white/90 text-[#18181B] flex items-center justify-center shadow-md">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-[#18181B]/80 text-[#FACC15] text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs">
                  {item.category}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-sm text-[#18181B] group-hover:text-[#854D0E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#71717A] mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding real photos */}
        <p className="mt-8 text-center text-xs text-[#71717A]">
          Click any image to enlarge. Real vehicle photos provided by Sridhar Driving School can be updated anytime in the site configuration.
        </p>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close image lightbox"
            className="absolute top-4 right-4 z-60 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal content container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col rounded-2xl overflow-hidden bg-[#18181B] text-white shadow-2xl"
          >
            <div className="relative w-full h-[60vh] bg-black">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
            </div>
            <div className="p-4 sm:p-6 bg-[#18181B] border-t border-[#27272A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-semibold text-[#FACC15] uppercase tracking-wide">
                  {activeItem.category}
                </span>
                <h4 className="text-lg font-bold text-white">{activeItem.title}</h4>
                <p className="text-xs text-[#A1A1AA] mt-0.5">{activeItem.caption}</p>
              </div>
              <div className="text-xs text-[#71717A] shrink-0">
                {selectedImageIndex! + 1} of {SITE_CONFIG.gallery.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
