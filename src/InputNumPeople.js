import styled from "styled-components";
import personIcon from "./images/icon-person.svg";

export default function InputNumPeople(props) {
  function handlePeople(e) {
    props.setPeopleNum(parseFloat(e.target.value.replace(/[0-9]{3}/, "99")));
  }

  return (
    <>
      <Label htmlFor="people-num">
        Number of People
        <Error>{props.peopleNum === 0 ? "Can't be zero" : ""}</Error>
      </Label>

      <PeopleNum
        id="people-num"
        type="number"
        value={props.peopleNum}
        min="0"
        placeholder="0"
        onChange={(e) => {
          handlePeople(e);
        }}
      />
    </>
  );
}

const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  color: #5e7a7d;
`;

const PeopleNum = styled.input`
  background-image: url(${personIcon});
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
  margin-bottom: 32px;
  margin-top: 12px;
  cursor: pointer;
  @media (min-width: 930px) {
    margin-bottom: 0;
    margin-top: 18px;
  }
`;

const Error = styled.span`
  color: #e17457;
  font-size: 16px;
  line-height: 24px;
  margin-left: 22px;
  @media (min-width: 930px) {
    margin-left: 60px;
  }
`;
