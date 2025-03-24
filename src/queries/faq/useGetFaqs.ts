import { useQuery } from "@tanstack/react-query";
import { faqKeys } from "../queryKeys";
import { customFetch } from "~/apis/customFetch";
import { ResponseFaq } from "~/types/faq/faq";

export interface Props {
  faqCategoryID: string;
  offset?: number;
  limit?: number;
  tab?: string;
}

async function fetchFaqs({ faqCategoryID, offset = 0, limit = 10, tab = "CONSULT" }: Props) {
  const response = await customFetch<ResponseFaq>("/api/faq", {
    params: {
      faqCategoryID,
      offset: offset.toString(),
      limit: limit.toString(),
      tab,
    },
  });

  return response;
}

function useGetFaqs(props: Props) {
  return useQuery({
    queryKey: faqKeys.lists(props),
    queryFn: () => fetchFaqs(props),
    select: (data) => data?.data ?? {},
  });
}

export default useGetFaqs;
