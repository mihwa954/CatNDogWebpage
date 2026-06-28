import styled from "styled-components";
import {useRecoilValue} from "recoil"
import { userAtom } from "../../store/userAtom";



function PetName() {
  const userInfoName = useRecoilValue(userAtom);
  console.log(userInfoName)
 
  return (
    <>
    {userInfoName?.petType ? 

    <div>
    <PetNameButtonWrapper>
        <ButtonBaseWrapper>Active</ButtonBaseWrapper>
        <PetBreed> {userInfoName?.petType}  </PetBreed>
    </PetNameButtonWrapper>

      <div>
        <h1>{userInfoName?.이름}</h1>
      </div>
      </div> :



    <h1>게스트</h1>
  
  
  
    }
      
    </>
  );
}

const ButtonBaseWrapper = styled.button`
  border-radius: 15px;
  font-size: 14px;
  padding: 4px 12px;
  font-weight: bold;
  background: rgba(180, 253, 180, 0.3);
  color: #286c34;
`;

const PetNameButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const PetBreed = styled.small`
  padding-top: 4px;
`;

export default PetName;
