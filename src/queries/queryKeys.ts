import { Props as FaqProps } from "./faq/useGetFaqs";
import { Props as TermsProps } from "./faq/useGetTerms";

export const faqKeys = {
  all: ["faq"],
  lists: (params: FaqProps) => [...faqKeys.all, "list", params],
  categories: () => [...faqKeys.all, "categories"],
  terms: (params: TermsProps) => [...faqKeys.all, "terms", params],
};
