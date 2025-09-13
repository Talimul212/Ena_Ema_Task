import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "./Banner";
import Advertice from "./AdvertisePage";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
export default function Main() {
  return (
    <div className="">
      <Header />
      <Banner />
      <Advertice />
      <Services />
      <CaseStudies />
      <Footer />
    </div>
  );
}
