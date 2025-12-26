import { styled } from "styled-components";

import Header from "./components/Header";
import ViewsRouter from "./ViewsRouter";

const App = () => {
  const Container = styled.div`
    background: #bdc3c7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `;

  return (
    <Container>
      <Header />
      <ViewsRouter />
    </Container>
  );
};

export default App;
