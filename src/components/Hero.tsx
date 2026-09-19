import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Truck,
  RotateCcw,
  BadgeCheck,
  Building2,
  Calendar,
  MapPin,
  Scale,
} from "lucide-react";

interface HeroProps {
  onSeeAction: () => void;
  onExploreProblem: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSeeAction, onExploreProblem }) => {
  // Hero simulation steps: 0: Listing, 1: Searching buyers, 2: Offers revealed, 3: Offer selected, 4: Pickup confirmed
  const [animStep, setAnimStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setAnimStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 3200);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const stepLabels = [
    "01. Produce Listing",
    "02. Finding Buyers",
    "03. Offers Received",
    "04. Deal Confirmed",
    "05. Coordinated Pickup",
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial gradient decoration */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-forest-100/60 via-forest-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Pitch */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 text-xs font-semibold tracking-wider uppercase mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-harvest-600 animate-pulse" />
              <span>FARMBRIDGE · FROM HARVEST TO MARKET</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-forest-950 leading-[1.15] mb-6">
              Your harvest shouldn’t have to{" "}
              <span className="italic font-normal text-forest-800 underline decoration-harvest-500/60 decoration-2 underline-offset-4">
                search
              </span>{" "}
              for its market.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-earth-700 leading-relaxed max-w-xl mb-8">
              FarmBridge connects farmers with verified buyers, transparent
              offers, and coordinated pickup—turning a fragmented selling journey
              into one clear path from harvest to buyer.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onSeeAction}
                className="inline-flex items-center justify-center gap-2.5 bg-forest-900 hover:bg-forest-800 text-[#FAF9F5] px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base tracking-wide transition-all shadow-soft hover:shadow-soft-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-forest-700"
              >
                <span>See FarmBridge in action</span>
                <ArrowRight className="w-4 h-4 text-harvest-400" />
              </button>

              <button
                onClick={onExploreProblem}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-earth-50 text-forest-950 border border-earth-300 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base transition-colors hover:border-earth-400 focus-visible:ring-2 focus-visible:ring-forest-700"
              >
                <span>Explore the problem</span>
              </button>
            </div>

            {/* Supporting Label / Value Pill */}
            <div className="flex items-center gap-3 pt-4 border-t border-earth-200/80 text-xs font-semibold tracking-wider text-earth-600">
              <span className="text-forest-800 font-bold uppercase tracking-widest text-[11px]">
                FROM HARVEST → OFFER → PICKUP
              </span>
              <span className="text-earth-300">•</span>
              <span className="text-earth-500 font-normal">
                Focused procurement workflow
              </span>
            </div>
          </div>

          {/* Right Column: Hero Product Visualization */}
          <div className="lg:col-span-6 relative">
            {/* Ambient subtle glow behind card */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/15 via-harvest-500/10 to-forest-500/15 rounded-3xl blur-xl opacity-75 pointer-events-none -z-10" />

            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-earth-200/90 shadow-soft-xl p-5 sm:p-6 overflow-hidden">
              {/* Product Card Top bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-earth-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold tracking-wider text-forest-950 uppercase">
                    Produce Lifecycle Simulation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                    Interactive Demo
                  </span>
                  <button
                    onClick={() => {
                      setIsAutoPlaying(!isAutoPlaying);
                    }}
                    title={isAutoPlaying ? "Pause simulation" : "Resume simulation"}
                    className="p-1.5 rounded-lg text-earth-500 hover:text-forest-900 hover:bg-earth-100 transition-colors"
                    aria-label="Toggle auto-play animation"
                  >
                    <RotateCcw className={`w-3.5 h-3.5 transition-transform ${isAutoPlaying ? "text-forest-700 hover:rotate-180" : "text-earth-400"}`} />
                  </button>
                </div>
              </div>

              {/* Progress Stepper Tabs with clickable micro-indicators */}
              <div className="grid grid-cols-5 gap-2 mb-5" role="tablist" aria-label="Simulation steps">
                {[0, 1, 2, 3, 4].map((stepIdx) => (
                  <button
                    key={stepIdx}
                    onClick={() => {
                      setAnimStep(stepIdx);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 relative overflow-hidden ${
                      animStep === stepIdx
                        ? "bg-forest-900 shadow-sm"
                        : animStep > stepIdx
                        ? "bg-emerald-600"
                        : "bg-earth-200/80 hover:bg-earth-300"
                    }`}
                    title={stepLabels[stepIdx]}
                    aria-label={stepLabels[stepIdx]}
                  />
                ))}
              </div>

              {/* Live Animated Canvas */}
              <div className="min-h-[300px] flex flex-col justify-between">
                {/* 1. Base Produce Listing Header */}
                <div className="bg-[#FAF9F5] rounded-xl p-4 border border-earth-200/80 mb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-earth-500">
                        Active Listing · Demo
                      </span>
                      <h3 className="font-serif text-xl font-bold text-forest-950">
                        Grade A Hybrid Tomatoes
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-forest-100 text-forest-800 font-semibold text-xs border border-forest-200 flex items-center gap-1">
                      <Scale className="w-3 h-3 text-forest-700" />
                      5,000 kg
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-earth-200/60 text-xs text-earth-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-earth-500" />
                      <span>Farm Gate, Hyderabad</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-earth-500" />
                      <span>Ready: 18 Sept</span>
                    </div>
                  </div>
                </div>

                {/* 2. Middle Dynamic States */}
                <div className="relative py-2 flex-1 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {/* Step 0: Listing Created */}
                    {animStep === 0 && (
                      <motion.div
                        key="step0"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="bg-earth-50 rounded-xl p-4 border border-dashed border-earth-300 text-center"
                      >
                        <span className="inline-flex p-2 rounded-full bg-forest-50 text-forest-700 mb-2">
                          <CheckCircle2 className="w-5 h-5" />
                        </span>
                        <p className="text-xs font-semibold uppercase tracking-wider text-forest-900">
                          Listing Broadcast Ready
                        </p>
                        <p className="text-xs text-earth-600 mt-0.5">
                          Listing parameters published to verified regional procurement hub.
                        </p>
                      </motion.div>
                    )}

                    {/* Step 1: Finding Buyers */}
                    {animStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="bg-forest-900 text-warm-cream rounded-xl p-4 text-center relative overflow-hidden"
                      >
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-harvest-400 animate-ping" />
                          <span className="text-xs font-mono font-bold tracking-widest uppercase text-harvest-300">
                            DEMO · DISCOVERING BUYERS
                          </span>
                        </div>
                        <p className="text-xs text-earth-200">
                          Scanning demand matching 5,000 kg Tomato lot in Hyderabad corridor.
                        </p>
                      </motion.div>
                    )}

                    {/* Step 2: Offers Received */}
                    {animStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between text-xs font-medium text-earth-600 px-1">
                          <span>3 verified offers incoming</span>
                          <span className="text-forest-700 font-semibold">Comparing terms</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2.5 rounded-lg bg-white border border-earth-200 text-center shadow-soft-sm">
                            <span className="text-[10px] text-earth-500 font-semibold block truncate">FreshMart</span>
                            <span className="text-sm font-bold text-forest-950">₹30<span className="text-[10px] font-normal">/kg</span></span>
                            <span className="text-[9px] text-earth-500 block">3,000 kg</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white border border-earth-200 text-center shadow-soft-sm">
                            <span className="text-[10px] text-earth-500 font-semibold block truncate">UrbanGrocers</span>
                            <span className="text-sm font-bold text-forest-950">₹29<span className="text-[10px] font-normal">/kg</span></span>
                            <span className="text-[9px] text-earth-500 block">2,000 kg</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white border border-earth-200 text-center shadow-soft-sm">
                            <span className="text-[10px] text-earth-500 font-semibold block truncate">HarvestHub</span>
                            <span className="text-sm font-bold text-forest-950">₹28<span className="text-[10px] font-normal">/kg</span></span>
                            <span className="text-[9px] text-earth-500 block">5,000 kg full</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Offer Selected */}
                    {animStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                        className="bg-forest-50 border-2 border-forest-700 rounded-xl p-3.5"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-forest-900">
                            <BadgeCheck className="w-4 h-4 text-forest-600" />
                            Offer Selected: HarvestHub Retail
                          </span>
                          <span className="text-xs font-mono font-bold text-forest-900 bg-white px-2 py-0.5 rounded border border-forest-200">
                            ₹1,40,000 est.
                          </span>
                        </div>
                        <p className="text-xs text-forest-800">
                          Full 5,000 kg lot matched @ ₹28/kg. Buyer verifies scheduled transport.
                        </p>
                      </motion.div>
                    )}

                    {/* Step 4: Coordinated Pickup Confirmed */}
                    {animStep === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="bg-emerald-900 text-white rounded-xl p-3.5"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase text-emerald-200">
                            <Truck className="w-4 h-4 text-harvest-400" />
                            Pickup Confirmed
                          </span>
                          <span className="text-xs font-mono text-emerald-300">
                            Sept 20 · 10:00 AM
                          </span>
                        </div>
                        <p className="text-xs text-emerald-100">
                          Dock dispatch confirmed. Buyer container truck routed to farm gate coordinates.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 3. Bottom Status Bar */}
                <div className="mt-3 pt-3 border-t border-earth-100 flex items-center justify-between text-xs text-earth-600">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-forest-700" />
                    <span className="font-medium text-forest-950">
                      {animStep < 2
                        ? "Discovering buyers"
                        : animStep === 2
                        ? "3 offers active"
                        : animStep === 3
                        ? "HarvestHub agreed"
                        : "Ready for pickup"}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-earth-500">
                    Step {animStep + 1} of 5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
