import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Header, Footer, FloatingButton } from "~/components/shared";
import FAQ from "~pages/FAQ";
import Guide from "~pages/Guide";
import News from "~pages/News";
import Counsel from "~pages/Counsel";
import { media } from "~/styles/mediaQuery";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <BodyWrapper>
        <Routes>
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="/News" element={<News />} />
          <Route path="/Counsel" element={<Counsel />} />
          <Route path="*" element={<Navigate to="/FAQ" replace />} />
        </Routes>
      </BodyWrapper>
      <FloatingButton />
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

const BodyWrapper = styled.div`
  margin: auto;
  max-width: 1240px;
  padding: 0 48px 80px 48px;

  ${media.mobile} {
    padding: 0 24px 80px 24px;
  }
`;
