//이곳은 마이페이지에 있는 버튼들과 병원찾기에 있는 버튼을 만드는 곳이다

import { Link } from "react-router-dom";
import styled from "styled-components";

//버튼의 스타일은 여기저기 사용할 수 있을 거 같아서 이곳에 모아두자
//https://pizza301.tistory.com/81 버튼 컴포넌트 만들기 참고자료
//기본 버튼의 스타일을 정하되 클래스로 색상을 다르게 지정해서 ClassName으로 버튼의 색상을 다르게 준다

export const ButtonBase = styled.button`
  border-radius: 15px;
  font-size: 14px;
  padding: 4px 12px;
  font-weight: bold;

  &.blue {
    background: rgba(206, 229, 255, 0.3);
    color: #00649b;
  }

  &.Green {
    background: rgba(180, 253, 180, 0.3);
    color: #286c34;
  }
`;

export const HospitalButtons = styled.button`
  border: none;
  border-radius: 99px;
  padding: 8px 10px;
  cursor: pointer;

  &.Width {
    width: 160px;
  }

  &.BlueStyle {
    background: #a8d4f5;
    color: #005686;
  }

  &.WhiteStyle {
    background: #ffffff;
  }

  &.Brown {
    background: #4d4438;
    color: #ffffff;
  }
`;



//병원찾기 사이드바 버튼들
export const HospitalNaviStyle = styled(Link)`
  border: none;
  border-radius: 30px;
  padding: 8px 16px;
  background: #ffffff;
  cursor: pointer;
  color: #000000;
  &:focus {
    background: #4d4438;
    color: #ffffff;
  }
`;





export const PetProfileInfoButton =styled.button`

align-self: flex-end;
  color: #ffffff;
  border-radius: 30px;
  background: #4d4438;
  padding: 10px;
  width: 400px;

`