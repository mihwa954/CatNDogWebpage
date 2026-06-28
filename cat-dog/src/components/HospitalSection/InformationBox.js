
import styled from "styled-components";
import StarIcon from "../images/StarIcon.svg";
import HospitalButton from "./Buttons";

function InformationBox({ data }) {
  return (
    <InformationBoxWrapper>
      <ImageWrapper>
        <Image src={StarIcon} alt="" />
      {data.review}
      </ImageWrapper>

      <NameWrapper>{data.name}</NameWrapper>
      <InformationWrapper> {data.information} </InformationWrapper>

      <HospitalButton/>
    </InformationBoxWrapper>
  );
}

const Image = styled.img`
`;

const ImageWrapper = styled.div`
  font-size: 0.7rem;
  margin-bottom: 10px;
`;

const InformationBoxWrapper = styled.div`
  width: 400px;
  position: absolute;
  top: 125px;
  padding: 0.5rem 1.2rem;
  background: #ffffff;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const NameWrapper = styled.div`
  font-size: 18px;
  color: #31332c;
  margin-bottom: 5px;
`;

const InformationWrapper = styled.div`
  font-size: 12px;
  color: #5d6058;
`;
export default InformationBox;
