import { Header } from "./Header/Header";
import { StyledContainer } from "./StyledContainer/StyledContainer";
import { Main } from "./Main/Main";
import { useEffect, useState } from "react";

function App() {
  return (
    <StyledContainer>
      <Header />
      <Main />
    </StyledContainer>
  );
}

export default App;

/*  useEffect(() => {
  async function getData() {
    let res = await fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    );
    let a = await res.json();
    let resp = await a.filter(
      (item) => item.cc === "USD" || item.cc === "EUR"
    );
    setCurrencies(resp);
  }
  getData();
 }, []);*/
