//병원찾기의 공통 스타일 저장소

import styled from "styled-components";

export const HospitalInfoContaniner = styled.div`
  border-radius: 32px;
  background: #ffffff;
  padding: 27px 25px;
  height: 190px;
  width: 390px;
`;

export const ButtonBaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const InfoNameWrapper = styled.div`
  font-size: 20px;
`;

export const InfoAddressWrapper = styled.div`
  font-size: 15px;
  color: #5d6058;
  margin-bottom: 20px;
`;

export const InfoIconWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const AllMenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
