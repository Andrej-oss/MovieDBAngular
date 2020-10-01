export interface Review {
  id: string;
  author: string;
  content: string;
  url: string;
}
export interface Reviews {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}
