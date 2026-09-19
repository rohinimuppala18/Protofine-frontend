import {
  ShieldCheck,
  CheckCircle2,
  Building,
  Star,
  Clock,
  Truck,
  FileCheck,
  Info,
} from "lucide-react";

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-24 bg-white border-b border-earth-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Pitch & Reasoning */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-forest-200 w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
              <span>TRANSACTION TRANSPARENCY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-forest-950 leading-[1.2] mb-6">
              A buyer shouldn’t just be a phone number.
            </h2>

            <p className="text-base sm:text-lg text-earth-700 leading-relaxed mb-6">
              In traditional informal trading, a farmer often commits a truckload of
              valuable produce based solely on a telephone call from an unknown
              party. If that buyer renegotiates at the gate or disappears, the
              produce spoils.
            </p>

            <p className="text-base sm:text-lg font-medium text-forest-900 leading-relaxed mb-8">
              FarmBridge is designed to give both sides more useful information
              before they commit.
            </p>

            {/* Value Checkpoints */}
            <div className="space-y-4 pt-2 border-t border-earth-200/70">
              <div className="flex items-start gap-3">
                <span className="p-1 rounded bg-forest-100 text-forest-800 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-forest-950">
                    Documented Business Identities
                  </h4>
                  <p className="text-xs text-earth-600 mt-0.5">
                    GST registrations, commercial trade licenses, and institutional
                    buyer profiles confirmed prior to bidding.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="p-1 rounded bg-forest-100 text-forest-800 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-forest-950">
                    Transparent Procurement Track Record
                  </h4>
                  <p className="text-xs text-earth-600 mt-0.5">
                    Visible metrics on completed pickups, prompt payment history,
                    and repeat trade frequency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="p-1 rounded bg-forest-100 text-forest-800 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-forest-950">
                    Mutual Accountability Before Dispatch
                  </h4>
                  <p className="text-xs text-earth-600 mt-0.5">
                    Pickup logistics, arrival windows, and unloading terms are agreed
                    in the offer before produce leaves the farm gate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Illustrative Buyer Profile Card */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-forest-500/10 via-emerald-500/10 to-harvest-500/10 rounded-3xl blur-xl pointer-events-none opacity-60 -z-10" />
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-earth-200/90 shadow-soft-xl relative">
              {/* Header Label */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-earth-100">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-forest-800" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-forest-900">
                    BUYER PROFILE
                  </span>
                </div>
                <span className="text-[11px] font-mono bg-earth-100 text-earth-700 px-2.5 py-0.5 rounded-full border border-earth-200/70">
                  Illustrative buyer profile
                </span>
              </div>

              {/* Profile Top Info */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950">
                    FreshMart Foods
                  </h3>
                  <p className="text-xs text-earth-600 mt-0.5 font-medium">
                    Regional Supermarket &amp; Quick-Commerce Procurement Network
                  </p>
                  <p className="text-xs text-earth-500 mt-1">
                    Operating across Telangana &amp; Andhra Pradesh Hubs
                  </p>
                </div>

                <div className="flex flex-col items-end shrink-0">
                  <div className="flex items-center gap-1.5 bg-amber-50/80 border border-amber-200 px-3 py-1.5 rounded-xl shadow-xs">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="font-mono font-bold text-sm text-forest-950">
                      4.9
                    </span>
                    <span className="text-[10px] text-earth-500">/ 5.0</span>
                  </div>
                  <span className="text-[10px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 mt-1.5">
                    42 completed deals
                  </span>
                </div>
              </div>

              {/* Verification Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 bg-earth-50/80 hover:bg-white transition-colors rounded-xl border border-earth-200/80 flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-emerald-100/80 text-emerald-800 shrink-0 border border-emerald-200/70">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-forest-950 block">
                      Identity verified
                    </span>
                    <span className="text-[11px] text-earth-500">
                      Entity incorporation active
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-earth-50/80 hover:bg-white transition-colors rounded-xl border border-earth-200/80 flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-emerald-100/80 text-emerald-800 shrink-0 border border-emerald-200/70">
                    <FileCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-forest-950 block">
                      Business details verified
                    </span>
                    <span className="text-[11px] text-earth-500">
                      FSSAI &amp; GST registered
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-earth-50/80 hover:bg-white transition-colors rounded-xl border border-earth-200/80 flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-emerald-100/80 text-emerald-800 shrink-0 border border-emerald-200/70">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-forest-950 block">
                      Transaction history
                    </span>
                    <span className="text-[11px] text-earth-500">
                      98% on-time settlement
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-earth-50/80 hover:bg-white transition-colors rounded-xl border border-earth-200/80 flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-emerald-100/80 text-emerald-800 shrink-0 border border-emerald-200/70">
                    <Truck className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-forest-950 block">
                      Verified transport fleet
                    </span>
                    <span className="text-[11px] text-earth-500">
                      Temperature-monitored trucks
                    </span>
                  </div>
                </div>
              </div>

              {/* Restrained disclaimer footnote */}
              <div className="p-3.5 bg-earth-200/50 rounded-xl border border-earth-300 text-[11px] text-earth-700 flex items-start gap-2">
                <Info className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Responsible Verification Notice:</strong> FarmBridge
                  provides verification signals and structured transaction
                  history to reduce commercial ambiguity. It does not replace
                  sound business judgment or guarantee commercial outcomes.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
