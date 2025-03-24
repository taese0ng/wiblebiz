import { defaultOptions } from "~queries/options";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global } from "@emotion/react";
import globalStyle from "~styles/globals";
import Router from "~/router";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Global styles={globalStyle} />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
