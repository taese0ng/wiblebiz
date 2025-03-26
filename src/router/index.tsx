import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "~/components/shared";
import NotFound from "~pages/NotFound";
import FAQ from "~pages/FAQ";
import styled from "@emotion/styled";
function Router() {
  return (
    <BrowserRouter>
      <Header />
      <BodyWrapper>
        <Routes>
          <Route path="/" element={<NotFound />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BodyWrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

const BodyWrapper = styled.div`
  margin: auto;
  max-width: 1240px;
`;
