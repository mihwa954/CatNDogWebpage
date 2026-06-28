import styled from "styled-components";
import Map from "../images/Map.png"

function FindHospitalMap() {
  return (
    <ImageWrapper>
      <MapImageWrapper src={Map} alt=""  />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  height: 850px;
  width: 1400px;
`;

const MapImageWrapper = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export default FindHospitalMap;
