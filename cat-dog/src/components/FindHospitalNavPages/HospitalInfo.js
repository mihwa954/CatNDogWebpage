import styled from "styled-components";



function HospitalInfo({info}){
    return(
        <HospitalInfoWrapper>
        <InfoNameWrapper>{info.name}</InfoNameWrapper>
        <InfoAddressWrapper>{info.address}</InfoAddressWrapper>
        </HospitalInfoWrapper>
    )
}

const HospitalInfoWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 7px;
`

const InfoNameWrapper = styled.div`
  font-size: 18px;
`;

const InfoAddressWrapper = styled.div`
  font-size: 13px;
  color: #5d6058;
 
`;

export default HospitalInfo