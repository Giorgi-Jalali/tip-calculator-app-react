import { useState } from "react";
import styled from "styled-components";
import InputsContainer from "./InputsContainer";
import ResultsContainer from "./ResultsContainer";

export default function MainContainer() {
  const [button, setButton] = useState("");
  const [billInput, setBillInput] = useState("");
  const [peopleNum, setPeopleNum] = useState("");
  const [custom, setCustom] = useState("");

  let tip;
  let totalAmount;

  function tipAmount() {
    if (button !== "") {
      tip = (billInput * button) / peopleNum / 100;
      return tip.toFixed(2);
    }
    if (custom !== "") {
      tip = (billInput * custom) / peopleNum / 100;
      return tip.toFixed(2);
    }
  }

  function total() {
    totalAmount = (billInput + tip) / peopleNum;
    return totalAmount.toFixed(2);
  }

  return (
    <Main>
      <InputsContainer
        billInput={billInput}
        setBillInput={setBillInput}
        button={button}
        setButton={setButton}
        peopleNum={peopleNum}
        setPeopleNum={setPeopleNum}
        custom={custom}
        setCustom={setCustom}
      />
      <ResultsContainer
        billInput={billInput}
        setBillInput={setBillInput}
        button={button}
        setButton={setButton}
        peopleNum={peopleNum}
        setPeopleNum={setPeopleNum}
        custom={custom}
        setCustom={setCustom}
        tipAmount={tipAmount}
        total={total}
      />
    </Main>
  );
}

const Main = styled.main`
  background-color: white;
  border-radius: 25px 25px 0px 0px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  @media (min-width: 930px) {
    box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
    border-radius: 25px;
    padding: 0;
    flex-direction: row;
  }
`;
