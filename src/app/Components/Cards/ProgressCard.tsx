/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from "next/image";

type StepType = {
  day: string;
  title: string;
  description: string;
  icon: StaticImageData;
};

type ProgressCardProps = {
  steps: StepType[];
};

export default function ProgressCard({ steps }: ProgressCardProps) {
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-[#192420] rounded-xl p-6 text-center shadow-2xl border-t-[1px] border-black hover:border-[#1FFFA5] transition duration-300"
        >
          <div className="mt-[-40px] ms-[-25px] text-xs absolute  font-[200px] bg-[#192420] text-[#1FFFA5] border-[1px] px-3 py-1 rounded-full inline-block mb-4">
            {step.day}
          </div>
          <div className="bg-[#003D25] mx-auto my-8 w-20 h-20 flex justify-center items-center  rounded-full">
            <img
              src={step.icon.src}
              alt={step.title}
              className="mx-auto w-9 h-9 "
            />
          </div>
          <h3 className="text-[20px] font-semibold text-[#F5F5F5]">
            {step.title}
          </h3>
          <p className="mt-2 text-sm text-[#B2B2B2]">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
