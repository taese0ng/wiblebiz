import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "~pages/NotFound";
import FAQ from "~pages/FAQ";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/FAQ" element={<FAQ />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
