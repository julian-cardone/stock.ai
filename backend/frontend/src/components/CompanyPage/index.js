import { useEffect } from "react";
import { useSearchData } from "../../hooks/useSearchData";
import SummaryHeader from "./Summary/SummaryHeader";

function CompanyPage({ currentSymbol }) {
  const { data: searchData, fetchSearchInfo } = useSearchData();

  useEffect(() => {
    fetchSearchInfo(currentSymbol);
  }, [currentSymbol, fetchSearchInfo]);

  return (
    <>
      {/* <MarketsCarousel /> */}
      <SummaryHeader />
    </>
  );
}

export default CompanyPage;
