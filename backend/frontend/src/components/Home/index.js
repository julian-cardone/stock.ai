import "./home.css";
import "../../animate.css";
import FeaturesDisplay from "./FeaturesSection";
import { useEffect } from "react";
import { useHomePageData } from "../../hooks/useHomePageData";
// import { isMarketOpen } from "../../utils/isMarketOpen";
import WelcomeDiv from "./WelcomeSection";
import FooterSection from "./FooterSection";

function Home() {
  const { loading, realTimeHomePageData, fetchRealTimeHeaderData } =
    useHomePageData();

  useEffect(() => {
    fetchRealTimeHeaderData();
    // if (isMarketOpen()) {
    //   const searchInfoInterval = setInterval(() => {
    //     fetchRealTimeHeaderData();
    //   }, 5000);

    //   return () => {
    //     clearInterval(searchInfoInterval);
    //   };
    // }
  }, [fetchRealTimeHeaderData]);

  return (
    <>
      <div className="container-fluid px-0 container-spacing">
        <WelcomeDiv
          loading={loading}
          realTimeHomePageData={realTimeHomePageData}
        />
        <FeaturesDisplay />
        <FooterSection />
      </div>
    </>
  );
}

export default Home;
