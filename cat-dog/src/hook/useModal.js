//블로그에서 모달창을 관리할 때 커스텀 훅을 사용해서 상태를 관리했다
//그럼 나도 커스텀 훅을 사용해서 모달창을 관리해보자
//그리고 state의 초기값을 참,거짓으로 하는것은 그냥 모달창을 켜고 끄는 것 밖에 없었다
//현재 내가 구현하고 싶은 모달창은 사용자가 클릭을 했을 때 그 id값에 따라서 모달창을 띄우고 싶은 것이다
//즉 값에 따라 다른 모달창을 띄워야 하기 때문에
//참,거짓이 아닌 값이 있냐 없냐를 따져야한다 그렇기 때문에 null을 초기값으로 설정을 해야한다

import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(null);
  const open = (item) => {
    //매개변수에 item을 넣는 이유는 set이 지금 item을 뱉어야 하는데 매개변수에 아무것도 없기 때문이다
    //매개변수에 쓰는 이유는 함수 밖에 있는 값을 함수 안에서 쓰려면 매개변수로 받아야 한다
    //현재 커스텀 훅에서는 item을 찾기 어렵지만 나중에 부모 컴포넌트에서 map을 돌릴 때 item을 찾을 수 있으니 거기의 값을 쓰겠다는 것이다
    setIsOpen(item);
  };
  const close = () => {
    setIsOpen(null);
  };

  return { isOpen, open, close };
};

export default useModal;
