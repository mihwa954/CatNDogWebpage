import { useFormContext } from "react-hook-form";
import styled from "styled-components";
//SignUpPage에서 useForm을 사용해서 회원가입 페이지를 만들었더니
//중복되는 값들이 너무 많았고 props를 계속 받아야하는 번거로움이 있었다
//그래서 생각한 것은 중복된 속성들을 하나의 컴포넌트로 만들어서
//props를 한번만 받게 할 수 없을까 생각을 하다가
//useFormContext라는 훅을 알게되었다
//useFormContext는 상위 컴포넌트에서 하위 컴포넌트로 props로 따로 넘겨주지 않아도되고
//formprovider라고 감싸주기만 하면 객체들을 불러올 수 있었음
//그래서 먼저 생각한 것은 useFormContext 하나의 컴포넌트로 만들어서
//회원가입페이지에 넘겨주자

function UserInputFields({ id, rules, ...props }) {
  const {
    register,
    formState: { errors, isSubmitted },
  } = useFormContext();

  return (
    <UserInputFieldsWrapper>
      <LabelWrapper>{id}</LabelWrapper>

      <InputWrapper
        id={id}
        aria-invalid={isSubmitted ? (errors[id] ? "true" : "false") : undefined}
        isInvalid={errors[id]}
        {...register(id, rules)}
        //부모로부터 모든 룰을 통째로 받는다
        {...props}
      />

      {errors[id] && (
        <ErrorsMessageWrapper> ⚠ {errors[id].message} </ErrorsMessageWrapper>
      )}
    </UserInputFieldsWrapper>
  );
}

const UserInputFieldsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LabelWrapper = styled.label`
  text-align: left;
  color: #000000;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const InputWrapper = styled.input`
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 12px 40px 0 rgba(49, 51, 44, 0.06);
  width: 800px;
  height: 60px;
  border: none;
  padding: 20px;
  font-size: 18px;
  outline: none;
  margin-bottom: 10px;
  ${({ isInvalid }) => isInvalid && `border: 1px solid #f00 `};
`;

const ErrorsMessageWrapper = styled.small`
  color: #f00;
  text-align: left;
  font-weight: bold;
`;

export default UserInputFields;

//useform의 특징은 하위 컴포넌트에서 RHF에 접근하게 해주는 도구이다 즉 필드안에 있는 요소들 중에 변경된 필드만 리렌더링하는 최적화 도구이다
//useForm은 dom을 직접관리한다 이 말의 의미는
//리액트는 소심한 성격이다
// "나는 직접 건드리면 안돼..."
// "일단 Virtual DOM한테 물어보고"
// "괜찮으면 그때 실제 DOM 건드릴게"
// "혹시 몰라서 주변도 다 같이 업데이트할게!"
//리액트가 가상돔을 거치는 이유는 앱 전체의 상태를 안전하게 관리하기 위해서이다

//REF는 화끈한 성격이다
// "그냥 내가 직접 할게!"
// "ref로 바로 꽂아서 값 가져오면 되잖아"
// "주변은 건드릴 필요 없어, 나만 바뀌면 되니까!"
//하지만 리액트 훅 폼은 폼 입력값만 관리하면 되니깐 범위가 작아서 직접 건드려도 비교적 안전한 것이다
//그러면 여기서 dom을 직접 건든다고 했는데 그럼 언젠가 문제가 생기지 않을까? 사용자가 많이 사용할수록, 입력창이 많을수록 문제가 생길거 같은데
//그런데 이 부분은 안전하다// document.getElementById("input").style.color = "red";
// document.querySelector(".box").innerHTML = "바뀐 내용";

// // RHF은 이런 것(안전!)
// inputRef.current.value // 값을 읽어올 뿐
//이런 행위가 dom을 직접 조절 하는것이기 때문에 문제가 생기는 것이다
//하지만 RHF는 값을 읽어오기만 하는거라서, 즉 구조를 변경하는 것이 아니기때문에 훨씬 안전하다
