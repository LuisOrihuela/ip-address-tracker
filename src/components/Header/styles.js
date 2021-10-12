import styled from "styled-components";
import bg from "./pattern-bg.png";

export const HeaderContainer = styled.div`
  background-image: url(${bg});
  width: 100%;
  height: 300px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
  }
`;
