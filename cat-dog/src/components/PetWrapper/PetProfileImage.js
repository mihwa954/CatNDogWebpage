import styled from "styled-components";
import CatandDog from "../images/CatandDog.png"
import { useRecoilValue } from "recoil";
import { userAtom } from "../../store/userAtom";
import CatProfile from "../images/CatProfile.png"
import DogProfile from "../images/DogProfile.png";

function PetProfileImage() {
  const userPetType = useRecoilValue(userAtom);

  console.log("펫타입확인",userPetType?.petType )
  //콘솔을 찍을 때에도 안전하게 찍어서 에러가 뜨지 않도록 하자


  if(!userPetType){
    return(
    <PetImageBoxWrapper>
      <ImageWrapper src={CatandDog} alt="" />
    </PetImageBoxWrapper>
    )     
  }

  return (
    <>
   {userPetType?.petType ==="cat" ?(

     <PetImageBoxWrapper>
      <ImageWrapper src={CatProfile} alt="" />
    </PetImageBoxWrapper> 

   )


   :
   (
       <PetImageBoxWrapper>
      <ImageWrapper src={DogProfile} alt="" />
    </PetImageBoxWrapper>
  
   )

   
  
  }




    </>  
  );
}

const PetImageBoxWrapper = styled.div`
  width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageWrapper = styled.img`
  border-radius: 30px;
  width: 100%;
  object-fit: cover;
`;

export default PetProfileImage;
