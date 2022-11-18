import styled from "styled-components";
import dollarIcon from "./images/icon-dollar.svg";

export default function InputBill(props) {
  function handleBill(e) {
    props.setBillInput(parseFloat(e.target.value.replace(/[0-9]{5}/, "9999")));
  }

  return (
    <>
      <Label htmlFor="bill">Bill</Label>

      <BillInput
        id="bill"
        type="number"
        value={props.billInput}
        min="1"
        step="0.1"
        placeholder="0"
        onChange={(e) => {
          handleBill(e);
        }}
      ></BillInput>
    </>
  );
}

const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  color: #5e7a7d;
`;

const BillInput = styled.input`
  background-image: url(${dollarIcon});
  background-repeat: no-repeat;
  background-size: 15px;
  background-position: 17px 12px;
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
  font-style: normal;
  margin-top: 12px;
  margin-bottom: 32px;
  cursor: pointer;
  @media (min-width: 930px) {
    margin-top: 18px;
    margin-bottom: 0;
  }
`;
