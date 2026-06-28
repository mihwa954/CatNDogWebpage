import styled from "styled-components";

function ImgDistance({data}){ 

    return(
        <ImgDistanceWrapper>
        <DistanceWrapper> {data.distance} </DistanceWrapper>
              <ImageFrame src={data.photo} alt="" />
        </ImgDistanceWrapper>
    )
}

const ImgDistanceWrapper =styled.div`
width: 400px;
height: 200px;
overflow: hidden;

`

const DistanceWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border-radius: 99px;
  padding: 4px 10px;
  font-size: 13px;
`;

const ImageFrame = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export default ImgDistance