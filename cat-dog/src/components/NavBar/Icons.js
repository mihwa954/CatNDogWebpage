
import Background from "../images/Background.png";
import Icon from "../images/Icon.png";
import styled from "styled-components";


function Icons(){

    return (

          <Imgwrapper>
          <IconWrapper>
            <img src={Icon} alt="" />
          </IconWrapper>
          <span>
            <img src={Background} alt="" />
          </span>
        </Imgwrapper>
    )
}



const IconWrapper = styled.span`
padding-top: 5px ;
`

const Imgwrapper = styled.div`
 display: flex; 
 gap: 20px;
`;


export default Icons;