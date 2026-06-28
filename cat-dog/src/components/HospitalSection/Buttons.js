import styled from "styled-components";

function HospitalButton() {
  return (
    <HospitalButtonWrapper>
      <Buttons className="BlueStyle Width">전화하기</Buttons>
      <Buttons className="WhiteStyle Width">예약하기</Buttons>
    </HospitalButtonWrapper>
  );
}
const HospitalButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;



const Buttons = styled.button`
  border: none;
  border-radius: 12px;
  padding: 5px 10px;
  cursor: pointer;

  &.BlueStyle {
    background: #a8d4f5;
    color: #005686;
  }

  &.WhiteStyle {
    background: #ffffff;
  }
  
`;
export default HospitalButton;
