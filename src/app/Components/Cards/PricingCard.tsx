/* eslint-disable @next/next/no-img-element */
import React from "react";
import Ellipse from "../../assets/icon/Ellipse 2.png"; // Replace with your actual check icon
import Button from "../Button";

type PricingCardType = {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  highlight?: string;
  isPopular?: boolean;
  index: number;
};

export default function PricingCard(params: PricingCardType) {
  const { title, price, subtitle, features, highlight, isPopular, index } =
    params;

  return (
    <div
      className={`relative bg-[#1A1A1A] rounded-2xl p-7  lg:w-[425px] md:w-[100%] lg:max-w-sm border-[2px] ${
        isPopular ? "border-[#1FFFA5] shadow-lg" : "border-[#333]"
      }`}
    >
      {highlight && (
        <div className="absolute -top-4 left-4 text-[#1FFFA5] border-[2px] font-[200] border-[#1FFFA5] bg-[#1A1A1A] text-xs px-3 py-1 rounded-full">
          {highlight}
        </div>
      )}
      <div className="flex  justify-between items-center">
        <div className="text-white text-2xl font-bold">{title}</div>
        <div className="text-[#1FFFA5] text-2xl font-bold mt-4">${price}</div>
      </div>
      <div className="text-[#B2B2B2] mt-1 text-[14px]">{subtitle}</div>
      <div className="border-[1px] border-[#2A3C36] my-10"></div>
      <ul className="mt-6 flex flex-col gap-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 rounded-full">
            <img src={Ellipse.src} alt="✓" className="w-[7px] h-[7px]" />
            <span className="text-[#B2B2B2] text-[12px]">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-9">
        {index % 2 == 0 ? (
          <Button color={"#003D25"} title="Start my project " width="w-full" />
        ) : (
          <Button color={""} title="Start my project " width="w-full" />
        )}
      </div>
    </div>
  );
}
