import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { issues } from "../../features/IssueSlice";
import IssueTableRow from "./IssueTableRow";

const Scroll = styled.div`
  overflow: scroll;
`;

//Fixed: 個別に定義する (前回レビュー箇所)
const Header = styled.th`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid rgb(225, 228, 232);
  &:first-child {
    min-width: auto;
  }
`;

const TableStyle = styled.table`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
  .outline {
    width: 140rem;
  }
`;

const issueStatus = {
  title: "",
  status: "ステータス",
  author: "作成者",
  created: "作成日付",
  updated: "更新日付",
};

//TODO: Checkboxの動作 全選択とソート機能を追加 対応中
export default function IssueTable({ isIssuePage }) {
  const issueList = useSelector(issues);
  const [checkedHeader, setCheckedHeader] = useState(false);
  const [num, setnum] = useState(issueList.length);
  const [checked, setChecked] = useState(Array(num).fill(false));
  const [active, setActive] = useState(Array(num).fill(true));

  function onClickHeader() {
    setCheckedHeader(!checkedHeader);
    setChecked(checked.fill(!checkedHeader));
    console.log(checked);
  }

  function onClickCheckBox(i) {
    setChecked(!checked[i]);
  }
  if (!isIssuePage) return;
  return (
    <Scroll>
      <TableStyle>
        <thead>
          <tr>
            <Header>
              <input
                type="checkbox"
                checked={checkedHeader}
                onClick={() => onClickHeader()}
              ></input>
            </Header>
            {Object.values(issueStatus).map((value) => {
              return <Header key={value}>{value}</Header>;
            })}
          </tr>
          {issueList.map(
            (val, i) =>
              active[i] && (
                <IssueTableRow
                  key={i}
                  issueParam={[issueList[i], checked[i]]}
                />
              ),
          )}
        </thead>
      </TableStyle>
    </Scroll>
  );
}
