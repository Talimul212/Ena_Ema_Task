import ProgressCard from "../Components/Cards/ProgressCard";
import Palette from "../assets/SDLC_icon/Palette.png";
import User from "../assets/SDLC_icon/User.png";
import RocketLaunch from "../assets/SDLC_icon/RocketLaunch.png";
export default function Progress(params: unknown) {
  const steps = [
    {
      day: "Day 1",
      title: "Book Your Project",
      description: "Fill out a short form and we’ll get started immediately.",
      icon: User, // Replace with your actual icon path
    },
    {
      day: "Day 2–4",
      title: "Design & Development",
      description:
        "Unlimited revisions until you’re perfect. You’re involved every step.",
      icon: Palette,
    },
    {
      day: "Day 5",
      title: "Launch",
      description:
        "Fully deployed on your hosting and ready to convert visitors.",
      icon: RocketLaunch,
    },
  ];

  return (
    <div>
      <div className=" bg-[#192420] text-white py-20 px-6 sm:px-20">
        {/* Glow effect */}
        <div className="absolute mt-[-500px] left-10 transform -translate-x-1/2 translate-y-1/2 w-[600px] h-[700px] bg-gradient-to-t from-[#1fffa560] to-transparent rounded-full blur-xl opacity-25 transition-opacity duration-500 pointer-events-none" />
        <div className=" ">
          <div className="text-[50px] mt-10 text-center font-[manrope] leading-[4rem]  tracking-tighter text-white font-bold ">
            From Idea to Live Landing Page in{" "}
            <span className="text-[#1FFFA5]">Just 5 Days</span>
          </div>
          <div className="font-sans mt-3  font-extralight text-[#F5F5F5] text-lg text-center">
            Our streamlined process ensures fast delivery without compromising
            quality.
          </div>
        </div>
        <div className=" relative z-50">
          <ProgressCard steps={steps} />
        </div>
      </div>
    </div>
  );
}
