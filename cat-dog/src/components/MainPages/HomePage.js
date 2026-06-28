import styled from "styled-components";
import HomePageimage from "../images/HomePageimage.png";

function HomePage() {
  return (
    <HomePageWrapper>
      <HomePageImg src={HomePageimage} alt="" />
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div`
  background: #ffeac4;
  display: flex;
  justify-content: center;
  height: 850px ;
`;

const HomePageImg = styled.img`
  object-fit: cover;
  display: block;
  height: 100%;
  width: 100%;
 
`;
export default HomePage;
