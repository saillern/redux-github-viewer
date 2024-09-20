import IssueTable from "../organisms/IssueTable";
import IssueHeader from "../organisms/IssueHeader";
import { useState } from "react";

export default function IssueSection({ isOpen }) {
  const [searchWord, setSearchWord] = useState("");
  return (
    <>
      <IssueHeader
        isIssueHeader={isOpen}
        text={searchWord}
        changeWord={setSearchWord}
      />
      <IssueTable isIssuePage={isOpen} searchWord={searchWord} />
    </>
  );
}
