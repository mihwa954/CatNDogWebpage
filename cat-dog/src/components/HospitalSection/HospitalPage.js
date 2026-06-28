import styled from "styled-components";
import HospitalTitle from "./HospitalTitle";
import HospitalInfo from "./HospitalInfo";


//여기는 이제 병원찾기의 부모컴포넌트임
//일단은 다 때려넣고 좀 있다가 정리를 하자
function HospitalPage() {
 

  return (
    <HospitalPageWrapper>     

      <HospitalTitle />
      <HospitalInfo/>
    
    </HospitalPageWrapper>
  );
}

const HospitalPageWrapper = styled.div`
 
 
`;






export default HospitalPage;
