import { useFormContext, useController } from "react-hook-form";
import styled from "styled-components";
import Cat from "../../images/Cat.png";
import Dog from "../../images/Dog.png";

function SelectPetButton() {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    defaultValues: {
      petType: "",
    },
    name: "petType",
    control,
    rules: { required: "반려동물 선택은 필수입니다" },

    //https://velog.io/@boyeon_jeong/React-Hook-Form-formState fieldState에 에러 넣는 방법
  });

  return (
    <>
      {/* //버튼의 type설정을 하지 않으니깐 useform안에서 모든 버튼들이 submit이
      되어서 반려동물 선택 버튼을 누르니 그냥 제출이 되거나 유효성 검사를하였다
      //이렇게 버튼을 커스텀 할 때에는 각각의 버튼 타입을 잘 선택해야한다 */}
      <SelectPetButtonWrapper>
        <ButtonWrapper
          type="button"
          //isClicked 이 강아지 이거나 고양이 이면 배경색을 변경하도록 해주었는데
          //현재는 field.value의 기본값을 지정을 해주지 않아서 사용자가 선택을 하지 않은 상태에임에도 불구하고 선택이 된 상태로 나타나고 있다 그러면 field.valeu의 기본값을 정해줘야한다
          isClicked={field.value === "dog"}
          onClick={() => field.onChange("dog")}
          error={!!fieldState.error}
        >
          <ButtonCircle>
            <img src={Dog} alt="" width={80} height={80} />
          </ButtonCircle>
          강아지
        </ButtonWrapper>

        <ButtonWrapper
          type="button"
          isClicked={field.value === "cat"}
          onClick={() => field.onChange("cat")}
          error={!!fieldState.error}
        >
          <ButtonCircle>
            <img src={Cat} alt="" width={80} height={80} />
          </ButtonCircle>
          고양이
        </ButtonWrapper>
      </SelectPetButtonWrapper>

      <div>
        {fieldState.error && (
          <ErrorsMessageWrapper>
            ⚠ {fieldState.error.message}
          </ErrorsMessageWrapper>
        )}
      </div>
    </>
  );
}

//강아지 고양이 버튼들의 큰 컨테이너
const SelectPetButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
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
  line-height: 40px;
  border-radius: 30px;
  box-shadow: 0 12px 40px 0 rgba(49, 51, 44, 0.06);
  padding: 20px;
  width: 230px;
  background: ${({ isClicked }) => (isClicked ? "#a47251" : "#ffffff")};

  ${({ error }) => error && `border: 1px solid #f00 `};
`;

//사진 안에 동그라미
const ButtonCircle = styled.div`
  border-radius: 100px;
  background: #ffeac4;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ErrorsMessageWrapper = styled.small`
  color: #f00;
  text-align: left;
  font-weight: bold;
  flex-direction: column;
`;

export default SelectPetButton;

//// useController가 반환하는 구조가 정해져 있다
// const { field, fieldState, formState } = useController();
//↑ RHF이 정한 이름이라 바꿀 수 없다

// const { field } = useController({ name: "petType" });

// field.value     // 현재 값
// field.onChange  // 값 변경
// field.onBlur    // 포커스
// field.name      // 필드 이름
// field.ref       // DOM 참조

// control  →  폼 전체 관리자
// field    →  그 관리자 아래에서 개별 필드를 다루는 도구

// control    →  폼 전체를 관리하는 관리자 역할
//               (필드 등록, 유효성 검사, 상태 관리 등)

// field      →  각 필드를 직접 다루는 도구
//               (value, onChange, onBlur, name, ref)

// fieldState
// fieldState.error    // 유효성 검사 에러 정보
// fieldState.invalid  // 유효성 검사 실패 여부 (true/false)
// fieldState.isDirty  // 값이 변경됐는지 여부 (true/false)
// fieldState.isTouched // 한 번이라도 건드렸는지 여부 (true/false)
