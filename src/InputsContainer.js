import styled from "styled-components";
import InputBill from "./InputBill";
import InputNumPeople from "./InputNumPeople";
import ButtonsContainer from "./ButtonsContainer";

export default function InputsContainer(props) {
  function customActive() {
    if (props.custom !== "") {
      document.querySelectorAll(".tips").forEach((btn) => {
        btn.removeAttribute("id");
      });
    }
  }

  customActive();

  return (
    <Inputs>
      <InputBill
        button={props.button}
        setButton={props.setButton}
        billInput={props.billInput}
        setBillInput={props.setBillInput}
      />
      <ButtonsContainer
        button={props.button}
        setButton={props.setButton}
        custom={props.custom}
        setCustom={props.setCustom}
      />
      <InputNumPeople
        peopleNum={props.peopleNum}
        setPeopleNum={props.setPeopleNum}
      />
    </Inputs>
  );
}

const Inputs = styled.div`
  flex: 1;
  @media (min-width: 930px) {
    display: flex;
    flex-direction: column;
    margin: 48px;
  }
`;
