import { useContext } from "react";
import SummaryHeader from "./SummaryHeader";
import { AppContext } from "../../utils/context";

function CompanyPage({ searchData }) {
  const { cache } = useContext(AppContext);
  console.log(searchData);

  return (
    <>
      {/* <MarketsCarousel /> */}
      <SummaryHeader searchData={searchData} cache={cache} />
    </>
  );
}

export default CompanyPage;
