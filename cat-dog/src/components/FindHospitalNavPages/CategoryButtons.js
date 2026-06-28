
import styled from "styled-components";

function CategoryButtons({info}){
    return(

        <ButtonBaseWrapper>
                    <ButtonBase
                      style={{
                        background: info.buttonBackgroundColor,
                        color: info.buttonColor,
                      }}
                    >
                    {info.button}
                    </ButtonBase>
                    
                    {info.dist}
        </ButtonBaseWrapper>
    )
}

const ButtonBase = styled.button`
  border-radius: 10px;
  font-size: 10px;
  padding: 4px 12px;
  font-weight: bold;
  cursor: none;

`

const ButtonBaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  
`;

export default CategoryButtons