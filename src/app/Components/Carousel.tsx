import Image from "next/image";
import type { StaticImageData } from "next/image";
import CheckCar from "../assets/icon/CheckCar.png";
interface CaseStudyProps {
  image: StaticImageData;
  title: string;
  metrics: string[];
}

export default function Carousel({ image, title, metrics }: CaseStudyProps) {
  return (
    <div className="bg-[#151E1B] w-[583px] border-2 border-[#2A3C36] rounded-xl p-6 text-white  flex-shrink-0  ">
      <Image src={image} alt={title} className="rounded-md mb-4" />
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <div className="flex flex-col items-end gap-[6px]">
        {metrics.map((metric, i) => (
          <li
            key={i}
            className="flex items-center gap-2 bg-[#003D25] py-2 px-4 rounded-full max-w-[80%] justify-end"
          >
            <img src={CheckCar.src} alt="Check Mark" className="w-4 h-4" />
            <span className="text-[#B2B2B2] text-[12px] text-right">
              {metric}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}
