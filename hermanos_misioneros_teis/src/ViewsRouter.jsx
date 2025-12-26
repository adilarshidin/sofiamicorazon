import { Routes, Route } from "react-router";

import Main from "./components/Main";
import Services from "./components/Services";
import Philosophy from "./components/Philosophy";
import Address from "./components/Philosophy";

const ViewsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/services" element={<Services />} />
      <Route path="/philosophy" element={<Philosophy />} />
      <Route path="/address" element={<Address />} />
    </Routes>
  );
};

export default ViewsRouter;
