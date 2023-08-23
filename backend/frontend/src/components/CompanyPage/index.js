import { useEffect } from "react";
import { useSearchData } from "../../hooks/useSearchData";
import Summary from "./Summary";

function CompanyPage({ currentSymbol }) {
  const { data: searchData, fetchSearchInfo } = useSearchData();

  useEffect(() => {
    fetchSearchInfo(currentSymbol);
  }, [currentSymbol, fetchSearchInfo]);

  return (
    <>
      {/* <MarketsCarousel /> */}
      <Summary searchData={searchData} />
    </>
  );
}

export default CompanyPage;
