export interface Item {
  answer: string;
  cateogryName: string;
  id: number;
  question: string;
  subCategoryName: string;
}

export interface PageInfo {
  limit: number;
  nextOffset: number;
  offset: number;
  prevOffset: number;
  totalRecord: number;
}

export interface ResponseFaq {
  data: {
    items: Item[];
    pageInfo: PageInfo;
  };
}
