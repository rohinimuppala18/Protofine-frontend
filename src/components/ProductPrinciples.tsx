import { Eye, ShieldCheck, Route } from "lucide-react";
import { PRODUCT_PRINCIPLES } from "../data/demoData";

export const ProductPrinciples: React.FC = () => {
  const iconList = [
    <Eye className="w-5 h-5 text-forest-700" key="0" />,
    <ShieldCheck className="w-5 h-5 text-forest-700" key="1" />,
    <Route className="w-5 h-5 text-forest-700" key="2" />,
  ];

  return (
    <section className="py-20 bg-white border-b border-earth-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-forest-200">
            <span>FOUNDATIONAL CONSTRAINTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-forest-950 leading-[1.2] mb-3">
            Three principles guiding every screen.
          </h2>
          <p className="text-earth-600 text-sm sm:text-base">
            FarmBridge intentionally avoids speculative features to focus on the
            fundamental elements of a credible trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {PRODUCT_PRINCIPLES.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-earth-200/90 shadow-soft-sm hover:-translate-y-1 hover:shadow-soft transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 rounded-xl bg-forest-50 border border-forest-100 text-forest-800 shadow-2xs">
                    {iconList[idx]}
                  </span>
                  <span className="font-mono text-xs font-bold tracking-wider text-forest-800 uppercase bg-forest-50/80 px-2.5 py-0.5 rounded-md border border-forest-200/50">
                    {item.pillar}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-earth-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
