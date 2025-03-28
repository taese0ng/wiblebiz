import { http, HttpResponse } from "msw";
import faqDatas from "./faqDatas.json";
import { ResponseFaq, Item, FaqJsonData } from "~/types/faq/faq";
import { CategoryTabID, CATEGORY_TAB_ID } from "~/types/faq/category";

export const faqHandlers = [
  http.get("/faq", ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get("limit") ?? 10);
    const offset = Number(url.searchParams.get("offset") ?? 0);
    const question = url.searchParams.get("question") ?? "";
    const tab = (url.searchParams.get("tab") as CategoryTabID) ?? CATEGORY_TAB_ID.CONSULT;
    const faqCategoryID = url.searchParams.get("faqCategoryID");

    const tabJsonDataItems = (faqDatas as FaqJsonData).data;
    const tabData = tabJsonDataItems.find((item) => item.tabID === tab);

    if (!tabData) {
      return HttpResponse.json<ResponseFaq>({
        data: {
          pageInfo: {
            limit,
            offset,
            totalRecord: 0,
            nextOffset: null,
            prevOffset: null,
          },
          items: [],
        },
      });
    }

    let allItems: Item[] = [];

    let categoryData = tabData.data;
    if (faqCategoryID) {
      categoryData = tabData.data.filter((category) => category.categoryID === faqCategoryID);
    }

    categoryData.forEach((category) => {
      if (Array.isArray(category.items)) {
        allItems = [...allItems, ...category.items];
      }
    });

    if (question) {
      const searchQuery = question.toLowerCase();
      allItems = allItems.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery) ||
          item.categoryName.toLowerCase().includes(searchQuery) ||
          item.subCategoryName.toLowerCase().includes(searchQuery) ||
          item.answer.toLowerCase().includes(searchQuery),
      );
    }

    if (allItems.length === 0) {
      return HttpResponse.json<ResponseFaq>({
        data: {
          pageInfo: {
            limit,
            offset,
            totalRecord: 0,
            nextOffset: null,
            prevOffset: null,
          },
          items: [],
        },
      });
    }

    const totalRecord = allItems.length;
    const paginatedItems = allItems.slice(offset, offset + limit);

    const response: ResponseFaq = {
      data: {
        items: paginatedItems,
        pageInfo: {
          limit,
          offset,
          totalRecord,
          nextOffset: offset + limit < totalRecord ? offset + limit : null,
          prevOffset: offset > 0 ? Math.max(0, offset - limit) : null,
        },
      },
    };

    return HttpResponse.json<ResponseFaq>(response);
  }),
];
