import styled from "styled-components";
import { useFormContext, useController } from "react-hook-form";

function SelectGenderButton() {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    defaultValues: {
      gender: "",
    },
    name: "gender",
    control,
    rules: { required: "성별 선택은 필수입니다" },

    //https://velog.io/@boyeon_jeong/React-Hook-Form-formState fieldState에 에러 넣는 방법
  });

  return (
    <>
      {/* //버튼의 type설정을 하지 않으니깐 useform안에서 모든 버튼들이 submit이
      되어서 반려동물 선택 버튼을 누르니 그냥 제출이 되거나 유효성 검사를하였다
      //이렇게 버튼을 커스텀 할 때에는 각각의 버튼 타입을 잘 선택해야한다 */}
      <SelectGenderButtonWrapper>
        <LabelWrapper>성별</LabelWrapper>

        <ButtonsWrapper>
          <ButtonWrapper
            type="button"
            //isClicked 이 강아지 이거나 고양이 이면 배경색을 변경하도록 해주었는데
            //현재는 field.value의 기본값을 지정을 해주지 않아서 사용자가 선택을 하지 않은 상태에임에도 불구하고 선택이 된 상태로 나타나고 있다 그러면 field.valeu의 기본값을 정해줘야한다
            isClicked={field.value === "womon"}
            onClick={() => field.onChange("womon")}
            error={!!fieldState.error}
          >
            여자
          </ButtonWrapper>

          <ButtonWrapper
            type="button"
            isClicked={field.value === "man"}
            onClick={() => field.onChange("man")}
            error={!!fieldState.error}
          >
            남자
          </ButtonWrapper>
        </ButtonsWrapper>
      </SelectGenderButtonWrapper>

      {fieldState.error && (
        <ErrorsMessageWrapper>
          ⚠ {fieldState.error.message}
        </ErrorsMessageWrapper>
      )}
    </>
  );
}

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10rem;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-self: start;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;

//버튼들의 큰 컨테이너
const SelectGenderButtonWrapper = styled.div`
  display: flex;

  flex-direction: column;
  margin-bottom: 30px;
  gap: 10px;
`;

//흰색 바탕버튼
const ButtonWrapper = styled.button`
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  text-align: center;
  font-size: 25px;
  font-weight: bold;

  border-radius: 30px;
  box-shadow: 0 12px 40px 0 rgba(49, 51, 44, 0.06);
  padding: 15px 0px;
  width: 20rem;
  background: ${({ isClicked }) => (isClicked ? "#F8C463" : "#ffffff")};

  ${({ error }) => error && `border: 1px solid #f00 `};
`;

const ErrorsMessageWrapper = styled.small`
  color: #f00;
  text-align: left;
  font-weight: bold;
  flex-direction: column;
`;

export default SelectGenderButton;
