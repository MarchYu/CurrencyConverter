import { StyledMain } from "./StyledMain";
import { Input } from "../ReusableInput/Input";
import { Select } from "../ReusableSelect/Select";
import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Icon } from "@blueprintjs/core";

export const Main = () => {
  const [firstInput, setFirstInput] = useState(1);
  const [secondtInput, setSecondInput] = useState();
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("UAH");
  const [rate, setRate] = useState();
  useEffect(() => {
    if (firstCurrency && secondCurrency) {
      async function getData() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
          method: "get",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(
          `https://v1.nocodeapi.com/mydata/cx/AtXnvJIKHQXcNGfb/rates?source=${firstCurrency}&target=${secondCurrency}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => setRate(result.rates[secondCurrency]))
          .catch((error) => console.log("error", error));
      }
      getData();
    }
  }, [firstCurrency, secondCurrency]);
  useEffect(() => {
    if (!secondtInput && rate) {
      setSecondInput((firstInput * rate).toFixed(2));
    }
  }, [rate, secondtInput]);

  const onFirstInputChange = (e) => {
    setFirstInput(e.target.value);
    setSecondInput((e.target.value * rate).toFixed(2));
  };
  const onSecondInputChange = (e) => {
    setSecondInput(e.target.value);
    setFirstInput((e.target.value / rate).toFixed(2));
    console.log((e.target.value / rate).toFixed(2));
  };
  const onFirstCurrencyChange = (e) => setFirstCurrency(e.target.value);
  const onSecondCurrencyChange = (e) => setSecondCurrency(e.target.value);

  return (
    <StyledMain>
      <div className="title">
        <Icon icon="database" color="DarkOrange" size={15} />
        <h2>Currency Converter</h2>
      </div>

      <Col>
        <div>Select Currency :</div>
        <Select onChange={onFirstCurrencyChange}>
          <option hidden>Please select currency</option>
          <option selected>USD</option>
          <option>UAH</option>
          <option>EUR</option>
        </Select>
        <div>Enter Amount :</div>
        <Input
          value={firstInput}
          placeholder="Please enter amount"
          onChange={onFirstInputChange}
        />
      </Col>

      <Col>
        <div>Select Currency :</div>
        <Select onChange={onSecondCurrencyChange}>
          <option hidden>Please select currency</option>
          <option>USD</option>
          <option selected>UAH</option>
          <option>EUR</option>
        </Select>
        <div>Enter Amount :</div>
        <Input
          value={secondtInput}
          placeholder="Please enter amount"
          onChange={onSecondInputChange}
        />
      </Col>
    </StyledMain>
  );
};
