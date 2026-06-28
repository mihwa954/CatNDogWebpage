import styled from "styled-components";

function HospitalInfoIcon({info}){
    return(
        <InfoIconWrapper>
            <HospitalButtons
              style={{
                background: info.icon1BackgroundColor,
                color: info.icon1Color,
              }}
            > 
          
            <InfoWrapper>
              <IconWrapper>
                <img src={info.icon1} alt=""/>
              </IconWrapper>
              
              <InfoTextWrapper>
                {info.info1}
              </InfoTextWrapper>
              </InfoWrapper>
             
            </HospitalButtons>

                {info.info2 && (

            <HospitalButtons
              style={{
                background: info.icon2BackgroundColor,
                color: info.icon2Color,
              }}
            >
              
              <InfoWrapper>
              <IconWrapper>
                <img src={info.icon2} alt=""/>
              </IconWrapper>

              <InfoTextWrapper>
                {info.info2}
              </InfoTextWrapper>
              </InfoWrapper>
             
            </HospitalButtons>
              )}
            
        </InfoIconWrapper>
    )
}


const IconWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 2px;
`
const InfoTextWrapper = styled.div`

`

const InfoWrapper = styled.div`
display: flex;
gap: 5px;

`
const InfoIconWrapper = styled.div`
  display: flex;
  gap: 10px;
  
`;


 const HospitalButtons = styled.button`
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: none;
  font-size: 12px;

`;
export default HospitalInfoIcon