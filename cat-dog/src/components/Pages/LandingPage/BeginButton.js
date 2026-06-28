import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../store/userAtom";

function BeginButton() {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  return (
    <StartButton
      onClick={() => (user ? navigate("/Main") : navigate("/signup"))}
    >
      {/* useRecoilValue를 사용해서 사용자의 회원정보를 가져온다 그리고 그 회원정보에 따라서 회원이면 main페이지로, 아니면 로그인 페이지로 돌아가게 한다 */}
      시작하기
    </StartButton>
  );
}

const StartButton = styled.button`
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 300px;
  height: 60px;
  padding: 17px 0;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background: #fed7a7;
  cursor: pointer;
  color: #1c0f00;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  &:hover {
    background: #c8975a;
  }
`;

export default BeginButton;
