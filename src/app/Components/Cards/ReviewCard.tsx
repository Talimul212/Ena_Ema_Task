import { StaticImageData } from "next/image";

/* eslint-disable @next/next/no-img-element */
type ReviewCardType = {
  name: string;
  title: string;
  quote: string;
  image: StaticImageData;
};

export default function ReviewCard({
  name,
  title,
  quote,
  image,
}: ReviewCardType) {
  return (
    <div className="bg-[#1E2B26] rounded-xl p-6 text-white border border-[#2C3A35] hover:border-[#1FFFA5] transition duration-300 shadow-md hover:shadow-lg max-w-sm">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[#1FFFA5] text-lg mb-6">
            ★
          </span>
        ))}
      </div>
      <p className="text-[16px] text-justify text-[#F5F5F5] font-light mb-6">
        “{quote}”
      </p>
      <div className="flex items-center gap-4 mt-9">
        <img
          src={image.src}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-sm font-semibold text-[#F5F5F5]">{name}</h4>
          <p className="text-xs text-[#B2B2B2]">{title}</p>
        </div>
      </div>
    </div>
  );
}
