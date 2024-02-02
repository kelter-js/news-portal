import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../shared/theme";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Main = styled.h2`
  font-size: 10rem;
  line-height: 11rem;
  font-family: ${({ theme }) => theme.fonts.accent};
  width: 100%;
`;

const Description = styled.div`
  width: 100%;
`;

const NotFound = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />

    <Container>
      <Main>404</Main>
      <Description>Oops! The page not found!</Description>
    </Container>
  </ThemeProvider>
);

export default NotFound;
