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

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Experiance />
      <HeadingCenter
        headFirst="Our Packages"
        headSec="Market’s Most Competitive Prices"
        headThird="PARTNER WITH US AND KEEP UP WITH THE LATEST MARKETING TRENDS WITHIN YOUR INDUSTRY"
      />
      <CardTabsMain />
      <BrandingBanner />
      <AllInOne />
      <BrandingBanner />
      <WebDesIndustry />
      <BrandingBanner />
      <Portfolio />
      <Transform />
    </>
  );
}

export default App;
