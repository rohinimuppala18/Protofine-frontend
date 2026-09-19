import { ArrowRight, RotateCcw, Sparkles, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  onBackPilot: () => void;
  onSeeWorkflow: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBackPilot, onSeeWorkflow }) => {
  return (
    <section className="py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative gradient aura */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-forest-100/70 via-harvest-50/40 to-transparent rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-semibold uppercase tracking-wider mb-6 border border-forest-200">
          <Sparkles className="w-3.5 h-3.5 text-harvest-600" />
          <span>FOCUSED PILOT INITIATIVE</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-forest-950 leading-[1.15] max-w-3xl mx-auto mb-6">
          One harvest. One clearer path to market.
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-earth-700 leading-relaxed max-w-2xl mx-auto mb-10">
          FarmBridge starts with a simple idea: make it easier for farmers and
          buyers to find each other, understand the offer, and coordinate what
          happens next.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onBackPilot}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-forest-900 hover:bg-forest-800 text-warm-cream px-7 py-4 rounded-xl font-semibold text-base tracking-wide transition-all shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border border-forest-700/60 focus-visible:ring-2 focus-visible:ring-forest-700"
          >
            <span>Back the pilot</span>
            <ArrowRight className="w-4 h-4 text-harvest-400" />
          </button>

          <button
            onClick={onSeeWorkflow}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-earth-50 text-forest-950 border border-earth-300 px-6 py-4 rounded-xl font-medium text-base transition-all hover:-translate-y-0.5 active:translate-y-0 hover:border-earth-400 focus-visible:ring-2 focus-visible:ring-forest-700 shadow-soft-sm"
          >
            <RotateCcw className="w-4 h-4 text-earth-500" />
            <span>See the workflow again</span>
          </button>
        </div>

        {/* Subtext reassurance */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-earth-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-forest-700" />
            One high-value crop
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-forest-700" />
            One bounded geography
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-forest-700" />
            Clear, measurable conversion metrics
          </span>
        </div>
      </div>
    </section>
  );
};
