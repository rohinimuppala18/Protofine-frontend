import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  RotateCcw,
  CheckCircle2,
  BadgeCheck,
  MapPin,
  Calendar,
  Truck,
  ArrowRight,
  Info,
} from "lucide-react";
import { DEMO_SCENARIOS } from "../data/demoData";

type DemoWorkflowState =
  | "initial"
  | "matching"
  | "offers"
  | "pickup-planning"
  | "review"
  | "confirmed";

export const MarketplaceDemo: React.FC = () => {
  const [selectedCropKey, setSelectedCropKey] = useState<string>("tomatoes");
  const [workflowState, setWorkflowState] = useState<DemoWorkflowState>("initial");
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
  const [pickupWindow, setPickupWindow] = useState<string>("");
  const [pickupInstructions, setPickupInstructions] = useState<string>(
    "Produce will be ready at the farm gate for pickup."
  );

  const pickupPlanningRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const confirmedRef = useRef<HTMLDivElement>(null);

  const scenario = DEMO_SCENARIOS[selectedCropKey];
  const selectedOffer = scenario.buyers.find((b) => b.id === selectedOfferId) || null;

  const handleFindBuyers = () => {
    setWorkflowState("matching");
    setSelectedOfferId(null);
    setPickupWindow("");
    setTimeout(() => {
      setWorkflowState("offers");
      // Do NOT automatically select an offer; allow user to click and evaluate trade-offs
      setSelectedOfferId(null);
    }, 900);
  };

  const handleReset = () => {
    setWorkflowState("initial");
    setSelectedOfferId(null);
    setPickupWindow("");
    setPickupInstructions("Produce will be ready at the farm gate for pickup.");
  };

  const handleCropChange = (key: string) => {
    setSelectedCropKey(key);
    setWorkflowState("initial");
    setSelectedOfferId(null);
    setPickupWindow("");
    setPickupInstructions("Produce will be ready at the farm gate for pickup.");
  };

  const handleProceedToPickupPlanning = () => {
    setWorkflowState("pickup-planning");
    setTimeout(() => {
      pickupPlanningRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleProceedToReview = () => {
    setWorkflowState("review");
    setTimeout(() => {
      reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleConfirmPlan = () => {
    setWorkflowState("confirmed");
    setTimeout(() => {
      confirmedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Format currency
  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Progress Steps logic
  const getStepIndex = () => {
    switch (workflowState) {
      case "initial":
        return 0;
      case "matching":
        return 1;
      case "offers":
        return selectedOfferId ? 2 : 1;
      case "pickup-planning":
        return 3;
      case "review":
      case "confirmed":
        return 4;
      default:
        return 0;
    }
  };

  const currentStepIdx = getStepIndex();
  const progressSteps = [
    { num: "01", label: "LIST" },
    { num: "02", label: "MATCH" },
    { num: "03", label: "SELECT" },
    { num: "04", label: "SCHEDULE" },
    { num: "05", label: "CONFIRM" },
  ];

  return (
    <section id="demo" className="py-24 bg-forest-950 text-warm-cream relative overflow-hidden">
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 bg-subtle-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-harvest-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-harvest-400 animate-pulse" />
            <span>INTERACTIVE SIMULATION · ILLUSTRATIVE DEMO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-white leading-[1.2] mb-4">
            Watch a harvest find its market.
          </h2>

          <p className="text-base sm:text-lg text-earth-300 leading-relaxed">
            Experience the complete FarmBridge workflow: from produce listing and buyer matching to offer selection, pickup scheduling, and plan confirmation.
          </p>
        </div>

        {/* Demo Simulation Workspace Container */}
        <div className="relative">
          {/* Ambient Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/15 via-harvest-500/10 to-emerald-500/15 rounded-3xl blur-2xl pointer-events-none opacity-60 -z-10" />

          <div className="bg-forest-900/95 rounded-3xl border border-forest-700/60 shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md relative">
            {/* Top Bar: Progress Indicator & Scenario Switcher */}
            <div className="pb-6 mb-8 border-b border-forest-800/80 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-earth-400">
                    Select Harvest Scenario:
                  </span>
                  <div className="flex items-center gap-1.5 bg-forest-950 p-1 rounded-xl border border-forest-800 shadow-inner">
                    <button
                      type="button"
                      onClick={() => handleCropChange("tomatoes")}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedCropKey === "tomatoes"
                          ? "bg-forest-700 text-white shadow-sm border border-forest-600/60"
                          : "text-earth-400 hover:text-white"
                      }`}
                    >
                      🍅 Tomatoes (5,000 kg · Hyd)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCropChange("onions")}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedCropKey === "onions"
                          ? "bg-forest-700 text-white shadow-sm border border-forest-600/60"
                          : "text-earth-400 hover:text-white"
                      }`}
                    >
                      🧅 Red Onions (8,000 kg · Nashik)
                    </button>
                  </div>
                </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-earth-400 bg-forest-950 px-2.5 py-1 rounded-md border border-forest-800">
                  Illustrative demo data
                </span>
                {workflowState !== "initial" && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-xs text-earth-300 hover:text-white transition-colors bg-forest-800 hover:bg-forest-700 px-3 py-1.5 rounded-lg"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Demo</span>
                  </button>
                )}
              </div>
            </div>

            {/* Visual Workflow Progress Bar */}
            <div className="bg-forest-950/80 rounded-2xl p-3.5 border border-forest-800/90">
              <div className="grid grid-cols-5 gap-2">
                {progressSteps.map((step, sIdx) => {
                  const isActive = currentStepIdx === sIdx;
                  const isCompleted = currentStepIdx > sIdx || workflowState === "confirmed";

                  return (
                    <div
                      key={step.num}
                      className={`text-center py-2 px-1 rounded-xl transition-all border ${
                        isActive
                          ? "bg-forest-800/90 border-harvest-400 text-white font-bold shadow-sm"
                          : isCompleted
                          ? "bg-forest-900/60 border-emerald-500/40 text-emerald-300"
                          : "bg-forest-950/40 border-forest-800 text-earth-500"
                      }`}
                    >
                      <div className="text-[10px] font-mono font-semibold">
                        {isCompleted && currentStepIdx > sIdx ? "✓" : step.num}
                      </div>
                      <div className="text-[11px] tracking-wider uppercase truncate">
                        {step.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Harvest Listing Summary Banner */}
          <div className="bg-forest-950/90 rounded-2xl p-5 border border-forest-800 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-forest-800 text-emerald-300 text-[10px] font-mono uppercase tracking-wider">
                    PRODUCE SPEC
                  </span>
                  <span className="text-xs text-earth-400">
                    {scenario.listing.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {scenario.listing.crop} — {scenario.listing.quantity}
                </h3>
                <p className="text-xs text-earth-300 mt-1">
                  {scenario.listing.grade} · {scenario.listing.farmGateNotes}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-forest-900 px-3 py-2 rounded-xl border border-forest-800 text-xs">
                  <span className="text-earth-400 block text-[10px]">Location</span>
                  <span className="font-semibold text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {scenario.listing.location}
                  </span>
                </div>

                <div className="bg-forest-900 px-3 py-2 rounded-xl border border-forest-800 text-xs">
                  <span className="text-earth-400 block text-[10px]">Available From</span>
                  <span className="font-semibold text-white flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    {scenario.listing.availability}
                  </span>
                </div>

                {workflowState === "initial" && (
                  <button
                    type="button"
                    onClick={handleFindBuyers}
                    className="inline-flex items-center gap-2 bg-harvest-600 hover:bg-harvest-500 text-forest-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95"
                  >
                    <Sparkles className="w-4 h-4 text-forest-950" />
                    <span>Find buyers</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Loading Matching State */}
          <AnimatePresence>
            {workflowState === "matching" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="py-16 text-center"
              >
                <div className="inline-flex items-center justify-center p-4 bg-forest-800 rounded-full mb-4 animate-pulse">
                  <Sparkles className="w-8 h-8 text-harvest-400 animate-spin" />
                </div>
                <h4 className="font-mono text-lg font-bold tracking-widest text-harvest-300 uppercase">
                  MATCHING BUYERS...
                </h4>
                <p className="text-sm text-earth-400 mt-2 max-w-md mx-auto">
                  DEMO · Cross-referencing simulated institutional, supermarket, and
                  wholesale demand in the regional transit corridor.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Initial Idle Invitation Prompt */}
          {workflowState === "initial" && (
            <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-forest-800 bg-forest-950/40">
              <p className="text-earth-300 text-sm max-w-md mx-auto mb-4">
                Click <strong className="text-white">“Find buyers”</strong> above
                to simulate discovery of verified buyers with active procurement
                orders matching this harvest.
              </p>
              <button
                type="button"
                onClick={handleFindBuyers}
                className="inline-flex items-center gap-2 bg-harvest-600 hover:bg-harvest-500 text-forest-950 font-bold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 text-sm"
              >
                <span>Run buyer matching simulation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Revealed Offers Section (Visible from "offers" through "confirmed") */}
          {workflowState !== "initial" && workflowState !== "matching" && (
            <div className="space-y-8">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-forest-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <h4 className="text-sm sm:text-base uppercase tracking-wider font-mono font-bold text-emerald-300">
                      {scenario.buyers.length} RELEVANT OFFERS FOUND
                    </h4>
                  </div>
                  <span className="text-xs text-earth-400">
                    Transparent comparison · Click an offer to evaluate terms &amp; trade-offs
                  </span>
                </div>

                {/* 3 Buyer Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {scenario.buyers.map((buyer, idx) => {
                    const isSelected = selectedOfferId === buyer.id;
                    const calculatedTotal = buyer.numericQuantity * buyer.pricePerKg;

                    return (
                      <div
                        key={buyer.id}
                        onClick={() => setSelectedOfferId(buyer.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setSelectedOfferId(buyer.id);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-pressed={isSelected}
                        className={`text-left p-5 rounded-2xl cursor-pointer transition-all duration-200 relative border ${
                          isSelected
                            ? "bg-gradient-to-b from-forest-800/95 to-forest-900/95 border-emerald-400 shadow-xl shadow-emerald-950/40 ring-2 ring-emerald-400/50 -translate-y-0.5"
                            : "bg-forest-950/80 border-forest-800/90 hover:border-forest-700 hover:bg-forest-950 hover:-translate-y-0.5 transition-all"
                        }`}
                      >
                        {/* Selected Indicator Badge */}
                        {isSelected && (
                          <div className="absolute -top-3 right-4 bg-emerald-500 text-forest-950 text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1 shadow-md border border-emerald-300">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>{buyer.selectionBadge}</span>
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-earth-400">
                            BUYER 0{idx + 1}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-800/60">
                            <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                            Verified
                          </span>
                        </div>

                        <h5 className="font-serif text-lg font-bold text-white mb-0.5">
                          {buyer.buyerName}
                        </h5>
                        <p className="text-xs text-earth-300 mb-4">
                          {buyer.buyerType}
                        </p>

                        <div className="space-y-2 py-3 border-y border-forest-800 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-earth-400">Volume Required</span>
                            <span className="font-semibold text-white">
                              {buyer.quantity}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-earth-400">Offer Price</span>
                            <span className="font-bold text-harvest-400 text-sm font-mono">
                              ₹{buyer.pricePerKg}
                              <span className="text-xs font-normal text-earth-300">/kg</span>
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-earth-400">Location Hub</span>
                            <span className="text-earth-200">
                              {buyer.location}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-earth-400">Pickup Date</span>
                            <span className="text-earth-200">
                              {buyer.pickupDate.split(",")[0]}
                            </span>
                          </div>
                        </div>

                        <div className="mt-3 p-2 rounded-xl bg-forest-900/60 border border-forest-800/80 flex items-center justify-between text-xs">
                          <span className="text-earth-400 text-[11px] font-mono uppercase tracking-wider">
                            Est. Gross Value:
                          </span>
                          <span className="font-mono font-bold text-harvest-400 text-sm">
                            {formatINR(calculatedTotal)}
                          </span>
                        </div>

                        <p className="text-[11px] text-earth-400 mt-2.5 line-clamp-2 italic">
                          "{buyer.notes}"
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Selected Offer Details & Execution Status */}
              {selectedOffer ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-forest-950 rounded-2xl p-6 border border-emerald-500/50 shadow-soft-lg text-left"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left 7 cols: Deal summary calculation & Trade-off Explanation */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono uppercase tracking-wider border border-emerald-800">
                          {selectedOffer.selectionBadge.toUpperCase()}
                        </span>
                        <span className="text-xs text-earth-400">
                          {selectedOffer.buyerName} ({selectedOffer.buyerType})
                        </span>
                      </div>

                      <div className="flex flex-wrap items-baseline gap-3 my-2">
                        <span className="font-mono text-xl sm:text-2xl font-bold text-white">
                          {selectedOffer.quantity} × ₹{selectedOffer.pricePerKg}/kg
                        </span>
                        <span className="text-earth-400 text-sm">→</span>
                        <div>
                          <span className="text-xs text-earth-400 uppercase tracking-wider block font-medium">
                            Illustrative deal value:
                          </span>
                          <span className="font-mono text-2xl sm:text-3xl font-extrabold text-harvest-400">
                            {formatINR(selectedOffer.numericQuantity * selectedOffer.pricePerKg)}
                          </span>
                        </div>
                      </div>

                      {/* Trade-off explanation box */}
                      <div className="bg-forest-900/90 rounded-xl p-4 border border-forest-800 my-3">
                        <div className="text-xs font-semibold text-emerald-300 mb-1">
                          Trade-off context:
                        </div>
                        <p className="text-xs text-earth-200 leading-relaxed">
                          {selectedOffer.selectionReason}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-forest-800 text-[11px]">
                          {selectedOffer.supportingSignals.map((sig, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-1.5 text-earth-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{sig}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-earth-300 mt-2 flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-harvest-400 shrink-0" />
                        <span>
                          <strong>Illustrative demo:</strong> FarmBridge demonstrates trade-off
                          transparency—such as single-pickup certainty versus higher unit rates on partial lots—without
                          claiming any offer is objectively the best.
                        </span>
                      </p>
                    </div>

                    {/* Right 5 cols: Execution Readiness Signals & Continue CTA */}
                    <div className="lg:col-span-5 bg-forest-900/90 rounded-xl p-4 border border-forest-800 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-earth-400 pb-1 border-b border-forest-800">
                        Execution Readiness Signals
                      </div>

                      <div className="flex items-center justify-between text-xs text-emerald-300">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Buyer verification</span>
                        </span>
                        <span className="font-mono text-[11px] bg-forest-950 px-1.5 py-0.5 rounded text-emerald-400">
                          Verified ✓
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-emerald-300">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Offer selected</span>
                        </span>
                        <span className="font-mono text-[11px] bg-forest-950 px-1.5 py-0.5 rounded text-emerald-400">
                          Confirmed ✓
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-harvest-300">
                        <span className="flex items-center gap-2">
                          <Truck className="w-4 h-4 text-harvest-400" />
                          <span>Pickup planning</span>
                        </span>
                        <span className="font-mono text-[11px] bg-harvest-950/80 px-2 py-0.5 rounded text-harvest-300 border border-harvest-800">
                          Ready → Scheduled
                        </span>
                      </div>

                      <div className="text-[11px] text-earth-400 pt-1 border-t border-forest-800/80">
                        Pickup mode: <span className="text-white font-medium">{selectedOffer.pickupMode}</span>
                      </div>

                      {/* Primary CTA to continue workflow */}
                      {workflowState === "offers" && (
                        <div className="pt-2 border-t border-forest-800/80">
                          <button
                            type="button"
                            onClick={handleProceedToPickupPlanning}
                            className="w-full inline-flex items-center justify-center gap-2 bg-harvest-500 hover:bg-harvest-400 text-forest-950 font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-harvest-400"
                          >
                            <span>Continue to pickup planning →</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-6 px-4 rounded-2xl border border-dashed border-forest-800 bg-forest-950/40 text-earth-400 text-xs">
                  <span>Please select one of the {scenario.buyers.length} buyer offers above to review trade-offs and continue to pickup planning.</span>
                </div>
              )}

              {/* STEP 4: PICKUP PLANNING SECTION */}
              {selectedOffer && (workflowState === "pickup-planning" || workflowState === "review" || workflowState === "confirmed") && (
                <motion.div
                  ref={pickupPlanningRef}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-8 mt-8 border-t border-forest-800/80 space-y-6"
                >
                  {/* Section Heading */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-forest-800/80">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded bg-forest-800 text-harvest-400 text-[10px] font-mono uppercase tracking-wider">
                          STEP 04 · PICKUP PLANNING
                        </span>
                        <span className="text-xs text-earth-400 font-mono">Illustrative scheduling</span>
                      </div>
                      <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                        Pickup planning
                      </h4>
                      <p className="text-xs sm:text-sm text-earth-300">
                        Turn the selected offer into a coordinated pickup plan.
                      </p>
                    </div>

                    {/* Status Indicators */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800 font-mono text-[11px]">
                        Buyer verification · Verified
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800 font-mono text-[11px]">
                        Offer · Confirmed
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-harvest-950/80 text-harvest-300 border border-harvest-800 font-mono text-[11px]">
                        Pickup · Ready to schedule
                      </span>
                    </div>
                  </div>

                  {/* Clean Summary Card */}
                  <div className="bg-forest-950/90 rounded-2xl p-5 sm:p-6 border border-forest-800 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
                    <div>
                      <span className="text-earth-400 text-[10px] uppercase font-mono block">SELECTED BUYER</span>
                      <span className="font-bold text-white text-sm">{selectedOffer.buyerName}</span>
                      <span className="text-earth-400 text-[11px] block">{selectedOffer.buyerType}</span>
                    </div>
                    <div>
                      <span className="text-earth-400 text-[10px] uppercase font-mono block">QUANTITY</span>
                      <span className="font-bold text-white text-sm">{selectedOffer.quantity}</span>
                      <span className="text-earth-400 text-[11px] block">of {scenario.listing.quantity} lot</span>
                    </div>
                    <div>
                      <span className="text-earth-400 text-[10px] uppercase font-mono block">OFFER</span>
                      <span className="font-bold text-harvest-400 text-sm">₹{selectedOffer.pricePerKg}/kg</span>
                      <span className="text-earth-400 text-[11px] block">Unit price</span>
                    </div>
                    <div>
                      <span className="text-earth-400 text-[10px] uppercase font-mono block">ILLUSTRATIVE DEAL VALUE</span>
                      <span className="font-mono font-bold text-harvest-400 text-sm">
                        {formatINR(selectedOffer.numericQuantity * selectedOffer.pricePerKg)}
                      </span>
                      <span className="text-earth-400 text-[11px] block">Estimated gross</span>
                    </div>
                    <div>
                      <span className="text-earth-400 text-[10px] uppercase font-mono block">PICKUP DATE</span>
                      <span className="font-semibold text-white">{selectedOffer.pickupDate.split(",")[0]}</span>
                    </div>
                    <div>
                      <span className="text-earth-400 text-[10px] uppercase font-mono block">PICKUP LOCATION</span>
                      <span className="font-semibold text-white">Farm Gate, {scenario.listing.location}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-earth-400 text-[10px] uppercase font-mono block">PICKUP MODE</span>
                      <span className="font-semibold text-white">{selectedOffer.pickupMode}</span>
                    </div>
                  </div>

                  {/* Pickup Scheduling Controls (Active when in pickup-planning) */}
                  {workflowState === "pickup-planning" && (
                    <div className="bg-forest-900/90 rounded-2xl p-5 sm:p-6 border border-forest-800 space-y-4">
                      <div className="flex items-center justify-between border-b border-forest-800 pb-3">
                        <h5 className="font-serif text-lg font-bold text-white">
                          Schedule pickup
                        </h5>
                        <span className="text-[11px] font-mono text-earth-400 bg-forest-950 px-2 py-0.5 rounded border border-forest-800">
                          Illustrative scheduling
                        </span>
                      </div>

                      <div className="text-xs text-earth-300">
                        <span className="font-semibold text-white">Proposed Pickup Date:</span> {selectedOffer.pickupDate} (Default based on buyer fleet route)
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-earth-300 mb-2">
                          Select pickup time window:
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Pickup window selection">
                          {[
                            "Morning · 8:00 AM – 11:00 AM",
                            "Midday · 11:00 AM – 2:00 PM",
                            "Afternoon · 2:00 PM – 5:00 PM",
                          ].map((windowOpt) => {
                            const isSelected = pickupWindow === windowOpt;
                            return (
                              <button
                                type="button"
                                key={windowOpt}
                                onClick={() => setPickupWindow(windowOpt)}
                                role="radio"
                                aria-checked={isSelected}
                                className={`p-3.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                                  isSelected
                                    ? "bg-forest-800 border-emerald-400 ring-2 ring-emerald-400/40 text-white font-semibold shadow-sm"
                                    : "bg-forest-950/70 border-forest-800 text-earth-300 hover:border-forest-700 hover:text-white"
                                }`}
                              >
                                <span>{windowOpt}</span>
                                {isSelected ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                ) : (
                                  <span className="w-3.5 h-3.5 rounded-full border border-forest-700 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                        {!pickupWindow && (
                          <span className="text-[11px] text-harvest-400/90 mt-1.5 block">
                            * Please select an illustrative time window to continue.
                          </span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="pickup-instructions" className="block text-xs font-semibold text-earth-300 mb-1.5">
                          Add pickup instructions for the buyer (optional):
                        </label>
                        <textarea
                          id="pickup-instructions"
                          name="pickup-instructions"
                          rows={2}
                          value={pickupInstructions}
                          onChange={(e) => setPickupInstructions(e.target.value)}
                          placeholder="Add pickup instructions for the buyer..."
                          className="w-full bg-forest-950 border border-forest-800 rounded-xl p-3 text-xs text-white placeholder-earth-500 focus:outline-none focus:ring-2 focus:ring-forest-600 resize-none"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <span className="text-[11px] text-earth-400">
                          Frontend simulation · Demonstrates time-window coordination prior to dispatch.
                        </span>
                        <button
                          type="button"
                          disabled={!pickupWindow}
                          onClick={handleProceedToReview}
                          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md ${
                            pickupWindow
                              ? "bg-harvest-500 hover:bg-harvest-400 text-forest-950 active:scale-98 cursor-pointer"
                              : "bg-forest-800 text-earth-500 cursor-not-allowed border border-forest-700 opacity-60"
                          }`}
                        >
                          <span>Review pickup plan →</span>
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* STEP 5: REVIEW SECTION */}
              {selectedOffer && (workflowState === "review" || workflowState === "confirmed") && (
                <motion.div
                  ref={reviewRef}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-8 mt-8 border-t border-forest-800/80 space-y-6"
                >
                  <div className="max-w-2xl text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-forest-800 text-harvest-400 text-[10px] font-mono uppercase tracking-wider">
                        STEP 05 · FINAL REVIEW
                      </span>
                      <span className="text-xs text-earth-400 font-mono">Illustrative review</span>
                    </div>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      Review before confirmation
                    </h4>
                    <p className="text-xs sm:text-sm text-earth-300">
                      Check the selected offer and pickup details before confirming the demo workflow.
                    </p>
                  </div>

                  <div className="bg-forest-950/95 rounded-2xl p-6 border border-emerald-500/40 shadow-soft-lg space-y-4 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pb-4 border-b border-forest-800/80">
                      <div className="space-y-2.5">
                        <div className="flex justify-between py-1 border-b border-forest-900">
                          <span className="text-earth-400 uppercase font-mono text-[10px]">HARVEST</span>
                          <span className="font-semibold text-white">{scenario.listing.crop} ({scenario.listing.quantity})</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-900">
                          <span className="text-earth-400 uppercase font-mono text-[10px]">BUYER</span>
                          <span className="font-semibold text-white">{selectedOffer.buyerName}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-900">
                          <span className="text-earth-400 uppercase font-mono text-[10px]">OFFER</span>
                          <span className="font-bold text-harvest-400">₹{selectedOffer.pricePerKg}/kg</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-earth-400 uppercase font-mono text-[10px]">QUANTITY</span>
                          <span className="font-semibold text-white">{selectedOffer.quantity}</span>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex justify-between py-1 border-b border-forest-900">
                          <span className="text-earth-400 uppercase font-mono text-[10px]">ILLUSTRATIVE DEAL VALUE</span>
                          <span className="font-mono font-bold text-harvest-400 text-sm">
                            {formatINR(selectedOffer.numericQuantity * selectedOffer.pricePerKg)}
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-900">
                          <span className="text-earth-400 uppercase font-mono text-[10px]">PICKUP DATE</span>
                          <span className="font-semibold text-white">{selectedOffer.pickupDate.split(",")[0]}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-forest-900">
                          <span className="text-earth-400 uppercase font-mono text-[10px]">TIME WINDOW</span>
                          <span className="font-semibold text-emerald-300">{pickupWindow || "Not selected"}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-earth-400 uppercase font-mono text-[10px]">PICKUP MODE</span>
                          <span className="font-medium text-earth-200">{selectedOffer.pickupMode}</span>
                        </div>
                      </div>
                    </div>

                    {pickupInstructions && (
                      <div className="text-xs text-earth-300 pt-1">
                        <span className="text-[10px] uppercase font-mono text-earth-400 block mb-1">INSTRUCTIONS FOR BUYER DISPATCH</span>
                        <p className="bg-forest-900/60 p-2.5 rounded-lg border border-forest-800 italic">
                          "{pickupInstructions}"
                        </p>
                      </div>
                    )}

                    {workflowState === "review" && (
                      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => {
                            setWorkflowState("pickup-planning");
                            setTimeout(() => {
                              pickupPlanningRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                            }, 100);
                          }}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-earth-600 text-earth-200 hover:text-white hover:bg-forest-800 text-xs font-semibold transition-colors"
                        >
                          <span>← Edit pickup</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleConfirmPlan}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md active:scale-98"
                        >
                          <span>Confirm pickup plan →</span>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* STEP 6: FINAL SUCCESS STATE */}
              {selectedOffer && workflowState === "confirmed" && (
                <motion.div
                  ref={confirmedRef}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="pt-8 mt-8 border-t border-forest-800/80 space-y-6"
                >
                  <div className="bg-forest-950 rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/60 shadow-2xl text-left space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-forest-800">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-6 h-6" />
                        </span>
                        <div>
                          <h4 className="font-serif text-2xl font-bold text-white">
                            Demo pickup plan confirmed
                          </h4>
                          <p className="text-xs sm:text-sm text-earth-300">
                            FarmBridge has moved this illustrative offer from buyer discovery to a coordinated pickup plan.
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800 shrink-0">
                        Demo Workflow Completed
                      </span>
                    </div>

                    {/* Progress / Status Sequence */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs font-medium">
                      {[
                        "Harvest listed",
                        "Buyer matched",
                        "Offer selected",
                        "Pickup plan prepared",
                        "Plan confirmed",
                      ].map((stepLabel) => (
                        <div
                          key={stepLabel}
                          className="bg-forest-900/90 rounded-xl p-2.5 border border-forest-800 flex items-center gap-1.5 text-emerald-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{stepLabel}</span>
                        </div>
                      ))}
                    </div>

                    {/* Structured Summary Card */}
                    <div className="bg-forest-900/90 rounded-2xl p-5 border border-forest-800 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
                      <div>
                        <span className="text-earth-400 text-[10px] uppercase font-mono block">SELECTED BUYER</span>
                        <span className="font-bold text-white text-sm">{selectedOffer.buyerName}</span>
                      </div>
                      <div>
                        <span className="text-earth-400 text-[10px] uppercase font-mono block">QUANTITY</span>
                        <span className="font-bold text-white text-sm">{selectedOffer.quantity}</span>
                      </div>
                      <div>
                        <span className="text-earth-400 text-[10px] uppercase font-mono block">ILLUSTRATIVE DEAL VALUE</span>
                        <span className="font-mono font-bold text-harvest-400 text-sm">
                          {formatINR(selectedOffer.numericQuantity * selectedOffer.pricePerKg)}
                        </span>
                      </div>
                      <div>
                        <span className="text-earth-400 text-[10px] uppercase font-mono block">PICKUP</span>
                        <span className="font-semibold text-white">{selectedOffer.pickupDate.split(",")[0]}</span>
                        <span className="text-earth-400 text-[11px] block">{pickupWindow}</span>
                      </div>
                      <div>
                        <span className="text-earth-400 text-[10px] uppercase font-mono block">LOCATION</span>
                        <span className="font-semibold text-white">Farm Gate, {scenario.listing.location}</span>
                      </div>
                    </div>

                    {/* Prominent Disclaimer */}
                    <div className="p-4 bg-forest-900/60 rounded-xl border border-forest-800 text-xs text-earth-300 flex items-start gap-2.5">
                      <Info className="w-4 h-4 text-harvest-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Illustrative demo only.</strong> No real order, payment, buyer verification, or logistics booking has been created. This prototype illustrates how commercial discovery and dispatch coordination connect in a single interface.
                      </span>
                    </div>

                    {/* Reset / Start another demo button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-xs text-earth-400">
                        Ready to test a different harvest volume or crop?
                      </span>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest-800 hover:bg-forest-700 text-white font-semibold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-colors border border-forest-700 active:scale-98"
                      >
                        <RotateCcw className="w-4 h-4 text-harvest-400" />
                        <span>Start another demo ↻</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
  );
};
