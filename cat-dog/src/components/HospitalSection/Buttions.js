import styled from "styled-components";

function Buttions() {
  return (
    <ButtionsWrapper>
      <Buttons className="BlueStyle Width">전화하기</Buttons>
      <Buttons className="WhiteStyle Width">예약하기</Buttons>
    </ButtionsWrapper>
  );
}
const ButtionsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 10px;
  margin-top: 10px;
`;



const Buttons = styled.button`
  border: none;
  border-radius: 99px;
  padding: 8px 10px;
  cursor: pointer;

  &.BlueStyle {
    background: #a8d4f5;
    color: #005686;
  }

  &.WhiteStyle {
    background: #ffffff;
  }
  
`;
export default Buttions;
