import styled from "styled-components";

const LinkButton = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  font-size: 1rem;
  border-radius: 6px;
  width: auto;
`;

const PrimaryButton = styled(LinkButton)`
  background: rgb(66, 195, 96);
  color: white;
  border-bottom: 2px solid rgb(40, 167, 69);
   &:hover {
    background: rgb(40, 167, 69);
    border-bottom: 2px solid rgb(32, 132, 55);
`;

const SecondaryButton = styled(LinkButton)`
  background: rgb(215, 58, 73);
  color: white;
  border-bottom: 2px solid rgb(175, 28, 42);
  &:hover {
    background: rgb(175, 28, 42);
    border-bottom: 2px solid rgb(103, 16, 25);
  }
`;

export default function Button({ variant, ...rest }) {
  if (variant === "primary") {
    return <PrimaryButton {...rest} />;
  }

  if (variant === "secondary") {
    return <SecondaryButton {...rest} />;
  }

  return <LinkButton {...rest} />;
}
