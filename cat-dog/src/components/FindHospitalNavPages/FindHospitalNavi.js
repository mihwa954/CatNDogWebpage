import styled from "styled-components";
import { Link } from "react-router-dom";
import SerchBar from "./SerchBar";
import { Route, Routes } from "react-router-dom";
import AllMenuItem from "../FindHospitalNavPages/AllMenuItem";
import Emergency from "../FindHospitalNavPages/Emergency";
import Patella from "../FindHospitalNavPages/Patella";
import Heart from "../FindHospitalNavPages/Heart";
import { useLocation } from "react-router-dom";

//https://velog.io/@hyoni/%ED%81%B4%EB%A6%AD-%EC%8B%9C-%ED%9A%A8%EA%B3%BC-%EC%9C%A0%EC%A7%80-with-.active 네비게이트 사용해서 사이드메뉴만들기
//https://sookkiong.tistory.com/19
export const FindHospitalNavi = () => {
  const location = useLocation();
  return (
    <FindHospitalNaviWrapper>
      <FindHospitalTitle>주변 동물병원 찾기</FindHospitalTitle>

      <NaviWrapper>
        <HospitalNaviStyle
          isSelected={location.pathname === "/Main/FindHospital/AllMenuItem"}
          to="AllMenuItem"
        >
          전체
        </HospitalNaviStyle>
        <HospitalNaviStyle
          isSelected={location.pathname === "/Main/FindHospital/Emergency"}
          to="Emergency"
        >
          24시 응급
        </HospitalNaviStyle>
        <HospitalNaviStyle
          isSelected={location.pathname === "/Main/FindHospital/Patella"}
          to="Patella"
        >
          슬개골 수술
        </HospitalNaviStyle>
        <HospitalNaviStyle
          isSelected={location.pathname === "/Main/FindHospital/Heart"}
          to="Heart"
        >
          심장 질환
        </HospitalNaviStyle>
      </NaviWrapper>

      <SerchBar />

      <Routes>
        <Route path="AllMenuItem" element={<AllMenuItem />} />
        <Route path="Emergency" element={<Emergency />} />
        <Route path="Patella" element={<Patella />} />
        <Route path="Heart" element={<Heart />} />
      </Routes>
    </FindHospitalNaviWrapper>
  );
};

const HospitalNaviStyle = styled(Link)`
  border: none;
  border-radius: 30px;
  padding: 8px 10px;
  cursor: pointer;

  background: ${({ isSelected }) => (isSelected ? "#4d4438" : "#ffffff")};
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#000000")};

  flex-shrink: 0;
`;

const NaviWrapper = styled.div`
  display: flex;
  gap: 10px;
   
`;

const FindHospitalTitle = styled.div`
  font-size: 35px;
  color: #31332c;
  font-weight: 300;
`;

const FindHospitalNaviWrapper = styled.div`
  background: #fafaf3;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  width: 450px;
  height: 850px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;
 
`;
