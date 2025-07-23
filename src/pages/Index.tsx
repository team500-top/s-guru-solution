import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Advantages from "@/components/sections/Advantages";
import Cases from "@/components/sections/Cases";
import Team from "@/components/sections/Team";
import Process from "@/components/sections/Process";
import LeadMagnet from "@/components/sections/LeadMagnet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Pricing />
      <Advantages />
      <Cases />
      <Team />
      <Process />
      <LeadMagnet />
    </div>
  );
};

export default Index;
