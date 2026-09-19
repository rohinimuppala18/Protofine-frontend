import {
  Target,
  ArrowRight,
  BarChart3,
  HelpCircle,
} from "lucide-react";
import { PILOT_ROADMAP, PILOT_METRICS } from "../data/demoData";

interface PilotSectionProps {
  onOpenPitchModal: () => void;
}

export const PilotSection: React.FC<PilotSectionProps> = ({ onOpenPitchModal }) => {
  return (
    <section id="pilot" className="py-24 bg-white border-b border-earth-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: The Pilot Pitch */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900 text-warm-cream text-xs font-semibold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5 text-harvest-400" />
            <span>DISCIPLINED PRODUCT ROLLOUT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-forest-950 leading-[1.2] mb-5">
            Don’t digitize the whole supply chain on day one.
          </h2>

          <p className="text-base sm:text-lg text-earth-700 leading-relaxed">
            Start with one focused pilot. Prove that better farmer-to-buyer
            discovery and clearer offers can create better transactions before
            expanding.
          </p>
        </div>

        {/* Decision-Maker Section: What we'd prove first */}
        <div className="mb-20 relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-forest-500/10 via-emerald-500/10 to-harvest-500/10 rounded-3xl blur-xl pointer-events-none opacity-50 -z-10" />

          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-earth-200/90 shadow-soft-lg text-left">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100/80 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-forest-200">
                <span className="w-2 h-2 rounded-full bg-forest-700" />
                <span>Proposed pilot questions</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-3">
                What we’d prove first
              </h3>
              <p className="text-sm sm:text-base text-earth-700 leading-relaxed">
                FarmBridge should start with a focused pilot rather than attempting to digitize the entire agricultural supply chain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-earth-200 shadow-soft-sm hover:-translate-y-1 hover:shadow-soft transition-all duration-200">
                <span className="font-mono text-xs font-extrabold text-forest-800 bg-forest-100/80 px-2.5 py-1 rounded-lg mb-3 inline-block border border-forest-200/60">
                  01
                </span>
                <h4 className="font-serif text-base font-bold text-forest-950 leading-snug">
                  Can farmers discover relevant buyers with less friction?
                </h4>
                <p className="text-xs text-earth-600 mt-2 leading-relaxed">
                  Evaluate whether digital listing reduces the time and manual inquiries needed to identify active procurement demand.
                </p>
              </div>

              <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-earth-200 shadow-soft-sm hover:-translate-y-1 hover:shadow-soft transition-all duration-200">
                <span className="font-mono text-xs font-extrabold text-forest-800 bg-forest-100/80 px-2.5 py-1 rounded-lg mb-3 inline-block border border-forest-200/60">
                  02
                </span>
                <h4 className="font-serif text-base font-bold text-forest-950 leading-snug">
                  Do buyers receive clearer information about available produce?
                </h4>
                <p className="text-xs text-earth-600 mt-2 leading-relaxed">
                  Test whether structured crop parameters, harvest grade, and location allow buyers to bid with greater pricing confidence.
                </p>
              </div>

              <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-earth-200 shadow-soft-sm hover:-translate-y-1 hover:shadow-soft transition-all duration-200">
                <span className="font-mono text-xs font-extrabold text-forest-800 bg-forest-100/80 px-2.5 py-1 rounded-lg mb-3 inline-block border border-forest-200/60">
                  03
                </span>
                <h4 className="font-serif text-base font-bold text-forest-950 leading-snug">
                  Can more offers move from discovery to confirmed pickup?
                </h4>
                <p className="text-xs text-earth-600 mt-2 leading-relaxed">
                  Verify whether transparent terms and scheduled logistics reduce last-minute cancellations and post-harvest spoilage.
                </p>
              </div>
            </div>

            <div className="p-4.5 rounded-2xl bg-forest-950 text-warm-cream flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border border-forest-800 shadow-inner">
              <span className="font-serif font-bold text-sm text-harvest-300">
                Start with one crop. One region. One measurable pilot.
              </span>
              <span className="text-earth-300 font-mono text-[11px] bg-forest-900 px-3 py-1 rounded-full border border-forest-800">
                Hypothesis-driven validation · Not speculative expansion
              </span>
            </div>
          </div>
        </div>

        {/* 5-Step Pilot Roadmap */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-earth-200">
            <h3 className="font-serif text-xl font-bold text-forest-950">
              The 5-Step Validation Roadmap
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-earth-500">
              Phase 1 Execution Plan
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PILOT_ROADMAP.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F5] rounded-2xl p-5 border border-earth-200/90 text-left flex flex-col justify-between relative hover:border-forest-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-extrabold text-forest-800 bg-forest-100 px-2.5 py-1 rounded-md">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-earth-500">
                      Step
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-forest-950 mb-1">
                    {item.title}
                  </h4>

                  <span className="text-[11px] font-semibold text-harvest-700 block mb-2">
                    {item.focus}
                  </span>

                  <p className="text-xs text-earth-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-earth-200/60 text-[10px] text-earth-500 flex items-center gap-1 font-medium">
                  <span>Milestone {idx + 1}</span>
                  {idx < 4 && <ArrowRight className="w-3 h-3 text-earth-400 ml-auto" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proposed Pilot Metrics: What We'd Learn */}
        <div className="bg-forest-950 text-warm-cream rounded-3xl p-6 sm:p-10 border border-forest-800 shadow-xl text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-forest-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BarChart3 className="w-4 h-4 text-harvest-400" />
                <span className="text-xs font-mono font-bold tracking-widest text-harvest-300 uppercase">
                  MEASUREMENT ARCHITECTURE
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                What we’d learn: Proposed Pilot Metrics
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono bg-forest-900 text-earth-300 px-3 py-1.5 rounded-lg border border-forest-800">
                Pilot metrics · Quantitative evaluation
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-earth-300 max-w-2xl mb-8">
            These metrics represent the primary hypotheses we will rigorously test
            during the pilot phase. We do not claim fabricated past success; we
            define clear criteria for what constitutes a viable outcome.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILOT_METRICS.map((metric) => (
              <div
                key={metric.id}
                className="bg-forest-900/80 rounded-2xl p-5 border border-forest-800/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-earth-400">
                      Hypothesis Metric
                    </span>
                    <HelpCircle className="w-3.5 h-3.5 text-harvest-400" />
                  </div>

                  <h4 className="font-serif text-base font-bold text-white mb-2">
                    {metric.label}
                  </h4>

                  <p className="text-xs text-earth-300 italic mb-4">
                    “{metric.question}”
                  </p>
                </div>

                <div className="pt-3 border-t border-forest-800/80">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-earth-400 block mb-1">
                    Target Evaluation Signal
                  </span>
                  <span className="text-xs font-semibold text-emerald-300 font-mono">
                    {metric.pilotTarget}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-forest-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-earth-400">
              Disciplined product thinking: Validate unit discovery before infrastructure.
            </span>
            <button
              onClick={onOpenPitchModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-harvest-600 hover:bg-harvest-500 text-forest-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              <span>Review full pilot plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
