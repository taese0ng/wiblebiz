import { useInfiniteQuery } from "@tanstack/react-query";
import { faqKeys } from "../queryKeys";
import { customFetch } from "~/apis/customFetch";
import { ResponseFaq, PageInfo } from "~/types/faq/faq";

export interface Props {
  faqCategoryID: string;
  question?: string;
  limit?: number;
  tab?: string;
}

interface FaqData {
  items: ResponseFaq["data"]["items"];
  pageInfo: PageInfo;
}

async function fetchFaqs({
  faqCategoryID,
  pageParam = 0,
  limit = 10,
  tab = "CONSULT",
  question,
}: Props & { pageParam?: number }) {
  const response = await customFetch<ResponseFaq>("/api/faq", {
    params: {
      faqCategoryID,
      offset: pageParam.toString(),
      limit: limit.toString(),
      tab,
      ...(question && { question }),
    },
  });

  return response;
}

function useGetFaqs(props: Props) {
  return useInfiniteQuery<ResponseFaq, Error, FaqData>({
    queryKey: faqKeys.list(props),
    queryFn: ({ pageParam }) => fetchFaqs({ ...props, pageParam: pageParam as number }),
    select: (data) => ({
      items: data.pages.flatMap((page) => page.data?.items ?? []),
      pageInfo: data.pages[data.pages.length - 1]?.data?.pageInfo ?? {
        offset: 0,
        limit: 10,
        totalRecord: 0,
        nextOffset: null,
        prevOffset: null,
      },
    }),
    getNextPageParam: (lastPage) => {
      const { pageInfo } = lastPage.data;
      if (!pageInfo) return undefined;
      return pageInfo.nextOffset;
    },
    initialPageParam: 0,
  });
}

export default useGetFaqs;
