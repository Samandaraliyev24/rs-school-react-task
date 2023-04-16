/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRootState {
  search: {
    query: string;
    results: any[];
    submissions: any[];
  };
}
