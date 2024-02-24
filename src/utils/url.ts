export type SearchParams = Record<string , string>;

export const pushSearchState = (searchParams : SearchParams) =>  {
    const URLsearchParams = new URLSearchParams();
    const searchEntries = Object.entries(searchParams);

    if (searchEntries.length === 0) {
      history.pushState(null, "", "/");
      return;
    }

    for (const [key, value] of searchEntries) {
        if (value === "") {
            delete searchParams[key];
            continue;
        }
      URLsearchParams.set(key, value);
    }
    const queryString = URLsearchParams.toString();
    history.pushState(null, "", ` ${queryString ? `?${queryString}` : "/"}`);
  }

 export const pullSearchState = () => {
    const searchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(searchParams.entries());
  
 }
