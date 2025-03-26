export const FAQ_CATEGORY_ID = {
  PRODUCT: "PRODUCT",
  COUNSELING: "COUNSELING",
  CONTRACT: "CONTRACT",
  SIGN_UP: "SIGN_UP",
  BUSINESS: "BUSINESS",
  ACCIDENT: "ACCIDENT",
  RESERVATION: "RESERVATION",
  VEHICLE: "VEHICLE",
  REFUEL: "REFUEL",
  COUPON: "COUPON",
} as const;

export interface Category {
  categoryID: string;
  name: string;
}

export interface ResponseCategory {
  data: Category[];
}

export const CATEGORY_TAB_ID = {
  USAGE: "USAGE",
  CONSULT: "CONSULT",
} as const;

export type CategoryTabID = (typeof CATEGORY_TAB_ID)[keyof typeof CATEGORY_TAB_ID];
