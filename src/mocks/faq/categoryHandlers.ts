import { http, HttpResponse } from "msw";

export const categoryHandlers = [
  http.get("/api/category", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");

    switch (tab) {
      case "CONSULT":
        return HttpResponse.json({
          data: [
            {
              categoryId: "PRODUCT",
              name: "서비스 상품",
            },
            {
              categoryId: "COUNSELING",
              name: "도입 상담",
            },
            {
              categoryId: "CONTRACT",
              name: "계약",
            },
          ],
        });
      default:
        return HttpResponse.json({
          message: "This is a mocked response",
          timestamp: new Date().toISOString(),
        });
    }
  }),
];
