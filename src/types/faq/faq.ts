import { CategoryTabID, FaqCategoryID } from "./category";

export interface Item {
  answer: string;
  categoryName: string;
  id: number;
  question: string;
  subCategoryName: string;
}

export interface PageInfo {
  limit: number;
  nextOffset: number | null;
  offset: number;
  prevOffset: number | null;
  totalRecord: number;
}

export interface ResponseFaq {
  data: {
    items: Item[];
    pageInfo: PageInfo;
  };
}

export interface FaqJsonCategoryData {
  categoryID: FaqCategoryID;
  items: Item[];
}

export interface FaqJsonTabDataItem {
  tabID: CategoryTabID;
  data: FaqJsonCategoryData[];
}

export interface FaqJsonData {
  data: FaqJsonTabDataItem[];
}
