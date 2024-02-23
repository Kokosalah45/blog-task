import client from "..";
import { IArticle } from "../types";

type ListArticlesParams = {
  page?: number;
  pageSize?: number;
  q?: string;
  searchIn?: string;
};

const DEFAULT_PAGE_SIZE = "10";
const DEFAULT_PAGE = "1";
const DEFAULT_Q = "all";
const DEFAULT_SEARCH_IN = "";

type ResponsePayload = {
  status: string;
  totalResults: number;
  articles: IArticle[];
};

export default async function listArticles(props: ListArticlesParams) {
  const q = props?.q || DEFAULT_Q;
  const pageSize = props?.pageSize || DEFAULT_PAGE_SIZE;
  const page = props?.page || DEFAULT_PAGE;
  const searchIn = props?.searchIn || DEFAULT_SEARCH_IN;

  const { data, status, statusText } = await client.get<ResponsePayload>(
    "everything",
    {
      params: {
        q,
        pageSize,
        page,
        searchIn
      },
    }
  );

  return { data, status, statusText };
}
