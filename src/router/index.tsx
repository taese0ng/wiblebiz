import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "~/components/shared";
import NotFound from "~pages/NotFound";
import FAQ from "~pages/FAQ";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
