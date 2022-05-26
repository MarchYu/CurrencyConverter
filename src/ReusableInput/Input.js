import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
export const Input = ({ placeholder, onChange, value }) => {
  return (
    <IconContainer>
      <Icon icon="bank-account" color="DarkSlateBlue" size={18} />
      <StyledInput
        type="number"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </IconContainer>
  );
};

const StyledInput = styled.input`
  padding-left: 4px;

  outline: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid #004777;
  background: #f4f4f8;
  color: #004777;
  font-size: 1.3em;
  font-family: Avenir;
  &::placeholder {
    color: #004777;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  span {
    margin-right: 10px;
  }
`;
