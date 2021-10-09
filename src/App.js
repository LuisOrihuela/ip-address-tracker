import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const StyledText = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.main};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledText>Home</StyledText>
    </ThemeProvider>
  );
}

export default App;
