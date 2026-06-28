import { CircleWrapper } from "./ModalLayout";


function ModalTitleIcon({item}){
    return(
        <>
        
         <CircleWrapper
              style={{
                background: item.color,
              }}
            >
              <img src={item.icon} alt="" />
            </CircleWrapper>

            <small> {item.title} </small>
        </>
    )
}


export default ModalTitleIcon