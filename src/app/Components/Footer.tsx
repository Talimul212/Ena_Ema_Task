import logo from "../assets/Footerlogo.png";
import insta from "../assets/icon/lets-icons_insta.png";
import linkedin from "../assets/icon/mingcute_linkedin-line.png";
import fb from "../assets/icon/qlementine-icons_facebook-16.png";
import behance from "../assets/icon/ri_behance-fill.png";
import dribble from "../assets/icon/icon-park-outline_dribble.png";

export default function Footer() {
  return (
    <div className=" bg-[#1FFFA5] absolute  bottom-0 w-[100vw] flex justify-around h-40 items-center">
      <img src={logo.src} alt="Logo" className="lg:w-40 md:w-24" />
      <div className="hidden lg:block md:block">
        © All rights reserved to Ena Ema Technologies
      </div>
      <div className="">
        <div className="lg:hidden md:hidden text-sm text-justify">
          © All rights reserved to <br /> Ena Ema Technologies
        </div>
        <div className="flex gap-4">
          <img src={insta.src} alt="insta" className="lg:w-6 md:w-6 w-4" />
          <img
            src={linkedin.src}
            alt="linkedin"
            className="lg:w-6 md:w-6 w-4"
          />
          <img src={fb.src} alt="fb" className="lg:w-6 md:w-6 w-4" />
          <img src={behance.src} alt="behance" className="lg:w-6 md:w-6 w-4" />
          <img src={dribble.src} alt="dribble" className="lg:w-6 md:w-6 w-4" />
        </div>
      </div>
    </div>
  );
}
