import { http, HttpResponse } from "msw";
import { CategoryJsonData, ResponseCategory } from "~/types/faq/category";
import categoryData from "./categoryDatas.json";

export const categoryHandlers = [
  http.get("/api/category", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");

    const categoryJsonData = (categoryData as CategoryJsonData).data;

    const tabData = categoryJsonData.find((item) => item.tabID === tab);

    if (!tabData) {
      return HttpResponse.json<ResponseCategory>({
        data: [],
      });
    }

    return HttpResponse.json<ResponseCategory>(tabData);
  }),
];
