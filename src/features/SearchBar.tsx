import { useSearchParams } from '@/Providers/SearchParamsProvider';
import { Search } from 'lucide-react'

const SearchBar = () => {

    const { getSearchParam , setSearchParam } = useSearchParams();
    
    const searchParam = getSearchParam('search') ?? ""
    console.log({searchParam})
  return (
    <form
    onSubmit={e => {
        e.preventDefault();
        setSearchParam('search' , e.target['search'].value);
    }}
    className=" border relative rounded-xl overflow-hidden mb-5 "
  >
    <span
      className="opacity-100 rounded-s-xl px-2 h-full absolute  flex items-center mb-1 "
    >
      <Search color="gray" />
    </span>
   <div className='flex'>
   <input
      className=" ps-12 outline-none p-2 rounded-xl w-full"
      type="text"
      name="search"
      defaultValue={searchParam}
    />
    <button type='submit' className='bg-slate-500 px-11 hover:bg-slate-700 transition-all text-white text-lg'>
        search
    </button>
   </div>
  </form>
  )
}

export default SearchBar
