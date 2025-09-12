import logo from "../assets/Logo.png";

export default function Header() {
  return (
    <div className="flex justify-center">
      <img src={logo.src} alt="Logo" className="h-7 w-30 w-auto mt-6" />
    </div>
  );
}
