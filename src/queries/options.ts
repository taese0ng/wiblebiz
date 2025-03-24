import { DefaultOptions } from "@tanstack/react-query";

export const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 15000,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },
};
