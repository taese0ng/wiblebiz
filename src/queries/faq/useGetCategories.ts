import { useQuery } from "@tanstack/react-query";
import { faqKeys } from "../queryKeys";
import { customFetch } from "~apis/customFetch";
import { ResponseCategory } from "~types/faq/category";

async function fetchCategories() {
  const response = await customFetch<ResponseCategory>("/api/category", {
    params: {
      tab: "CONSULT",
    },
  });

  return response;
}

function useGetCategories() {
  return useQuery({
    queryKey: faqKeys.categories(),
    queryFn: fetchCategories,
    select: (data) => data?.data ?? [],
  });
}

export default useGetCategories;
