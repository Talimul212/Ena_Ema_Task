import Card from "../Components/Card";
import Trophy from "../assets/Cardicon/Trophy.png";
import RocketLaunch from "../assets/Cardicon/RocketLaunch.png";
import Palette from "../assets/Cardicon/Palette.png";
import Lightning from "../assets/Cardicon/Lightning.png";
import ArrowsClockwise from "../assets/Cardicon/ArrowsClockwise.png";
import CurrencyDollar from "../assets/Cardicon/CurrencyDollar.png";
export default function Services() {
  const features = [
    {
      icon: RocketLaunch,
      title: "Proven Conversion Framework",
      description:
        "Designs based on 100+ tested layouts that actually convert visitors into customers.",
    },
    {
      icon: Palette,
      title: "Agency Level Design",
      description:
        "Modern, premium, and tailored for your brand — without the agency price tag.",
    },
    {
      icon: Lightning,
      title: "5-day Guaranteed Delivery",
      description:
        "With a highly professional team, we deliver on time, every time.",
    },
    {
      icon: CurrencyDollar,
      title: "Transparent Pricing",
      description:
        "No hidden fees, just clear value. What you see is what you get.",
    },
    {
      icon: ArrowsClockwise,
      title: "Revisions Until You’re Happy",
      description:
        "We keep working until it’s right. Your satisfaction is guaranteed.",
    },
    {
      icon: Trophy,
      title: "Results That Speak",
      description:
        "Our pages consistently outperform industry averages for conversions.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center md:mt-0 mt-[-60px] ">
      <div className="mb-10 text-center">
        <p className="text-[50px] font-[monrope] font-medium text-[#F5F5F5] lg:px-none md:px-20 leading-tight">
          Why Businesses <span className="text-[#1FFFA5]">Trust Us </span>
          With Their Designs
        </p>
        <p className="text-[16px] text-[#F5F5F5] mt-5 font-[200] lg:px-none md:px-20">
          We combine proven conversion frameworks with agency-level design to
          deliver results that matter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-6 lg:px-none px-10">
        {features.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
