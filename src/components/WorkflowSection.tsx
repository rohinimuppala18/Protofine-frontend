import { useState } from "react";
import {
  FileText,
  Calendar,
  MapPin,
  Scale,
  BadgeCheck,
} from "lucide-react";

export const WorkflowSection: React.FC = () => {
  const [demoListed, setDemoListed] = useState<boolean>(false);

  return (
    <section id="workflow" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-forest-200">
            <span className="w-2 h-2 rounded-full bg-forest-600" />
            <span>HOW IT WORKS · THREE STEPS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-forest-950 leading-[1.2] mb-5">
            Turning an unpredictable harvest into a confirmed plan.
          </h2>

          <p className="text-base sm:text-lg text-earth-700 leading-relaxed">
            FarmBridge replaces ad-hoc middlemen phone calls with a structured,
            three-stage workflow designed for clarity before commitment.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* STEP 01: LIST */}
          <div className="flex flex-col bg-[#FAF9F5] rounded-2xl p-6 sm:p-7 border border-earth-200 shadow-soft-sm hover:shadow-soft transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-earth-500 bg-earth-200/70 px-2.5 py-1 rounded">
                STEP 01
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800">
                LIST
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-forest-950 mb-2">
              List what you have.
            </h3>

            <p className="text-sm text-earth-700 leading-relaxed mb-6">
              Add the crop, quantity, location, and availability so buyers can
              understand the opportunity.
            </p>

            {/* Step 1 Visual Mockup */}
            <div className="bg-white rounded-xl p-4 border border-earth-200 shadow-soft-sm mt-auto">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-earth-100">
                <span className="text-[11px] font-semibold text-earth-500 uppercase tracking-wider">
                  Produce Specimen
                </span>
                <span className="text-[10px] bg-forest-100 text-forest-800 px-2 py-0.5 rounded font-mono">
                  Illustrative UI
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-earth-100/60">
                  <span className="text-earth-500 flex items-center gap-1">
                    <FileText className="w-3 h-3 text-earth-400" /> Crop
                  </span>
                  <span className="font-semibold text-forest-950">Tomatoes</span>
                </div>
                <div className="flex justify-between py-1 border-b border-earth-100/60">
                  <span className="text-earth-500 flex items-center gap-1">
                    <Scale className="w-3 h-3 text-earth-400" /> Quantity
                  </span>
                  <span className="font-semibold text-forest-950">5,000 kg</span>
                </div>
                <div className="flex justify-between py-1 border-b border-earth-100/60">
                  <span className="text-earth-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-earth-400" /> Location
                  </span>
                  <span className="font-semibold text-forest-950">Hyderabad</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-earth-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-earth-400" /> Available
                  </span>
                  <span className="font-semibold text-forest-950">18 Sept</span>
                </div>
              </div>

              <button
                onClick={() => setDemoListed(!demoListed)}
                className={`w-full mt-4 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  demoListed
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : "bg-forest-900 text-white hover:bg-forest-800 shadow-soft-sm"
                }`}
              >
                {demoListed ? "Listing Broadcasted ✓ (Demo)" : "List produce (Demo)"}
              </button>
            </div>
          </div>

          {/* STEP 02: MATCH */}
          <div className="flex flex-col bg-[#FAF9F5] rounded-2xl p-6 sm:p-7 border border-earth-200 shadow-soft-sm hover:shadow-soft transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-earth-500 bg-earth-200/70 px-2.5 py-1 rounded">
                STEP 02
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800">
                MATCH
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-forest-950 mb-2">
              Discover relevant buyers.
            </h3>

            <p className="text-sm text-earth-700 leading-relaxed mb-6">
              See buyer opportunities that match the produce listing and
              location.
            </p>

            {/* Step 2 Visual Mockup */}
            <div className="bg-white rounded-xl p-4 border border-earth-200 shadow-soft-sm mt-auto space-y-2.5">
              <div className="flex items-center justify-between pb-1.5 border-b border-earth-100">
                <span className="text-[11px] font-semibold text-earth-500 uppercase tracking-wider">
                  Matched Demand
                </span>
                <span className="text-[10px] bg-earth-100 text-earth-600 px-1.5 py-0.5 rounded font-mono">
                  Fictional Examples
                </span>
              </div>

              {/* Fictional Buyer 1 */}
              <div className="p-2.5 rounded-lg border border-earth-200 bg-earth-50/50 hover:bg-forest-50/40 transition-colors text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-forest-950 flex items-center gap-1">
                    FreshMart Foods
                    <BadgeCheck className="w-3.5 h-3.5 text-forest-600" />
                  </span>
                  <span className="font-bold text-forest-900 bg-white px-1.5 py-0.5 rounded border border-earth-200">
                    ₹30/kg
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1 text-[11px] text-earth-600">
                  <span>3,000 kg demand</span>
                  <span>Pickup: Sept 20</span>
                </div>
              </div>

              {/* Fictional Buyer 2 */}
              <div className="p-2.5 rounded-lg border border-earth-200 bg-earth-50/50 hover:bg-forest-50/40 transition-colors text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-forest-950 flex items-center gap-1">
                    UrbanGrocers
                    <BadgeCheck className="w-3.5 h-3.5 text-forest-600" />
                  </span>
                  <span className="font-bold text-forest-900 bg-white px-1.5 py-0.5 rounded border border-earth-200">
                    ₹29/kg
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1 text-[11px] text-earth-600">
                  <span>2,000 kg demand</span>
                  <span>Pickup: Sept 21</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 03: CONNECT */}
          <div className="flex flex-col bg-[#FAF9F5] rounded-2xl p-6 sm:p-7 border border-earth-200 shadow-soft-sm hover:shadow-soft transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-earth-500 bg-earth-200/70 px-2.5 py-1 rounded">
                STEP 03
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800">
                CONNECT
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-forest-950 mb-2">
              Turn an offer into a plan.
            </h3>

            <p className="text-sm text-earth-700 leading-relaxed mb-6">
              Compare offers, confirm the selected one, and coordinate pickup
              details.
            </p>

            {/* Step 3 Visual Mockup */}
            <div className="bg-white rounded-xl p-4 border border-earth-200 shadow-soft-sm mt-auto space-y-3">
              <div className="flex items-center justify-between pb-1.5 border-b border-earth-100">
                <span className="text-[11px] font-semibold text-earth-500 uppercase tracking-wider">
                  Execution State
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-mono font-semibold">
                  Confirmed
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/80">
                  <span className="font-medium text-emerald-950">Offer selected</span>
                  <span className="text-emerald-700 font-bold">✓</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/80">
                  <span className="font-medium text-emerald-950">Buyer verified</span>
                  <span className="text-emerald-700 font-bold">✓</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/80">
                  <span className="font-medium text-emerald-950">Pickup plan prepared</span>
                  <span className="text-emerald-700 font-bold">✓</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-earth-500 text-center">
                Logistics schedule sent to buyer dispatch & farmer gate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
