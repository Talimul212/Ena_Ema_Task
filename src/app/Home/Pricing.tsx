import PricingCard from "../Components/PricingCard";
import SpecialCard from "../Components/SpecialCard";
const pricingPlans = [
  {
    title: "Basic",
    price: "200",
    subtitle: "Perfect for solopreneurs",
    features: [
      "Landing Page Design + Development",
      "1 Custom Section",
      "5-Day Delivery",
      "Basic Animation",
      "Priority Support",
    ],
  },
  {
    title: "Standard",
    price: "300",
    subtitle: "Best balance of value & features",
    features: [
      "Everything in Basic",
      "Extra Custom Section",
      "Free Hosting Setup",
      "Free Consultation Call",
      "Priority Support",
    ],
    highlight: "Most popular",
    isPopular: true,
  },
  {
    title: "Premium",
    price: "500",
    subtitle: "For brands & agencies",
    features: [
      "Everything in Standard",
      "Advanced Animations",
      "Additional Page (Optional)",
      "3 Months Free Support",
      "Performance Optimization",
    ],
  },
];
export default function Pricing(params: unknown) {
  return (
    <div className="bg-[#0A0F0D] px-20 pt-30 mt-[2px] ">
      <div>
        <div className="text-[50px] font-[manrope] leading-[4rem]  tracking-tighter text-white font-bold text-start">
          Simple, Transparent Pricing —
          <span className="text-[#1FFFA5]"> Choose Your Plan</span>
        </div>
        <div className="font-sans mt-5  font-extralight text-[#F5F5F5] text-lg text-start">
          No hidden fees, no surprises. Just premium landing pages at unbeatable
          prices.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} index={index} {...plan} />
        ))}
      </div>
      <SpecialCard />
    </div>
  );
}
