import styled from "styled-components";

export default function ResetButton(props) {
  function resetAll(e) {
    props.setBillInput("");
    props.setButton("");
    props.setPeopleNum("");
    props.setCustom("");
  }

  return (
    <Reset
      onClick={(e) => {
        resetAll(e);
      }}
    >
      RESET
    </Reset>
  );
}

const Reset = styled.div`
  background: #26c2ae;
  color: #00474b;
  border-radius: 5px;
  width: 100%;
  padding: 9px 38px;
  margin-top: auto;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  &:active {
    background: #9fe8df;
  }
`;
