import { useInView } from "react-intersection-observer";
import useArticlesInfiniteQuery from "@/hooks/useArticlesInfiniteQuery";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { useEffect } from "react";
import Article from "@/ui/Article";
import List from "@/ui/List";
import Button from "@/ui/Button";
import { useSearchParams } from "@/Providers/SearchParamsProvider";

const ArticlesGrid = () => {

  const { getSearchParam } = useSearchParams();
  const searchParam = getSearchParam("search");
  
  const {
    data: articlePages,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    error,
    isError,
    isLoading,
    refetch,
  } = useArticlesInfiniteQuery({

    searchIn : searchParam ?? "",
    pageSize: 10,
    page: 1,
    q: "all",
    
  });

  

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError && !articlePages) {
    return <div>Error: {error?.message}</div>;
  }

  const articles = articlePages?.pages.flatMap((page) => page.data.articles);

  return (
    <section>
      <pre>{searchParam}</pre>
      <List
        listItems={articles || []}
        itemView={(article, index, articlesLength) => (
          <Article
            article={article}
            ref={index === articlesLength - 1 ? ref : null}
          />
        )}
        keyExtractor={(article) => article.url}
      />
      <div className="flex flex-col gap-5 items-center mt-5">
        <Button
          onClick={() => {
            if (isError) {
              refetch();
              return;
            }
            fetchNextPage();
          }}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage && <LoadingSpinner width={50} height={50} />}

          {!isFetchingNextPage && hasNextPage && !isError && "Load More"}

          {!isFetchingNextPage &&
            !hasNextPage &&
            !isError &&
            "No More Articles"}

          {!isFetchingNextPage && isError && "Retry"}
        </Button>
        {isError && <div className="text-red-600">Error: {error?.message}</div>}
      </div>
    </section>
  );
};

export default ArticlesGrid;
