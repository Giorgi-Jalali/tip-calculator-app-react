import styled from "styled-components";

export default function ButtonsContainer(props) {
  function handleCustom(e) {
    props.setCustom(parseFloat(e.target.value.replace(/[0-9]{3}/, "99")));
    props.setButton("");
  }

  function handleClick(e) {
    props.setButton(parseInt(e.target.innerHTML));
    e.target.id = "active-tip";
    props.setCustom("");
  }

  const buttons = ["5", "10", "15", "25", "50"];

  return (
    <>
      <Label htmlFor="select-tip">Select Tip %</Label>
      <TipButtons>
        {buttons.map((button) => {
          return (
            <div
              className="tips"
              id={`${props.button === parseInt(button) ? "active-tip" : ""}`}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {button}%
            </div>
          );
        })}
        <CustomInput
          type="number"
          id="custom"
          value={props.custom}
          min="1"
          step="0.1"
          placeholder="Custom"
          onChange={(e) => {
            handleCustom(e);
          }}
        />
      </TipButtons>
    </>
  );
}

const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  color: #5e7a7d;
  margin-top: 20px;
`;

const TipButtons = styled.div`
  color: white;
  margin: 16px 0 32px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 48px;
  gap: 16px;
  @media (min-width: 930px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px 0 32px 0;
  }
`;

const CustomInput = styled.input`
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #00474b;
  padding: 6px 18px;
  outline: none;
  background-color: #daecf0;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media (min-width: 930px) {
    padding: 6px 8px;
  }
`;
