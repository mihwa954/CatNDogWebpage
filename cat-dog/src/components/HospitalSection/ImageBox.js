import InformationBox from "./InformationBox";
import ImgDistance from "./ImgDistance";
import styled from "styled-components";

function ImageBox({data}){
    return(
         <ImageBoxWrapper>
              
              <ImgDistance data={data}/>
              <InformationBox data={data}/>
             
          </ImageBoxWrapper>


    )
}

const ImageBoxWrapper = styled.div`
  position: relative;
  width: 400px;
  height:252px;
  border-radius: 20px;
`;

export default ImageBox