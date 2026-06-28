import styled from "styled-components";
import PopUpCloseButton from "./PopUpCloseButton";
import PopUpDesc from "./PopUpDesc";
import PopUpTitleIcon from "./PopUpTitleIcon";



function PopUp({ close, item }) {
  //부모한테 받아와야 하는데 뭘 어떻게 받아야 하는지 헷갈려서 찾아보니
  //어차피 부모의 것을 가져오는 것이니 item이라고 한번에 다 받아오는게 깔끔하다고 한다

  return (
    <Overlay>
      <ContentWrapper>
       
          <PopUpTitleIcon item={item}/>
          <PopUpCloseButton close={close}/>
          <PopUpDesc item={item}/>

        {/* 부모 컴포넌트에서 setModalOpen을 받아서 클릭을 했을 때 팝업창이 닫히도록 한다 */}
      </ContentWrapper>
    </Overlay>
  );
}


const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

//팝업창
export const ContentWrapper = styled.div`
  width: 900px;
  height: 800px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 32px;
  background: #f4f4ec;
  padding: 70px 100px;
  color: #000;
  text-align: center;
  font-size: 15px;
  font-weight: normal;
  align-items: center;
  gap: 10px;

   @media screen and (max-width: 768px){
   width: 700px;
   height: 600px;
   overflow: scroll;
  }
 

  
  
  `;

export default PopUp;
//여기는 이제 팝업창들의 내용을 담아야 한다
//여기선 사용자가 클릭했을 때 나타나는 팝업 내용들, 스타일을 적용시켜준다
