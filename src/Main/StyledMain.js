import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .col {
    margin-top: 2em;
    border-radius: 10px;
    padding: 20px;
    box-shadow: -1px -1px 16px 0px rgba(0, 0, 0, 0.28);
    font-family: Avenir;
    color: #004777;
  }
  .title {
    margin-top: 40px;
    font-family: Avenir;
    color: #004777;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8%;
    font-size: 0.8em;
    .bp4-icon {
      color: gold;
      margin-right: 2px;
      margin-top: 5px;
    }
  }
`;
// датаою получити курс валют.
