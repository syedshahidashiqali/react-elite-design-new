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
import Zendesk from "react-zendesk";
import { ZendeskAPI } from "react-zendesk";

// const ZENDESK_KEY = "web_widget/vitaldesigning455.zendesk.com";
const ZENDESK_KEY = "ed5a201c-1d9d-4367-afb1-6037decdb7a7";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const showChatHandler = (e) => {
    e.preventDefault();
    return ZendeskAPI("messenger", "open");
  };

  return (
    <>
      <Header setChatShow={showChatHandler} />
      <Banner setShow={setShow} setChatShow={showChatHandler} />
      <Experiance />
      <HeadingCenter
        headFirst="Our Packages"
        headSec="Market’s Most Competitive Prices"
        headThird="PARTNER WITH US AND KEEP UP WITH THE LATEST MARKETING TRENDS WITHIN YOUR INDUSTRY"
      />
      <CardTabsMain
        setShow={setShow}
        setData={setData}
        setChatShow={showChatHandler}
      />
      <BrandingBanner />
      <AllInOne
        setShow={setShow}
        setData={setData}
        setChatShow={showChatHandler}
      />
      <BrandingBanner setChatShow={showChatHandler} />
      <WebDesIndustry setShow={setShow} setChatShow={showChatHandler} />
      <BrandingBanner setChatShow={showChatHandler} />
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
      <Zendesk
        defer
        zendeskKey={ZENDESK_KEY}
        onLoaded={() => console.log("is loaded")}
      />
    </>
  );
}

export default App;
