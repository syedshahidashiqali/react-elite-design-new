import "./custom.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Experiance from "./components/Experiance";
import HeadingCenter from "./components/HeadingCenter";
import CardTabsMain from "./components/CardTabsMain";
import WebDesIndustry from "./components/WebDesignIndustry";
import BrandingBanner from "./components/BrandingBanner";
import Portfolio from "./components/Portfolio";
import AllInOne from "./components/AllInOne";
import Transform from "./components/Transform";
import BotSlider from "./components/BottomSlider";
import FooterMain from "./components/Footer";
import { useState, useEffect } from "react";
import CouponModal from "./components/Modal";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Banner setShow={setShow} />
      <Experiance />
      <HeadingCenter
        headFirst="Our Packages"
        headSec="Market’s Most Competitive Prices"
        headThird="PARTNER WITH US AND KEEP UP WITH THE LATEST MARKETING TRENDS WITHIN YOUR INDUSTRY"
      />
      <CardTabsMain setShow={setShow} setData={setData} />
      <BrandingBanner />
      <AllInOne setShow={setShow} setData={setData} />
      <BrandingBanner />
      <WebDesIndustry setShow={setShow} />
      <BrandingBanner />
      <Portfolio setShow={setShow} />
      <Transform setShow={setShow} />
      <BotSlider />
      <FooterMain />
      <CouponModal
        show={show}
        setShow={setShow}
        data={data}
        setData={setData}
      />
    </>
  );
}

export default App;
