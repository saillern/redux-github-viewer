import { MainPage, MainSection } from "../molecules/MainPagePart";
import HeaderSection from "../organisms/HeaderSection";
import IssueTableSection from "../organisms/IssueTable";
import IssueHeaderSection from "../organisms/IssueHeader";

let isIssuePage = true;
export default function IssuePage() {
  return (
    <>
      <HeaderSection />
      <MainPage>
        <MainSection>
          <IssueHeaderSection isIssueHeader={isIssuePage} />
          <IssueTableSection isIssuePage={isIssuePage} />
        </MainSection>
      </MainPage>
    </>
  );
}
