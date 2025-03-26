import { Props as FaqProps } from "./faq/useGetFaqs";
import { Props as TermsProps } from "./faq/useGetTerms";
import { Props as CategoriesProps } from "./faq/useGetCategories";

export const faqKeys = {
  all: ["faq"],
  lists: () => [...faqKeys.all, "list"],
  list: (params: FaqProps) => [...faqKeys.lists(), params],
  categories: (params: CategoriesProps) => [...faqKeys.all, "categories", params],
  terms: (params: TermsProps) => [...faqKeys.all, "terms", params],
};
