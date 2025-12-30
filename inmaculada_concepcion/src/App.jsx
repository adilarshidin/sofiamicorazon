import styled from "styled-components";
import { useEffect } from "react";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ViewRoutes from "./ViewRoutes";
import GlobalStyle from "./GlobalStyle";
import ScrollToHash from "./components/ScrollToHash";

const MainContainer = styled.main(`
  display: flex;
  flex-direction: column;
  background-color: black;
`);

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Church",
      "name": "Parroquia de la Inmaculada Concepción",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rúa Toledo, 5",
        "addressLocality": "Vigo",
        "postalCode": "36205",
        "addressCountry": "ES"
      },
      "telephone": "+34 986 27 46 22",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.232338,
        "longitude": -8.700442
      },
      "url": "https://inmaculada.onrender.com/"
    });

    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ScrollToHash />
      <MainContainer>
        <Menu />
        <ViewRoutes />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
