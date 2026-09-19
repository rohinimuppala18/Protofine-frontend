import { Clock, ArrowRight, Layers, FileText, Truck } from "lucide-react";
import { WHY_NOW_POINTS } from "../data/demoData";

export const WhyNowSection: React.FC = () => {
  const iconMap = [
    <Layers className="w-5 h-5 text-harvest-600" key="0" />,
    <FileText className="w-5 h-5 text-harvest-600" key="1" />,
    <Truck className="w-5 h-5 text-harvest-600" key="2" />,
  ];

  return (
    <section className="py-24 bg-[#FAF9F5] border-b border-earth-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-harvest-100 text-harvest-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-harvest-200">
            <Clock className="w-3.5 h-3.5 text-harvest-700" />
            <span>TIMING & PROBLEM CONTEXT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-forest-950 leading-[1.2] mb-5">
            Food moves fast. Information should move faster.
          </h2>

          <p className="text-base sm:text-lg text-earth-700 leading-relaxed">
            Perishable agricultural produce cannot wait in storage yards for days
            while brokers make fragmented inquiries. Clear, structured
            information prevents harvest value from evaporating.
          </p>
        </div>

        {/* 3 Concise Why Now Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_NOW_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-earth-200/90 shadow-soft-sm hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-200 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-xl bg-harvest-50 border border-harvest-200/60 text-harvest-700 shadow-2xs">
                    {iconMap[idx]}
                  </span>
                  <span className="font-mono text-xs font-bold text-forest-800 bg-earth-100 px-2.5 py-1 rounded-lg">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-forest-950 mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-earth-600 leading-relaxed">
                  {item.body}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-earth-100 text-xs font-semibold text-forest-800 flex items-center gap-1.5">
                <span>Core design focus</span>
                <ArrowRight className="w-3.5 h-3.5 text-harvest-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
