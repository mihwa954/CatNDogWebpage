import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../store/userAtom";

function PetInfoList() {
  const userInfomation = useRecoilValue(userAtom);
  //건강기록 상세보기 클릭 하면, 투두리스트가 있으면 좋겠다 일단은 체크리스트에는 없으니 여기에 참고자료를 모아뒀다가 나중에 만들자
  //https://www.jinlog.org/3cbba59d-0d41-4fe1-8ede-53c9a99675a2
  //https://velog.io/@hsecode/React-%EC%B4%88%EA%B0%84%EB%8B%A8-%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0

  if(!userInfomation){
    return(
      <BeforPetInfoBoxWrapper>
        <BeforUserPetBox>
          <PetInfoBoxText> 가입이 필요합니다</PetInfoBoxText>
        </BeforUserPetBox>
      </BeforPetInfoBoxWrapper>
    )
  }
  return (
    <PetInfoBoxWrapper>
      <PetInfoBox>
        <span>최근 몸무게</span>
        <PetInfoBoxText>{userInfomation.몸무게}  kg</PetInfoBoxText>
      </PetInfoBox>

      <PetInfoBox>
        <span>병질환</span>
        <PetInfoBoxText>{userInfomation.병질환}</PetInfoBoxText>
      </PetInfoBox>
    </PetInfoBoxWrapper>
  );
}

const PetInfoBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const PetInfoBox = styled.div`
  background: #f4f4ec;
  padding: 16px;
  line-height: 30px;
  column-gap: 20px;
`;

const BeforUserPetBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4ec;
  padding: 16px;
  width: 24rem;
  height: 8rem;
`

const BeforPetInfoBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PetInfoBoxText = styled.h3`
  color: #845500;
`;

export default PetInfoList;
