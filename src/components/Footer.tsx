import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-950 text-earth-300 py-16 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-forest-900">
          {/* Brand & Tagline */}
          <div className="text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-forest-900 text-harvest-400 flex items-center justify-center font-serif font-bold text-base border border-forest-800">
                <span className="text-emerald-400">F</span>
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-white">
                FARMBRIDGE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-earth-400 font-mono">
              “From harvest → offer → pickup.”
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm" aria-label="Footer Navigation">
            <a
              href="#problem"
              className="text-earth-300 hover:text-white transition-colors"
            >
              Problem
            </a>
            <a
              href="#workflow"
              className="text-earth-300 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#demo"
              className="text-earth-300 hover:text-white transition-colors"
            >
              Interactive Demo
            </a>
            <a
              href="#trust"
              className="text-earth-300 hover:text-white transition-colors"
            >
              Trust & Verification
            </a>
            <a
              href="#pilot"
              className="text-earth-300 hover:text-white transition-colors"
            >
              Pilot Plan
            </a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-earth-300 hover:text-white transition-colors border border-forest-800 focus-visible:ring-2 focus-visible:ring-forest-700"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Disclaimers & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-earth-500">
          <p>
            © {new Date().getFullYear()} FarmBridge · Concept product · Illustrative demo.
          </p>

          <p className="max-w-md text-left sm:text-right text-[11px] text-earth-400">
            This page is a product proposal and interface demonstration for the
            Protofine.ai Frontend Developer Intern practical task. It does not
            represent an operating commercial entity.
          </p>
        </div>
      </div>
    </footer>
  );
};
