import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function NvaLink() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <SmartStyle isBold={location.pathname === "/Main"} to="/Main">
        홈페이지
      </SmartStyle>
      {/* 홈페이지는 일단은 이렇게 넣어두자.. 우선 누군가에게 보여줄 때 맨 처음 페이지로 돌아갈 수 있는 경로가 필요하기 때문에
        일단 이렇게 넣어두고 나중에 홈페이지를 변경하는 걸로 하자 */}
      <SmartStyle isBold={location.pathname === "/Main/AiChat"} to="AiChat">
        Ai대화창
      </SmartStyle>

      <SmartStyle isBold={location.pathname === "/Main/MyPage"} to="MyPage">
        마이페이지
      </SmartStyle>

      <SmartStyle
        isBold={
          location.pathname === "/Main/FindHospital/AllMenuItem" ||
          location.pathname === "/Main/FindHospital/Emergency" ||
          location.pathname === "/Main/FindHospital/Patella" ||
          location.pathname === "/Main/FindHospital/Heart"
        }
        to="FindHospital/AllMenuItem"
      >
    {/* 주소를 전체만 넣어주기 카테고리를 다른걸 클릭했을 때 굵게 표시가 되지 않았다
    그래서 모든 카테고리의 주소를 가져와서 넣어주자 */}
        병원찾기
      </SmartStyle>
    </>
  );
}

const SmartStyle = styled(Link)`
  font-size: 1.5rem;
  color: #000000;
  &:visited {
    color: #000000;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
`;

// const StyleLink = styled(Link)`
//   font-size: 1.5rem;
//   color: #000000;
//   &:focus {
//     font-weight: bold;
//   }
//   &:visited {
//     color: #000000;
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 0.6rem;
//   }
// `;
export default NvaLink;
