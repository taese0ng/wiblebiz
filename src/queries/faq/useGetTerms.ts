import { useQuery } from "@tanstack/react-query";
import { faqKeys } from "../queryKeys";
import { customFetch } from "~apis/customFetch";
import { ResponseTerms, TermsClassID } from "~/types/faq/terms";

export interface Props {
  termsClassID: TermsClassID;
}

async function fetchTerms({ termsClassID }: Props) {
  const response = await customFetch<ResponseTerms>("/api/terms", {
    params: {
      termsClassID,
    },
  });

  return response;
}

function useGetTerms(props: Props, options?: Record<string, unknown>) {
  return useQuery({
    queryKey: faqKeys.terms(props),
    queryFn: () => fetchTerms(props),
    select: (data) => data?.data.terms ?? [],
    ...options,
  });
}

export default useGetTerms;
