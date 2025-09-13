import sparkle from "../assets/icon/Sparkle.png";
import EnvelopeSimpleOpen from "../assets/icon/EnvelopeSimpleOpen.png";
import User from "../assets/icon/User.png";
import Phone from "../assets/icon/Phone.png";
import Star from "../assets/icon/Star.png";
import Check from "../assets/icon/Check.png";
import Lock from "../assets/icon/Lock.png";
import Button from "../Components/Button";

export default function Banner() {
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <div className="bg-[#192420] flex justify-center gap-2 py-2 px-4 border-t-[1px] border-t-[#1FFFA5] shadow rounded-full text-[#B2B2B2]">
        <img src={sparkle.src} alt="sparkle" />
        <p className="text-sm">
          Trusted by 30+ startups & entrepreneurs worldwide
        </p>
      </div>
      <div className="text-[72px] font-[manrope] leading-[4rem] mt-5 tracking-tighter text-white font-bold text-center">
        Strategic Landing Pages That <br /> Convert From Just{" "}
        <span className="text-[#1FFFA5]">$200</span>
      </div>
      <div className="font-sans mt-5  font-extralight text-[#F5F5F5] text-lg text-center">
        Stop wasting traffic on generic pages. We deliver premium,
        conversion-focused landing pages designed, developed,
        <br /> and launched in just 5 days.
      </div>

      <div className="bg-[#151E1B] rounded-lg border-[#2A3C36] border-[1px] shadow-lg p-6 mt-15 p-9">
        <form action="" className="">
          <div className="flex justify-around gap-3">
            {/* Name Field */}
            <div className="flex items-center border-2  rounded-sm border-[#2A3C36] px-4 py-2">
              <img src={User.src} alt="" className="text-gray-500 mr-2" />
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full outline-none text-gray-800 placeholder-gray-500"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center  border-2  rounded-sm border-[#2A3C36] px-4 py-2">
              <img
                src={EnvelopeSimpleOpen.src}
                alt=""
                className="text-gray-500 mr-2"
              />
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full outline-none text-gray-800 placeholder-gray-500"
              />
            </div>

            {/* Phone Field */}
            <div className="flex items-center  border-2  rounded-sm border-[#2A3C36] px-4 py-2">
              <img src={Phone.src} alt="" className="text-gray-500 mr-2" />
              <input
                type="number"
                id="phoneNumber"
                placeholder="Phone Number"
                className="w-full outline-none text-gray-800 bg-none placeholder-gray-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            color={""}
            title={"Get my high-converting landing page"}
            width={"w-full"}
          />
        </form>
      </div>
      {/* Trust Badges */}
      <div className="flex justify- gap-18 items-center text-[12px] mt-6 mb-5 font-medium text-[#B2B2B2] ">
        <div className="flex items-center gap-1">
          <span>
            {" "}
            <img src={Lock.src} alt="Lock" />
          </span>
          <span>SSL Secure</span>
        </div>
        <div className="flex items-center gap-1">
          <span>
            {" "}
            <img src={Check.src} alt="Check" />
          </span>
          <span>Money-back Guaranteed</span>
        </div>
        <div className="flex items-center gap-1">
          <span>
            <img src={Star.src} alt="Star" />
          </span>
          <span>Satisfaction Guaranteed</span>
        </div>
      </div>
    </div>
  );
}
