import { http, HttpResponse } from "msw";
import { ResponseTerms, TermsJsonData } from "~/types/faq/terms";
import termsData from "./termsDatas.json";

export const termsHandlers = [
  http.get("/terms", ({ request }) => {
    const url = new URL(request.url);
    const termsClassID = url.searchParams.get("termsClassID");

    const termsJsonData = (termsData as TermsJsonData).data;

    const termData = termsJsonData.find((item) => item.termsClassID === termsClassID);

    if (!termData) {
      return HttpResponse.json<ResponseTerms>({
        data: {
          terms: [],
        },
      });
    }

    return HttpResponse.json<ResponseTerms>({
      data: {
        terms: termData.terms,
      },
    });
  }),
];
