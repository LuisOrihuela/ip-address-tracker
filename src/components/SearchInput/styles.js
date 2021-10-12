import styled from "styled-components";

export const InputWrapper = styled.div`
  border-radius: 18px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  justify-content: space-between;
  overflow: hidden;
  background: white;

  .iconContainer {
    width: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
`;
