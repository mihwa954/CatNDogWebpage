import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function HospitalTitle() {
  const navigate = useNavigate();

  return (
    <HospitalTitleWrapper>
      <div>
        <HospNameWrapper>주변 추천병원</HospNameWrapper>
        <SmallWrapper>서울시 강남구 삼성동 기준</SmallWrapper>
      </div>

      <ViewAllWrapper>
        <ViewAll onClick={() => navigate("/Main/FindHospital/AllMenuItem")}>
          전체보기 →
        </ViewAll>
      </ViewAllWrapper>
    </HospitalTitleWrapper>
  );
}

const HospNameWrapper = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SmallWrapper = styled.small`
  color: #5d6058;
  font-size: 0.9rem;
`;

const ViewAllWrapper = styled.div`
  padding-top: 20px;
  padding-right: 10px;
`;

const ViewAll = styled.button`
  color: #845500;
  background: none;
`;

const HospitalTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  padding: 0 1rem;
`;

export default HospitalTitle;
