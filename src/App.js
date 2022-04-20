import "./custom.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ZendeskAPI } from "react-zendesk";
import React, { useState, useEffect, Suspense } from "react";
const Header = React.lazy(() => import("./components/Header"));
const Banner = React.lazy(() => import("./components/Banner"));
const Experiance = React.lazy(() => import("./components/Experiance"));
const HeadingCenter = React.lazy(() => import("./components/HeadingCenter"));
const CardTabsMain = React.lazy(() => import("./components/CardTabsMain"));
const WebDesIndustry = React.lazy(() =>
  import("./components/WebDesignIndustry")
);
const BrandingBanner = React.lazy(() => import("./components/BrandingBanner"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const AllInOne = React.lazy(() => import("./components/AllInOne"));
const Transform = React.lazy(() => import("./components/Transform"));
const BotSlider = React.lazy(() => import("./components/BottomSlider"));
const FooterMain = React.lazy(() => import("./components/Footer"));
const CouponModal = React.lazy(() => import("./components/Modal"));
const Zendesk = React.lazy(() => import("react-zendesk"));

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
      <Suspense fallback={""}>
        <Header setChatShow={showChatHandler} />
      </Suspense>
      <Suspense fallback={""}>
        <Banner setShow={setShow} setChatShow={showChatHandler} />
      </Suspense>
      <Suspense fallback={""}>
        <Experiance />
      </Suspense>
      <Suspense fallback={""}>
        <HeadingCenter
          headFirst="Our Packages"
          headSec="Market’s Most Competitive Prices"
          headThird="PARTNER WITH US AND KEEP UP WITH THE LATEST MARKETING TRENDS WITHIN YOUR INDUSTRY"
        />
      </Suspense>
      <Suspense fallback={""}>
        <CardTabsMain
          setShow={setShow}
          setData={setData}
          setChatShow={showChatHandler}
        />
      </Suspense>
      <Suspense fallback={""}>
        <BrandingBanner />
      </Suspense>
      <Suspense fallback={""}>
        <AllInOne
          setShow={setShow}
          setData={setData}
          setChatShow={showChatHandler}
        />
      </Suspense>
      <Suspense fallback={""}>
        <BrandingBanner setChatShow={showChatHandler} />
      </Suspense>
      <Suspense fallback={""}>
        <WebDesIndustry setShow={setShow} setChatShow={showChatHandler} />
      </Suspense>
      <Suspense fallback={""}>
        <BrandingBanner setChatShow={showChatHandler} />
      </Suspense>
      <Suspense fallback={""}>
        <Portfolio setShow={setShow} />
      </Suspense>
      <Suspense fallback={""}>
        <Transform setShow={setShow} />
      </Suspense>
      <Suspense fallback={""}>
        <BotSlider />
      </Suspense>
      <Suspense fallback={""}>
        <FooterMain />
      </Suspense>
      <Suspense fallback={""}>
        <CouponModal
          show={show}
          setShow={setShow}
          data={data}
          setData={setData}
        />
      </Suspense>
      <Suspense fallback={""}>
        <Zendesk
          defer
          zendeskKey={ZENDESK_KEY}
          onLoaded={() => console.log("is loaded")}
        />
      </Suspense>
    </>
  );
}

export default App;
