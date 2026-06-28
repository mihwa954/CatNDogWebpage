import LandingPageImg from "../../images/LandingPageImg.png"
import styled from "styled-components";

function LandingPageImage(){

    return (
          <ImageWrapper>
                <ImgWrapper src={LandingPageImg} alt="첫페이지" />
            </ImageWrapper>


    )
}


const ImageWrapper = styled.div`
  width: 70%;
  height: 100vh;
`;
const ImgWrapper = styled.img`
    width: 100%;
    height: 100vh;
  object-fit: contain;
  display: block;
`;

export default LandingPageImage