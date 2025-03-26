import { http, HttpResponse } from "msw";
import { CATEGORY_TAB_ID } from "~/types/faq/category";
import { consultCategories, usageCategories } from "./categoryHandlersData";

export const categoryHandlers = [
  http.get("/api/category", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");

    switch (tab) {
      case CATEGORY_TAB_ID.CONSULT:
        return HttpResponse.json(consultCategories);
      case CATEGORY_TAB_ID.USAGE:
        return HttpResponse.json(usageCategories);
    }
  }),
];
