import { categoryHandlers } from "./faq/categoryHandlers";
import { faqHandlers } from "./faq/faqHandlers";
import { termsHandlers } from "./faq/termsHandlers";

export const handlers = [...categoryHandlers, ...faqHandlers, ...termsHandlers];
