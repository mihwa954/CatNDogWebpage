import styled from "styled-components";

//axios,
//useSWR
//custom hook
//json-server 열어보기
//open api ai 연결하는 로직 js 로 짜기

//모바일 대응
function QuickGuideTitle(){ 
    return(
          <QuickGuideTitleWrapper>
                <TitleWrapper>빠른 도움말</TitleWrapper>
          </QuickGuideTitleWrapper>
    )
}



const QuickGuideTitleWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  padding: 10px 1rem;
  
`;

const TitleWrapper = styled.span`
font-size: 1.3rem;
font-weight: bold;
`;
//https://www.youtube.com/watch?v=z-RkNhivr7c
//https://www.youtube.com/watch?v=d6suykcsNeY

export default QuickGuideTitle