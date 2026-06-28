import styled from "styled-components";
import "./App.css";
import LandingPage from "./components/Pages/LandingPage";
import SignUpPage from "./components/Pages/FormPage/SignUpPage";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage";

//이 페이지들은 라우터브라우저를 사용해서 라우터 기능을 하게 만들자
//각각의 컴포넌트 페이지로 넘어갈 수 있도록 하자

function App() {
  return (
    <Appwrapper>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main/*" element={<MainPage />} />
        {/* Main페이지에서 지금 하위페이지로 넘어가질 않는데 그래서 주소뒤에 /*붙여야 하위 라우팅이 작동한다고 한다
        그런데도 지금 link만 되고 라우팅이 되고있지 않는다 */}
      </Routes>
    </Appwrapper>
  );
}

const Appwrapper = styled.div`
  
`;
//미디어 쿼리는 아직 잘 모르겠다..일단 이렇게두고 나중에 더 찾아서 적용해보자

export default App;

// 라우트 5버전 문법
// 라우트 묶음<Switch>
// <Routes>페이지 이동 훅useHistoryuseNavigate컴포넌트 지정component={X}element={<X />}
// useNavigate 대신 useHistory를 사용한다
