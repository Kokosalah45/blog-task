import React , {createContext , useContext , useState , useEffect , Dispatch , SetStateAction} from 'react'


type SearchParamsContext = {
    setSearchParam : (key : string , value : string) => void,
    deleteSearchParam : (key : string) => void,
    getSearchParam : (key : string) => string | null

}

const searchParamsContext = createContext<SearchParamsContext>({
    setSearchParam: (_) => {},
    deleteSearchParam: (_) => {},
    getSearchParam: (_) => null
})



type Props = {
    children : React.ReactNode
}

const SearchParamsProvider = ({children} : Props) => {

  const [searchParams , setSearchParams] = useState<Record<string , string>>(() => {
        const searchParams = new URLSearchParams(window.location.search);
        return Object.fromEntries(searchParams.entries());
  })



    useEffect(() => {
        const URLsearchParams = new URLSearchParams();
        const searchEntries = Object.entries(searchParams);
        
        if(searchEntries.length === 0){
            history.pushState(null , '' , '/');
            return;
        }

        for(const [key , value] of  searchEntries){
            URLsearchParams.set(key , value);
        }
        const queryString = URLsearchParams.toString();
        history.pushState(null , '' , `?${queryString}`);
    }, [searchParams])

    const getSearchParam = (param:string) => {
        return searchParams[param];

    }
    const setSearchParam = (param:string , value:string) => {
        setSearchParams({
            ...searchParams,
            [param]: value
        })
    }
    const deleteSearchParam = (param:string) => {
        const  { [param] : _ ,  ...newSearchParams} = searchParams;
        setSearchParams(newSearchParams);
    }
  return <searchParamsContext.Provider value={{
    setSearchParam,
    deleteSearchParam,
    getSearchParam,
  }}>
    {children}
  </searchParamsContext.Provider>
      
  
}
export const useSearchParams = () => {
    const context = useContext(searchParamsContext);
    if(!context){
        throw new Error('useSearchParams must be used within a SearchParamsProvider');
    }
    return context;
}
export default SearchParamsProvider;
