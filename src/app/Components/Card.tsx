import { StaticImageData } from "next/image";

interface CardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="bg-[#1E2B26] text-white rounded-lg p-6 w-full max-w-sm shadow-md hover:shadow-lg transition">
      <div className="text-[#1FFFA5] text-3xl mb-6">
        <img src={icon.src} alt="" className="w-12 " />
      </div>
      <h3 className="text-sm font-semibold mb-2 text-[#F5F5F5]">{title}</h3>
      <p className="text-sm text-[#F5F5F5] font-[200]">{description}</p>
    </div>
  );
}
