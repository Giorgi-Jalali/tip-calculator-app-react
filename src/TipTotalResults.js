import styled from "styled-components";

export default function TipTotalResults(props) {
  return (
    <>
      <AmountTotal>
        <div>
          <div className="amount-total">Tip Amount</div>
          <div className="person">/ person</div>
        </div>
        <AmountToTalNum id="amount-num">
          ${props.billInput && props.peopleNum ? props.tipAmount() : 0}
        </AmountToTalNum>
      </AmountTotal>
      <AmountTotal>
        <div>
          <div className="amount-total">Total</div>
          <div className="person">/ person</div>
        </div>
        <AmountToTalNum id="total-num">
          ${props.billInput && props.peopleNum ? props.total() : 0}
        </AmountToTalNum>
      </AmountTotal>
    </>
  );
}

const AmountTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const AmountToTalNum = styled.div`
  color: #26c2ae;
  font-size: 32px;
  line-height: 47px;
  @media (min-width: 930px) {
    font-size: 48px;
    line-height: 71px;
  }
`;
