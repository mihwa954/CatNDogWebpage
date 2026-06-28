import styled from "styled-components";

import LandingPageImage from "./LandingPageImage";
import BeginButton from "./BeginButton";

//자, survyepie에서 app.js에 라우터를 달아주었고
//내가 지금 구현하고 싶은 것은
//시작페이지에서 시작하기 버튼을 누르면 가입하는 페이지가 나오게 하고싶다
//그렇다면, 렌딩히어로페이지와 가입폼페이지를 같은 라우터로 두고 그 안에서 버튼을 클릭하면! 네비게이터가 설정되어 원하는 주소로 이동할 수 있도록 하고싶은 것이다
function LandingPage() {
  
  return (

    
    <LandingPageWrapper>
      <LandingPageImage />
      <BeginButton />
    </LandingPageWrapper>
    
    
  
);
}
const LandingPageWrapper = styled.div`
  background: #ffeac4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LandingPage;
//시작하기 버튼 누르는 곳
//이미지를 넣어서 시작할 것임 버튼만 있으면 됨
