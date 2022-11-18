import styled from "styled-components";
import TipTotalResults from "./TipTotalResults";
import ResetButton from "./ResetButton";

export default function ResultsContainer(props) {
  return (
    <ResultsDiv>
      <TipTotalResults
        button={props.button}
        billInput={props.billInput}
        peopleNum={props.peopleNum}
        custom={props.custom}
        tipAmount={props.tipAmount}
        total={props.total}
      />
      <ResetButton
        setBillInput={props.setBillInput}
        setButton={props.setButton}
        setPeopleNum={props.setPeopleNum}
        setCustom={props.setCustom}
      />
    </ResultsDiv>
  );
}

const ResultsDiv = styled.div`
  background: #00474b;
  border-radius: 15px;
  padding: 39px 24px 24px 24px;
  @media (min-width: 930px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 40px;
    margin: 32px 32px 32px 0;
  }
`;
