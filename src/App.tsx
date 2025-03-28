import { defaultOptions } from "~queries/options";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global, ThemeProvider } from "@emotion/react";
import globalStyle from "~styles/globals";
import theme from "~styles/theme";
import Router from "~/router";
import DetermineBreakpointProvider from "./contexts/DetermineBreakpointProvider";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      <DetermineBreakpointProvider>
        <ThemeProvider theme={theme}>
          <ReactQueryDevtools />
          <Global styles={globalStyle} />

          <Router />
        </ThemeProvider>
      </DetermineBreakpointProvider>
    </QueryClientProvider>
  );
}

export default App;
