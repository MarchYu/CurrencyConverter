import { StyledHeader } from "./StyledHeader";
import { Icon } from "@blueprintjs/core";
import { useEffect, useState } from "react";

export const Header = () => {
  const [usd, setUsd] = useState();
  const [euro, setEuro] = useState();

  useEffect(() => {
    async function getData() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `https://v1.nocodeapi.com/mydata/cx/AtXnvJIKHQXcNGfb/rates?source=UAH&target=USD,EUR
        `,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setUsd((1 / result.rates.USD).toFixed(2));
          setEuro((1 / result.rates.EUR).toFixed(2));
        })

        .catch((error) => console.log("error", error));
    }
    getData();
  }, []);

  return (
    <StyledHeader>
      <div className="icon">
        <Icon icon="dollar" size={13} color="LightGreen" />
        <div>USD</div> &nbsp;
        <div>{usd}</div>
      </div>
      <div className="icon">
        <Icon icon="euro" size={13} color="LightGreen" />
        <div>EUR</div> &nbsp;
        <div>{euro}</div>
      </div>
    </StyledHeader>
  );
};
