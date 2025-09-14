import logo from "../assets/Logo.png";

export default function Header() {
  return (
    <div className="flex justify-center">
      <div className="absolute mt-[-800px] left-1/2 transform -translate-x-1/2 translate-y-1/2 md:w-[600px] md:h-[700px] w-auto bg-gradient-to-t from-[#1fffa560] to-transparent rounded-full blur-xl opacity-20 transition-opacity duration-500 pointer-events-none" />
      <img src={logo.src} alt="Logo" className="h-7 w-30 w-auto mt-6" />
    </div>
  );
}
