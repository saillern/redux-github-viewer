import IssueTable from "../organisms/IssueTable";

//TODO:IssueTableと統合する
export default function IssueSection({ isOpen }) {
  return (
    <>
      <IssueTable isIssuePage={isOpen} />
    </>
  );
}
