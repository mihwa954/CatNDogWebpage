import styled from "styled-components";
import ReadingGlasses from "../images/ReadingGlasses.png";

function SerchBar() {
  return (
    <SerchBarWrapper>
      <img src={ReadingGlasses} alt="" />
      <InputWrapper type="text" placeholder="병원명 또는 지역 검색" />
    </SerchBarWrapper>
  );
}

const SerchBarWrapper = styled.div`
  padding: 12px 12px 12px 30px;
  display: flex;
  background: #e2e3d9;
  border-radius: 48px;
  flex-direction: row;
  gap: 30px;
  height: 45px;
`;

const InputWrapper = styled.input`
  outline: none;
  border: none;
  background: none;
  font-size: 15px;
`;

export default SerchBar;
