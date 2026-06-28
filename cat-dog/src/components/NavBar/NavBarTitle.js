import styled from "styled-components";
import { Link } from "react-router-dom";

function NavBarTitle() {
  return <TitleWrapper to="/">CAT & DOG</TitleWrapper>;
}

const TitleWrapper = styled(Link)`
  color: #845500;
  font-weight: bold;
  font-size: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export default NavBarTitle;
