import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "How It Works", href: "#workflow" },
    { label: "Demo", href: "#demo" },
    { label: "Trust", href: "#trust" },
    { label: "Pilot", href: "#pilot" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F5]/90 backdrop-blur-md py-3 shadow-soft-sm border-b border-earth-200/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-forest-700 rounded-lg p-1 -m-1"
            aria-label="FarmBridge Home"
          >
            <div className="w-9 h-9 rounded-xl bg-forest-900 text-harvest-400 flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:bg-forest-800 transition-colors">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-emerald-400 fill-current"
                aria-hidden="true"
              >
                <path d="M12 2C12 7 8 11 8 11C8 11 11 11 12 8C13 11 16 11 16 11C16 11 12 7 12 2Z" />
                <path
                  d="M5 19C9 14 15 14 19 19"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="12" cy="15" r="1.5" className="text-amber-400" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-lg tracking-tight text-forest-950 leading-none">
                FARMBRIDGE
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-earth-500 mt-0.5">
                Harvest to Market
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-2 lg:gap-3 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-earth-200/80 shadow-soft-sm"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs lg:text-sm font-medium text-earth-700 hover:text-forest-950 hover:bg-earth-100/80 transition-all focus-visible:ring-2 focus-visible:ring-forest-700 rounded-full px-3 py-1.5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => {
                onOpenDemo();
                handleNavClick("#demo");
              }}
              className="inline-flex items-center gap-1.5 bg-forest-900 hover:bg-forest-800 text-warm-cream px-4.5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-soft-sm hover:shadow-soft hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border border-forest-700/60 focus-visible:ring-2 focus-visible:ring-forest-700"
            >
              <span>Try the Demo →</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => {
                onOpenDemo();
                handleNavClick("#demo");
              }}
              className="bg-forest-900 text-warm-cream px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide"
            >
              Demo
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-earth-700 hover:text-forest-900 hover:bg-earth-100 rounded-lg focus-visible:ring-2 focus-visible:ring-forest-700"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-earth-200 shadow-soft-lg px-4 pt-3 pb-6 animate-fade-in">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-earth-800 hover:text-forest-900 hover:bg-earth-100/60 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-earth-200">
              <button
                onClick={() => {
                  onOpenDemo();
                  handleNavClick("#demo");
                }}
                className="w-full flex items-center justify-center gap-2 bg-forest-900 text-warm-cream py-2.5 rounded-xl font-semibold text-sm shadow-soft-sm"
              >
                <span>Try the Demo →</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
