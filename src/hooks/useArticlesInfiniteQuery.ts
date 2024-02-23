import { useInfiniteQuery } from "@tanstack/react-query";
import listArticles from "@/services/data/articles/listArticles";

export default function useArticlesInfiniteQuery(
 {page , pageSize , q , searchIn} = {
  page : 1,
  pageSize : 10,
  q : "all",
  searchIn :""
 }
) {
  return useInfiniteQuery({
    initialPageParam: page,
    queryKey: ["articles", { page, pageSize, q  , searchIn }],
    queryFn: ({ pageParam, queryKey }) => {
      const params = queryKey[1] as {
        page: number;
        pageSize: number;
        q: string;
        searchIn : string;
      };
      return listArticles({ ...params, page: pageParam });
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.data.totalResults / pageSize);
      if (allPages.length >= totalPages) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
}
