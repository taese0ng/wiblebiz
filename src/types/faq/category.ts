export const FAQ_CATEGORY_ID = {
  PRODUCT: "PRODUCT",
  COUNSELING: "COUNSELING",
  CONTRACT: "CONTRACT",
} as const;

export interface Category {
  categoryId: string;
  name: string;
}

export interface ResponseCategory {
  data: Category[];
}
