import { StaticImageData } from "next/image";

interface CardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="relative group bg-[#1E2B26] text-white rounded-lg border border-[#1E2B26] hover:border-[#1FFFA5] duration-300 p-6 w-full max-w-sm shadow-md hover:shadow-lg transition">
      {/* Glow effect */}
      <div className="absolute bottom-[56px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-72 h-24 bg-gradient-to-t from-[#1fffa560] to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="text-[#1FFFA5] text-3xl mb-6">
        <img src={icon.src} alt="" className="w-12" />
      </div>
      <h3 className="text-sm font-semibold mb-2 text-[#F5F5F5]">{title}</h3>
      <p className="text-sm text-[#F5F5F5] font-[200]">{description}</p>
    </div>
  );
}
