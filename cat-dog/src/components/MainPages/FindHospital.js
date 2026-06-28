
import { FindHospitalNavi } from "../FindHospitalNavPages/FindHospitalNavi";

import FindHospitalMap from "../FindHospitalNavPages/FindHospitalMap";
import styled from "styled-components";

function FindHospital() {
  return (
    <Wrapper>

      <FindHospitalNavi />
      <FindHospitalMap />
      
    </Wrapper>
  );
}

const Wrapper = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  

`;

export default FindHospital;
