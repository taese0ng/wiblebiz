export const faqKeys = {
  all: ["faq"],
  lists: () => [...faqKeys.all, "list"],
  categories: () => [...faqKeys.all, "categories"],
};
