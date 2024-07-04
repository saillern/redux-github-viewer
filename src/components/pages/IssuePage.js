import { MainBody, MainSection } from "../molecules/MainPagePart";
import HeaderSection from "../organisms/HeaderSection";
import IssueTableSection from "../organisms/IssueTable";
import IssueHeader from "../organisms/IssueHeader";

//useStateで書き換える
let isIssuePage = true;
export default function IssuePage() {
  return (
    <>
      <HeaderSection />
      <MainBody>
        <MainSection>
          <IssueHeader isIssueHeader={isIssuePage} />
          <IssueTableSection isIssuePage={isIssuePage} />
        </MainSection>
      </MainBody>
    </>
  );
}
