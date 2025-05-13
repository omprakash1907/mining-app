import "./App.css";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import KeyBenefits from "./components/KeyBenefits";
import LearnMore from "./components/LearnMore";
import OutputValues from "./components/OutputValues";
import PricingSection from "./components/PricingSection";


function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <KeyBenefits />
          <PricingSection />
          <OutputValues />
          <LearnMore />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
