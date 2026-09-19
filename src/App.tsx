import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { WorkflowSection } from "./components/WorkflowSection";
import { MarketplaceDemo } from "./components/MarketplaceDemo";
import { TrustSection } from "./components/TrustSection";
import { WhyNowSection } from "./components/WhyNowSection";
import { ProductPrinciples } from "./components/ProductPrinciples";
import { PilotSection } from "./components/PilotSection";
import { FinalCTA } from "./components/FinalCTA";
import { PilotModal } from "./components/PilotModal";
import { Footer } from "./components/Footer";

export function App() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState<boolean>(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-earth-900 selection:bg-forest-100 selection:text-forest-900">
      {/* Navigation */}
      <Navbar onOpenDemo={() => handleScrollTo("demo")} />

      {/* Main Pitch Content */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onSeeAction={() => handleScrollTo("demo")}
          onExploreProblem={() => handleScrollTo("problem")}
        />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Workflow Section (How It Works) */}
        <WorkflowSection />

        {/* 4. Interactive Marketplace Simulation Demo */}
        <MarketplaceDemo />

        {/* 5. Trust & Verification Section */}
        <TrustSection />

        {/* 6. Why Now Section */}
        <WhyNowSection />

        {/* 7. Product Principles */}
        <ProductPrinciples />

        {/* 8. Pilot & Funding Section (Roadmap + Metrics) */}
        <PilotSection onOpenPitchModal={() => setIsPilotModalOpen(true)} />

        {/* 9. Final CTA */}
        <FinalCTA
          onBackPilot={() => setIsPilotModalOpen(true)}
          onSeeWorkflow={() => handleScrollTo("workflow")}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pilot Pitch Modal */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={() => setIsPilotModalOpen(false)}
        onViewPlan={() => handleScrollTo("pilot")}
      />
    </div>
  );
}

export default App;
