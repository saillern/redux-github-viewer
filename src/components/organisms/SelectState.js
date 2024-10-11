import styled from "styled-components";

const Section = styled.div`
  padding: 16px;
`;
const SubTitle = styled.label`
  display: block;
  padding: 8px 0px;
`;

export function SelectState({ active, initState, handleChange }) {
  if (!active) return;
  return (
    <Section>
      <SubTitle>ステータス</SubTitle>
      <select
        name="selectStatus"
        defaultValue={initState}
        onChange={handleChange}
      >
        <option value="Open">Open</option>
        <option value="Close">Close</option>
      </select>
    </Section>
  );
}
