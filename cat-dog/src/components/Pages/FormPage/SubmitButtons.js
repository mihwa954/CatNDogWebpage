import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SubmitButtons({ isSubmitting }) {
  const navigate = useNavigate();

  return (
    <FormButtonWrapper>
      <ButtonWrapper onClick={() => navigate("/")}>이전으로</ButtonWrapper>

      <ButtonWrapper type="submit" disabled={isSubmitting}>
        {isSubmitting ? "전송중..." : "가입완료"}
      </ButtonWrapper>

      <ButtonWrapper onClick={() => navigate("/Main")}>건너뛰기</ButtonWrapper>
    </FormButtonWrapper>
  );
}

const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ButtonWrapper = styled.button`
  background: #ffeac4;
  box-shadow: 0 12px 40px 0 rgba(49, 51, 44, 0.06);
  padding: 14px;
  border-radius: 10px;
  width: 200px;
  font-size: 20px;
  color: #4d4438;
  font-weight: bold;
  border: 1px solid #4d4438;
  &:hover {
    background: #c8975a;
    color: #ffffff;
    border: none;
  }
`;

export default SubmitButtons;
