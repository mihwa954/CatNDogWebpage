import { HOSPITAL_DATA } from "./HOSPITAL_DATA";
import { useState } from "react";
import ImageBox from "./ImageBox";
import styled from "styled-components";
import ReadmoreOverlay from "./ReadmoreOverlay";

function HospitalInfo() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HospitalInfoWrapper>
      {HOSPITAL_DATA.map((data) => (
        <MapWrapper
          key={data.id}
          // 마우스가 올라오면 setIsHovering에 id의 값을 불러온다
          onMouseEnter={() => setIsHovering(data.id)}
          // 마우스가 나가면 false로 초기화가 된다
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* onMouseEnter : 마우스가 요소 위에 올라왔을 때 발생
              onMouseLeave : 마우스가 요소 밖으로 나갔을 때 발생
              hover를 쓰는게 아니라 onMouse라는 이벤트를 사용해야한다 */}

          <ImageBox data={data} />

          {/* 사용자가 올린 id의 값이 isHovering과 같으면 즉 현재의 id값과 같다면 setIsHovering을 자식컴포넌트에서 받는데, 어떤 걸 받냐???
                배경의 색상일 바뀌면서 버튼이 나타나도록 한다 */}
          {isHovering === data.id && (
            <ReadmoreOverlay setIsHovering={setIsHovering} url={data.url} />
          )}
        </MapWrapper>
      ))}
    </HospitalInfoWrapper>
  );
}

const HospitalInfoWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MapWrapper = styled.div`
  position: relative;
`;

export default HospitalInfo;
