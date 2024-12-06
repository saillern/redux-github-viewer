import IssueTable from "../organisms/IssueTable";

export default function IssueSection({ isOpen }) {
  return (
    <>
      <IssueTable isIssuePage={isOpen} />
    </>
  );
}
