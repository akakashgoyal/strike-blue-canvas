import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, X } from "lucide-react";

import QuoteModal from "@/components/common/QuoteModal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const footerElement = document.querySelector("footer");
      const footerVisible =
        footerElement instanceof HTMLElement &&
        footerElement.getBoundingClientRect().top < window.innerHeight - 120;

      if (!isDismissed) {
        setIsVisible(currentScrollY > 180 && !footerVisible);
      }

      lastScrollYRef.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      window.requestAnimationFrame(updateVisibility);
      ticking = true;
    };

    lastScrollYRef.current = window.scrollY;
    updateVisibility();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [isDismissed]);

  if (isDismissed) {
    return (
      <QuoteModal
        open={isQuoteOpen}
        onOpenChange={setIsQuoteOpen}
        title="Get a Free Quote"
        description="Tell us about your project and we’ll respond with the right next step."
      />
    );
  }

  return (
    <AnimatePresence>
      <QuoteModal
        open={isQuoteOpen}
        onOpenChange={setIsQuoteOpen}
        title="Get a Free Quote"
        description="Tell us about your project and we’ll respond with the right next step."
      />
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-[70] px-3 sm:px-4"
          aria-label="Sticky call to action"
        >
          <div className="mx-auto max-w-full">
            <div className="relative overflow-hidden rounded-t-3xl border border-white/10 bg-[#254673] text-white shadow-[0_-18px_60px_rgba(56,182,240,0.18)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_30%)] mix-blend-overlay" />
              <div className="relative px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
                <div className="flex items-center gap-4 flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(74,222,128,0.7)]" />
                      Start Your Project Today
                    </div>
                    <h2 className="mt-3 text-lg font-semibold leading-tight text-white sm:text-xl lg:text-2xl">
                      Ready to create something extraordinary?
                    </h2>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/72 sm:text-[15px]">
                      Let’s discuss your project and bring your vision to life.
                    </p>
                  </div>

                  <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-[240px]">
                    <Button
                      aria-label="Get a Quote"
                      onClick={() => {
                        setIsQuoteOpen(true);
                        setIsDismissed(true);
                      }}
                      className={cn(
                        "group relative h-11 w-full rounded-full bg-gradient-to-r from-[#20daff]  to-[#2083c4] px-5 font-semibold text-white shadow-lg shadow-violet-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(139,92,246,0.45)] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                      )}
                    >
                      <span className="absolute inset-0 rounded-full bg-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-white/10" />
                      <span className="relative flex items-center gap-2">
                        Get a Quote
                        <ChevronUp
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </Button>

                    <button
                      type="button"
                      onClick={() => setIsDismissed(true)}
                      className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/80 transition hover:bg-white/12 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto sm:px-4"
                      aria-label="Dismiss sticky call to action"
                    >
                      <X size={16} className="mr-2" />
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>

              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.35, 0.7, 0.35] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
