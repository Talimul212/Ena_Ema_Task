import Button from "../Components/Button";
import EnvelopeSimpleOpen from "../assets/icon/EnvelopeSimpleOpen.png";
import User from "../assets/icon/User.png";
import Phone from "../assets/icon/Phone.png";
import Star from "../assets/icon/Star.png";
import Check from "../assets/icon/Check.png";
import Lock from "../assets/icon/Lock.png";
/* eslint-disable react/no-unescaped-entities */
export default function Visitors(params: unknown) {
  return (
    <div className="bg-[#0A0F0D] pt-[120px] pb-[120px]">
      <div className="mb-10 text-center">
        <p className="text-[50px] font-[monrope] font-medium text-[#F5F5F5] leading-12 ">
          Ready to Turn Visitors Into <br />
          <span className="text-[#1FFFA5]">Real Customers? </span>
        </p>
        <p className="text-[12px] mt-5  text-[#F5F5F5] font-[200]">
          Don't settle for an average page. Get a premium, conversion-focused
          <br /> landing page that pays for itself.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#151E1B]  rounded-lg border-[#2A3C36] border-[1px] shadow-lg  p-9">
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
    </div>
  );
}
