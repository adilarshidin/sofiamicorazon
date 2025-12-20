import { styled } from "styled-components";

import Header from "./components/Header";
import ViewRoutes from "./ViewRoutes";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  background-color: #f2f0ef;
  background-image: linear-gradient(315deg, #f2f0ef 0%, #fbceb1 74%);
`;

const StyledHR = styled.hr`
  margin: 2%;
  border: solid 3px;
  border-color: #cd1c18;
  border-background: linear-gradient(326deg, #cd1c18 0%, #66023c 74%);
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <ViewRoutes />
      <StyledHR />
      <Footer />
    </Wrapper>
  );
};

export default App;
