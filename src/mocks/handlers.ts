import { categoryHandlers } from "./faq/categoryHandlers";
import { faqHandlers } from "./faq/faqHandlers";

export const handlers = [...categoryHandlers, ...faqHandlers];
