import { Route, Routes } from "react-router-dom";
import { NavBar } from "../../NavBar";
import AiChat from "../../MainPages/AiChat";
import MyPage from "../../MainPages/MyPage";
import FindHospital from "../../MainPages/FindHospital";
import HomePage from "../../MainPages/HomePage";
import styled from "styled-components";


function MainPage() {
  return (
    <MainPageWrapper>
      <NavBarWrapper>
        <NavBar />
      </NavBarWrapper>

      <MainPageContentsWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 홈페이지는 일단은 이렇게 넣어두자.. 우선 누군가에게 보여줄 때 맨 처음 페이지로 돌아갈 수 있는 경로가 필요하기 때문에
        일단 이렇게 넣어두고 나중에 홈페이지를 변경하는 걸로 하자 */}
          <Route path="aiChat" element={<AiChat />} />
          <Route path="myPage" element={<MyPage />} />
          <Route path="findhospital/*" element={<FindHospital />} />
        </Routes>
      </MainPageContentsWrapper>
    </MainPageWrapper>
  );
}

const MainPageWrapper = styled.div`
  background: #ffeac4;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const NavBarWrapper = styled.div`
    height: 10vh;
`;

const MainPageContentsWrapper = styled.div`
    height: 95vh;
`;

export default MainPage;
//여기서부터는 로그인페이지, 마이페이지, 병원찾기 페이지 있음
//로그인 페이지 제외하고 다른 페이지들은 모두 메뉴바로 이동
//이곳은 상단의 메뉴바 이다
//우선 생각한 것은 메뉴바에는 ai대화창, 병원찾기 마이페이지가 있는데
//내가 생각을 한 것은 메뉴바들을 여기서 만들어서 각 페이지들을 라우터로 연결해주면 어떨까?
//그럼..
