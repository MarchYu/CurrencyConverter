import { FormSelect } from "react-bootstrap";
import styled from "styled-components";
import { IconContainer } from "../ReusableInput/Input";
import { Icon } from "@blueprintjs/core";

export const Select = ({ children, onChange }) => {
  return (
    <IconContainer>
      <Icon icon="exchange" color="DarkSlateBlue" size={18} />
      <StyledSelect onChange={onChange}>{children}</StyledSelect>
    </IconContainer>
  );
};

const StyledSelect = styled(FormSelect)`
  border: none;
  outline: none;
  margin-bottom: 15px;
  text-decoration: none;
  border-bottom: 1px solid #004777;

  background: #f4f4f8;
  font-family: Avenir;
  font-size: 1.3em;
  width: 100%;
  color: #004777;
`;
