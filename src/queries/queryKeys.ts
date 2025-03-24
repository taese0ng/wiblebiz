import { Props as FaqProps } from "./faq/useGetFaqs";

export const faqKeys = {
  all: ["faq"],
  lists: (params: FaqProps) => [...faqKeys.all, "list", params],
  categories: () => [...faqKeys.all, "categories"],
};
