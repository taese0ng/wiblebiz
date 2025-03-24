import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { defaultOptions } from "~queries/options";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global } from "@emotion/react";
import globalStyle from "~styles/globals";

function App() {
  const [count, setCount] = useState(0);
  const [apiResponse, setApiResponse] = useState<string>("");
  const queryClient = new QueryClient({ defaultOptions });

  useEffect(() => {
    // GET 요청 테스트
    fetch("/api/example")
      .then((res) => res.json())
      .then((data) => setApiResponse(JSON.stringify(data, null, 2)))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Global styles={globalStyle} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="api-response">
        <h2>API Response:</h2>
        <pre>{apiResponse}</pre>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </QueryClientProvider>
  );
}

export default App;
