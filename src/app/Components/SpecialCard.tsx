import Lightning from "../assets/Cardicon/Lightning.png";
import Button from "./Button";
export default function SpecialCard(params: unknown) {
  return (
    <div className="mt-12">
      <div className="flex gap-3 items-center">
        <img src={Lightning.src} alt="lighting" className="h-full mt-5" />
        <div>
          <p className="text-[24px] font-[manrope] leading-[4rem]  tracking-tighter text-white font-bold text-start">
            Limited Availability
          </p>
          <div className="font-sans mt-[-10px] font-extralight text-[#F5F5F5]  text-sm text-start">
            We only onboard 5 new clients per month. 2 spots left for this month
            — secure yours today.
          </div>
        </div>
      </div>
      <div className="bg-[#192420] rounded-[16px] mt-12 py-12 flex flex-col justify-center items-center">
        <div>
          <p className="text-[48px] font-[manrope] leading-[4rem]  tracking-tighter text-white font-bold text-center">
            Special Offer For Early Clients
          </p>
          <div className="font-sans mt-2 font-extralight text-[#F5F5F5] text-lg text-center">
            Get 10% OFF + Free Hosting Setup when you book this week.
          </div>
        </div>
        <Button
          title={"Claim my 10% discount"}
          color={""}
          width={"w-auto px-4 mt-12 mb-2"}
        />
      </div>
    </div>
  );
}
