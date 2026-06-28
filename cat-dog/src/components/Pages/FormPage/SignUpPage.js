import { useForm, FormProvider } from "react-hook-form";
import UserInputFields from "./UserInputFields";
import { useNavigate } from "react-router-dom";
import SelectPetButton from "./SelectPetButton";
import styled from "styled-components";
import SubmitButtons from "./SubmitButtons";
import { useRecoilState } from "recoil";
import { userAtom } from "../../../store/userAtom";
import SelectGenderButton from "./SelectGenderButton";
import axios from "axios";

// https://www.youtube.com/watch?v=6-8mbuUC3fk&t=564s async await 참고자료

function SignUpPage() {
  const [user, setUser] = useRecoilState(userAtom);
  const methods = useForm();
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const handleData = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/users", data);

      await new Promise((r) => setTimeout(r, 1000));
      setUser(response.data);
      alert(JSON.stringify("회원가입이 완료되었습니다"));
      navigate("/main");
      //현재 사용자의 id값이 할당되지 않은 곳에서 main페이지로 넘어가니 id를 못찾아서 에러를 뱉어내고 있다
      //그러면 id가 없어도 페이지가 나타날 수 있도록 만들어 줘야 한다
      console.log("회원가입 정보", data);
      reset();
    } catch (error) {
      console.log("회원가입 중 에러가 발생했습니다");
      alert(
        JSON.stringify(
          "회원가입중 에러가 발생했습니다 조금 있다가 다시 시도해 주세요",
        ),
      );
    }
  };

  //함수 앞에 async을 붙이면 항상 promise를 반환하는 비동기 함수로 변신한다
  //그러면 현재 사용자가 정보를 입력하면 지연이 되면서 사용자의 정보가 콘솔창, 아톰에 저장이 된다
  //로컬스토리지에 저장되어있는 값은 현재 id가 없는 값이기 때문에
  //그러면 await이 되기 전에 id 값을 생성해주는 로직을 짜고 그 다음 promise를 반환하도록 해야할 거 같다
  //그럼 await전에 쓸 수 있는 것이 무엇일까?
  //try: ~~해봐라
  //근데 try만 사용하니깐 자꾸 빨간줄이 뜬다 보니 catch를 꼭 같이 써줘야 한다고 한다

  return (
    <SignUpPageWrapper>
      <PetinfoTitleWrapper>반려동물정보입력</PetinfoTitleWrapper>

      <FormProvider {...methods}>
        {/* 현재 useFormcontext를 사용해서 불필요한 반복 props를 받지 않아도 된다 그래서 코드가 많이 간결해졌다 하지만 현재 문제는 아래의 반려동물 타입을 선택하는 버튼을 만들어야하는데
      문제는 사용자가 타이핑을 하는 input은 rigister로 연결이 가능하다
      하지만 button,div,img등 사용자가 클릭을 해서 상태를 변하게 하고 싶은 것은 rigister 만으로는 어렵다
      그 이유는 rigister은 타이핑 할 때, 즉 onChange 이벤트로 값을 감지한다
      하지만 button,img,div 같은 요소들은 클릭을 해도 onChange 발생을 하지 않는다
      그래서 클릭이벤트로 직접 react hook form에 알려줘야 한다
      그래서 setValue라는 것을 사용해서 이미 등록된 필드의 값을 바꾸는 형식으로 해야한다
      하지만 setValue만으로는 유효성 검사가 되지 않는다
      그래서 shouldValidate 옵션을 설정해서 유효성 검사를 실행할지 결정한다 */}
        {/* 근데 setValue를 사용하려면 값을 변경해줘야 하기 때문에 input을 보이지 않게 설정을 해줘야 한다 그 이유는 버튼에는 register가 먹히지 않기 때문이다
      그러먼 불필요한 input을 사용하지 않고 버튼 스스로 유효성 검사를 할 수 있는 방법은 없을까
      useController를 사용해서 register,setValue를 한 번에 해결할 수 있도록 하자 */}

        <form noValidate onSubmit={handleSubmit(handleData)}>
          <SelectPetButton />
          <SelectGenderButton />

          <UserInputFields
            id="이름"
            rules={{
              required: "이름입력은 필수입니다",
              maxLength: { value: 10, message: "10자 이내로 작성해주세요" },
            }}
            type="text"
            placeholder="10자 이내로 작성해주세요"
          />

          <UserInputFields
            id="나이"
            rules={{
              required: "나이는 필수입니다",
              valueAsNumber: true,
              min: "1",
              max: { value: 30, message: "최대 30까지 입니다" },
            }}
            placeholder="숫자만 입력해주세요"
            type="number"
          />

          <UserInputFields
            id="알레르기"
            rules={{
              required: "알레르기 정보는 필수입니다",
              maxLength: { value: 50, message: "50자 이내로 작성해주세요" },
            }}
            placeholder="50자 이내로 작성해주세요"
            type="text"
          />

          <UserInputFields
            id="병질환"
            rules={{
              required: "질환 입력은 필수입니다",
              maxLength: { value: 20, message: "20자 이내로 작성해주세요" },
            }}
            placeholder="20자 이내로 작성해주세요"
            type="text"
          />

          <UserInputFields
            id="몸무게"
            rules={{
              required: "몸무게 입력은 필수입니다",
              valueAsNumber: true,
              min: "1",
              max: { value: 100, message: "최대 100kg까지 입니다" },
            }}
            placeholder="예) 2.5kg"
            type="number"
          />

          <SubmitButtons isSubmitting={isSubmitting} />
          {/* isSubmitting을 하지 않고 disabled를 isSubmitting으로 해서 버튼이 비활성화만 되고 전송중 멘트가 나오지 않았다
          폼은 정상적으로 작동을 했으나 버튼에 isSubmitting이 되지 않았던 것이 버튼을 눌렀을 때 비활성화만 되고 텍스트를 호출하라는 신호를 아예 받지못하고 있었던 것이다 */}
        </form>
      </FormProvider>
    </SignUpPageWrapper>
  );
}
const SignUpPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffeac4;
  padding: 20px;
  padding-top: 40px;
  text-align: center;
  height: 100%;

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const PetinfoTitleWrapper = styled.h1`
  margin-bottom: 30px;
  background: #c8975a;
  border-radius: 10px;
  width: 800px;
  padding: 10px;
  color: #ffffff;
`;

export default SignUpPage;
