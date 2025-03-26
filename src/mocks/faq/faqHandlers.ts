import { http, HttpResponse } from "msw";
import { CATEGORY_TAB_ID, FAQ_CATEGORY_ID } from "~/types/faq/category";
import {
  businessFaqs,
  consultAllFaqs,
  contractFaqs,
  counselingFaqs,
  productFaqs,
  signUpFaqs,
  usageAllFaqs,
  vehicleFaqs,
  refuelFaqs,
  couponFaqs,
  accidentFaqs,
  reservationFaqs,
} from "./faqHandlersData";

export const faqHandlers = [
  http.get("/api/faq", ({ request }) => {
    const url = new URL(request.url);
    // const limit = url.searchParams.get("limit") ?? 10;
    // const offset = url.searchParams.get("offset") ?? 0;
    const tab = url.searchParams.get("tab") ?? "CONSULT";
    const faqCategoryID = url.searchParams.get("faqCategoryID");

    switch (tab) {
      case CATEGORY_TAB_ID.USAGE:
        switch (faqCategoryID) {
          case FAQ_CATEGORY_ID.SIGN_UP:
            return HttpResponse.json(signUpFaqs);
          case FAQ_CATEGORY_ID.BUSINESS:
            return HttpResponse.json(businessFaqs);
          case FAQ_CATEGORY_ID.VEHICLE:
            return HttpResponse.json(vehicleFaqs);
          case FAQ_CATEGORY_ID.REFUEL:
            return HttpResponse.json(refuelFaqs);
          case FAQ_CATEGORY_ID.COUPON:
            return HttpResponse.json(couponFaqs);
          case FAQ_CATEGORY_ID.ACCIDENT:
            return HttpResponse.json(accidentFaqs);
          case FAQ_CATEGORY_ID.RESERVATION:
            return HttpResponse.json(reservationFaqs);
          default:
            return HttpResponse.json(usageAllFaqs);
        }
      case CATEGORY_TAB_ID.CONSULT:
        switch (faqCategoryID) {
          case FAQ_CATEGORY_ID.PRODUCT:
            return HttpResponse.json(productFaqs);
          case FAQ_CATEGORY_ID.CONTRACT:
            return HttpResponse.json(contractFaqs);
          case FAQ_CATEGORY_ID.COUNSELING:
            return HttpResponse.json(counselingFaqs);
          default:
            return HttpResponse.json(consultAllFaqs);
        }
    }
  }),
];
