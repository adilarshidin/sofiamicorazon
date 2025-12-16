import styled from "styled-components";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ViewRoutes from "./ViewRoutes";
import GlobalStyle from "./GlobalStyle";

const MainContainer = styled.div(`
  display: flex;
  flex-direction: column;
  background-color: black;
`);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Menu />
        <ViewRoutes />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
