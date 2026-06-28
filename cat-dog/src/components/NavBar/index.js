import styled from "styled-components";

import NavIcons from "./NavIcons";
import NavBarTitle from "./NavBarTitle";
import NvaLink from "./NvaLink";

export const NavBar = () => {
  return (
    <NavWrapper>
      <NavBarWrapper>
        <NavBarTitle />
        <NvaLink />
        <NavIcons />
      </NavBarWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 20px;
`;

const NavBarWrapper = styled.div`
  background-color: #fafaf3;
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 40px 0 rgba(49, 51, 44, 0.06);
  color: #000000;
  font-size: 20px;
`;

//현재 메뉴바는 무조건 고정인 상태에서
//사용자가 어떤 페이지에 있는지 확인만 해주는 것이다
//그래서 Link를 사용해서 페이지의 새로고침 없이 다른 경로로 이동할 수 있도록 해주는 컴포넌트를 사용하자
//link to의 주소를 mainpage와 다르게 설정하고 있어서 link만 되고 있었다
//navbar에서는 /AiChat이라고 해놓고 MainPage에서는 AiChat이라고 하니 당연히 경로를 못찾고 있었다
