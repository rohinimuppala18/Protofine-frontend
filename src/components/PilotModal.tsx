import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, CheckCircle2, ArrowRight } from "lucide-react";

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewPlan: () => void;
}

export const PilotModal: React.FC<PilotModalProps> = ({
  isOpen,
  onClose,
  onViewPlan,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pilot-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-forest-950/70 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2 }}
          className="bg-[#FAF9F5] rounded-3xl border border-earth-300 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative z-10 text-left overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-earth-500 hover:text-forest-950 hover:bg-earth-200/60 transition-colors focus-visible:ring-2 focus-visible:ring-forest-700"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="p-2 rounded-xl bg-forest-100 text-forest-800">
              <Target className="w-5 h-5" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-forest-800">
              PILOT VALIDATION PROPOSAL
            </span>
          </div>

          <h3
            id="pilot-modal-title"
            className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-2"
          >
            Ready to test the idea?
          </h3>

          <p className="font-serif text-lg text-harvest-800 font-medium mb-4">
            Start with one crop. One region. One measurable pilot.
          </p>

          <p className="text-sm text-earth-700 leading-relaxed mb-6">
            FarmBridge does not require widespread national rollout to prove its
            worth. A focused 90-day pilot in a single agricultural corridor is
            sufficient to validate whether structured offers improve farmer
            decision speed and pickup completion.
          </p>

          {/* Pilot Highlights Checklist */}
          <div className="bg-white rounded-2xl p-4 border border-earth-200 space-y-2.5 mb-6 text-xs text-earth-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
              <span>Target: Tomatoes in the peri-urban Hyderabad corridor</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
              <span>Cohort: 30–50 commercial growers + 8–12 verified wholesale buyers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
              <span>Measurable goal: &gt; 85% buyer discovery rate &amp; scheduled pickup</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onViewPlan();
              }}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-forest-900 hover:bg-forest-800 text-warm-cream py-3 px-5 rounded-xl font-semibold text-sm shadow-soft transition-all active:scale-[0.98]"
            >
              <span>View pilot plan</span>
              <ArrowRight className="w-4 h-4 text-harvest-400" />
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-semibold text-earth-600 hover:text-forest-950 transition-colors"
            >
              Close
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-earth-200 text-[11px] text-earth-500 text-center font-mono">
            Prototype pitch interaction · Zero financial data requested
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
