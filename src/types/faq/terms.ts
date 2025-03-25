export const TERMS_CLASS_ID = {
  JOIN_SERVICE_USE: "JOIN_SERVICE_USE",
  STARTADMIN_ADMIN_PRIVACY: "STARTADMIN_ADMIN_PRIVACY",
} as const;

export type TermsClassID = (typeof TERMS_CLASS_ID)[keyof typeof TERMS_CLASS_ID];

export interface Term {
  contents: string;
  endDate: number;
  startDate: number;
  termsName: string;
  termsVersion: number;
}

export interface ResponseTerms {
  data: {
    terms: Term[];
  };
}
