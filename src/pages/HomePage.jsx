import FAQ from '@/components/FAQ';
import HeroSection from '@/components/HeroSection';
import KeyBenefits from '@/components/KeyBenefits';
import LearnMore from '@/components/LearnMore';
import OutputValues from '@/components/OutputValues';
import PricingSection from '@/components/PricingSection';
import React from 'react'


const HomePage = () => {
   return (
     <>
       <HeroSection />
       <KeyBenefits />
       <PricingSection />
       <OutputValues />
       <LearnMore />
       <FAQ />
     </>
   );
}

export default HomePage