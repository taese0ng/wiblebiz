import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

async function enableMocking() {
  // preview에서 실행할 경우 주석처리 필요
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");
  return worker.start({
    onUnhandledRequest: "bypass",
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
