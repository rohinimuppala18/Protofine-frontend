import {
  PhoneCall,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export const ProblemSection: React.FC = () => {
  const todaySteps = [
    { title: "Harvest ready", detail: "Perishable produce is cut and sitting in heat." },
    { title: "Find a buyer", detail: "Scrambling through local contacts and phone calls." },
    { title: "Compare limited info", detail: "Incomplete signals on actual pricing or demand." },
    { title: "Negotiate blindly", detail: "Verbal bids with no documented accountability." },
    { title: "Arrange transport", detail: "Last-minute scramble to find vehicle & loading crew." },
    { title: "Uncertain settlement", detail: "Delayed payment terms or unexpected deductions." },
  ];

  const farmBridgeSteps = [
    { title: "Harvest ready", detail: "Produce specs, quantity, and readiness logged." },
    { title: "List produce", detail: "Single digital listing visible to verified buyers." },
    { title: "Discover verified buyers", detail: "Direct connection with verified commercial demand." },
    { title: "Compare offers", detail: "Net price, volume, and pickup schedule side-by-side." },
    { title: "Confirm deal", detail: "Clear terms confirmed digitally before dispatch." },
    { title: "Coordinate pickup", detail: "Agreed time, route, and loading responsibility set." },
  ];

  return (
    <section id="problem" className="py-20 bg-earth-100/50 border-y border-earth-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-harvest-100 text-harvest-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-harvest-200">
            <PhoneCall className="w-3.5 h-3.5 text-harvest-700" />
            <span>The Reality of Agricultural Selling</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-forest-950 leading-[1.2] mb-5">
            Selling one harvest shouldn’t require a chain of phone calls.
          </h2>

          <p className="text-base sm:text-lg text-earth-700 leading-relaxed">
            When crops are ready, timing is unforgiving. Yet finding a credible
            buyer remains an improvised series of phone inquiries, verbal promises,
            and uncoordinated freight.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: TODAY (Fragmented) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200/80 shadow-soft relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-earth-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
                  <span className="font-serif font-bold text-xl text-forest-950">
                    TODAY
                  </span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200/60">
                  Fragmented &amp; Uncertain
                </span>
              </div>

              <div className="space-y-3.5">
                {todaySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-earth-50/80 border border-earth-200/60 hover:border-earth-300 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-red-100/80 text-red-800 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 border border-red-200/50">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-earth-900">
                        {step.title}
                      </h4>
                      <p className="text-xs text-earth-600 mt-0.5 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-earth-100 text-xs text-red-700 font-medium flex items-center gap-2.5 bg-red-50/50 p-3 rounded-xl border border-red-100/60">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>
                Risk: Perishable produce deteriorates while waiting; price transparency is nonexistent.
              </span>
            </div>
          </div>

          {/* Card 2: WITH FARMBRIDGE (Clear Digital Path) */}
          <div className="bg-forest-950 text-warm-cream rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/40 shadow-soft-xl relative overflow-hidden flex flex-col justify-between glow-emerald">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-harvest-400 to-emerald-400" />

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-forest-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm animate-pulse" />
                  <span className="font-serif font-bold text-xl text-white">
                    WITH FARMBRIDGE
                  </span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/80">
                  One Structured Path
                </span>
              </div>

              <div className="space-y-3.5">
                {farmBridgeSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-forest-900/90 border border-forest-800/90 hover:border-emerald-500/40 hover:bg-forest-900 transition-all"
                  >
                    <span className="w-6 h-6 rounded-lg bg-emerald-900/60 text-emerald-300 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 border border-emerald-600/40">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        {step.title}
                      </h4>
                      <p className="text-xs text-earth-300 mt-0.5 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-forest-800 text-xs text-emerald-300 font-medium flex items-center gap-2.5 bg-forest-900/80 p-3 rounded-xl border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Outcome: Transparent side-by-side offers and pre-coordinated transport.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
