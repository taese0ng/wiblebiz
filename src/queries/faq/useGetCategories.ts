import { useQuery } from "@tanstack/react-query";
import { faqKeys } from "../queryKeys";
import { customFetch } from "~apis/customFetch";
import { CategoryTabID, ResponseCategory } from "~types/faq/category";

export interface Props {
  tab: CategoryTabID;
}

async function fetchCategories(props: Props) {
  const response = await customFetch<ResponseCategory>("/api/category", {
    params: {
      tab: props.tab,
    },
  });

  return response;
}

function useGetCategories(props: Props) {
  return useQuery({
    queryKey: faqKeys.categories(props),
    queryFn: () => fetchCategories(props),
    select: (data) => data?.data ?? [],
  });
}

export default useGetCategories;
