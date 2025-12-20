import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  cursor: pointer;
  border: 1px solid #cd1c18;
  padding: 3%;
  border-radius: 5px;
  width: 100%;
`;

const Content = styled.div`
  overflow: hidden;
  max-height: ${({ $visible }) => ($visible ? "" : "0")};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(-4px)"};

  transition:
    max-height 300ms ease,
    opacity 200ms ease,
    transform 200ms ease;

  margin-top: ${({ $visible }) => ($visible ? "8px" : "0")};
`;

const Togglable = ({ label, children }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((prev) => !prev);

  return (
    <Container onClick={toggleVisibility}>
      <h3>{label}</h3>

      <Content $visible={visible} onClick={(e) => e.stopPropagation()}>
        {children}
      </Content>
    </Container>
  );
};

export default Togglable;
