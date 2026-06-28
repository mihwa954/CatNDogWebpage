import { FINDHOSPITAL_DATA } from "./FINDHOSPITAL_DATA";
import styled from "styled-components";

import { useState } from "react";
import CategoryButtons from "./CategoryButtons";
import HospitalInfo from "./HospitalInfo";
import HospitalInfoIcon from "./HospitalInfoIcon";

function AllMenuItem({ defaultCategory = "전체" }) {
  //현재 나는 모든 카테고리를 컴포넌트로 분리를 한 상태이다
  //그래서 useState를 사용할 때 set을 굳이 쓸 필요가 없는게 props로 넘겨주면 되기 때문이다

  const [selectedCategory] = useState(defaultCategory);
  const filters =
    selectedCategory === "전체"
      ? FINDHOSPITAL_DATA
      : FINDHOSPITAL_DATA.filter((info) => info.category === selectedCategory);

  return (
    <AllMenuItemWrapper>
      {filters.map((info) => (
        <HospitalInfoContaniner key={info.id}>
          <CategoryButtons info={info} />
          <HospitalInfo info={info} />
          <HospitalInfoIcon info={info} />
        </HospitalInfoContaniner>
      ))}
    </AllMenuItemWrapper>
  );
}

const HospitalInfoContaniner = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   justify-content: center;
  border-radius: 20px;
  background: #ffffff;
  padding: 20px 25px;
  height: 150px;
  width: 380px;
`;

const AllMenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow-y: auto;
`;

export default AllMenuItem;
