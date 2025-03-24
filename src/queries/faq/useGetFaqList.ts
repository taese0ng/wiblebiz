import { useQuery } from "@tanstack/react-query";
import { faqKeys } from "../queryKeys";

async function fetchFaqList() {
  const response = await fetch("/api/example");

  if (!response.ok) {
    throw new Error("Failed to fetch faq list");
  }

  return response.json();
}

function useGetFaqList() {
  return useQuery({
    queryKey: faqKeys.lists(),
    queryFn: fetchFaqList,
  });
}

export default useGetFaqList;
