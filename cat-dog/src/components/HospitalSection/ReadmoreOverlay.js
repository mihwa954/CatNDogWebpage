//마우스를 대면 자세기 보기 버튼이 생기면서 전체가 투명색이 된다

import styled from "styled-components";

function ReadmoreOverlay({ onMouseLeave, setIsHovering, url }) {
  // const goExternal = () => {
  //   window.location.href = "https://m.blog.naver.com/himchanvet?tab=1";
  // };

  const openNewTab = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <ReadmoreOverlayWrppaer>
      <DivWrapper onMouseLeave={() => setIsHovering(false)}>
        <ReadmoreWrapper onClick={openNewTab}>자세히보기</ReadmoreWrapper>
      </DivWrapper>
    </ReadmoreOverlayWrppaer>
  );
}

const ReadmoreOverlayWrppaer = styled.div``;
const DivWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
`;

//자세히 보기 버튼
const ReadmoreWrapper = styled.button`
  padding: 7px 25px;
  border-radius: 50px;
  background: #ffffff;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background: #333;
    color: #fff;
  }
`;

export default ReadmoreOverlay;
