import WePlanImage from "../assets/Carousel/MacBook Pro 16_ - 2.png";
import FlowpilotImage from "../assets/Carousel/MacBook Pro 16_ - 1.png";
import GrowthSummitImage from "../assets/Carousel/MacBook Pro 16_ - 3.png";
import Carousel from "../Components/Carousel";

export default function CaseStudies(params: unknown) {
  const studies = [
    {
      image: WePlanImage,
      title: "We Plan, You Shine",
      metrics: [
        "37% uplift in conversion for the average 6-week test",
        "Clean and modern design with clear CTA",
      ],
    },
    {
      image: FlowpilotImage,
      title: "Flowpilot",
      metrics: [
        "31% uplift in conversion for the average 6-week test",
        "Clean and modern design with clear CTA",
      ],
    },
    {
      image: GrowthSummitImage,
      title: "GrowthSummit",
      metrics: [
        "37% uplift in conversion for the average 6-week test",
        "Clean and modern design with clear CTA",
      ],
    },
  ];

  return (
    <div className="bg-[#0A0F0D] mt-20">
      <div className="mb-10 text-center pt-20">
        <p className="text-[40px] font-[monrope] font-medium text-[#F5F5F5] leading-tight">
          Case Studies
        </p>
        <p className="text-[12px] text-[#F5F5F5] mt-3 font-[200]">
          See the designs that delivered results
        </p>
      </div>
      <div className="overflow-x-auto gap-6 scrollbar-hide px-2 flex justify-center">
        {studies.map((study, index) => (
          <Carousel
            key={index}
            image={study.image}
            title={study.title}
            metrics={study.metrics}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="mt-10 bg-[#1FFFA5] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#17e88f] transition">
          I want similar results
        </button>
      </div>
    </div>
  );
}
