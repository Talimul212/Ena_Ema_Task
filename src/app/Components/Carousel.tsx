import Image from "next/image";
import type { StaticImageData } from "next/image";

interface CaseStudyProps {
  image: StaticImageData;
  title: string;
  metrics: string[];
}

export default function Carousel({ image, title, metrics }: CaseStudyProps) {
  return (
    <div className="bg-[#2A3C36] rounded-xl p-6 text-white w-full max-w-sm flex-shrink-0  ">
      <Image src={image} alt={title} className="rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {metrics.map((metric, i) => (
          <li key={i} className="flex items-center gap-2 text-[#1FFFA5]">
            ✅ <span className="text-white">{metric}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
