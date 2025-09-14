/* eslint-disable @next/next/no-img-element */
import logo from "../assets/Logo.png";
import whatappIcon from "../assets/whatsappIcon.webp";

export default function Header() {
  return (
    <div className="flex justify-center">
      <div className="absolute mt-[-800px] left-1/2 transform -translate-x-1/2 translate-y-1/2 md:w-[600px] md:h-[700px] w-auto bg-gradient-to-t from-[#1fffa560] to-transparent rounded-full blur-xl opacity-20 transition-opacity duration-500 pointer-events-none" />
      <img src={logo.src} alt="Logo" className="h-7 w-30  mt-6" />
      <a
        title="Contact Us"
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <img
          src={whatappIcon.src}
          alt="Chat on WhatsApp"
          className="md:h-[60px] h-16 border-[2px] border-[#1FFFA5]  w-auto bg-white rounded-4xl fixed bottom-6 right-6 z-50 cursor-pointer"
        />
      </a>
    </div>
  );
}
