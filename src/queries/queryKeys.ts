import { Props as FaqProps } from "./faq/useGetFaqs";
import { Props as TermsProps } from "./faq/useGetTerms";
import { Props as CategoriesProps } from "./faq/useGetCategories";

export const faqKeys = {
  all: ["faq"],
  lists: (params: FaqProps) => [...faqKeys.all, "list", params],
  categories: (params: CategoriesProps) => [...faqKeys.all, "categories", params],
  terms: (params: TermsProps) => [...faqKeys.all, "terms", params],
};
