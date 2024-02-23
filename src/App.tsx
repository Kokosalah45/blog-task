import ArticlesGrid from "@/features/ArticlesGrid";
import SearchBar from "./features/SearchBar";


function App() {
 

  return (
    <>
      <header className="border-b-2 shadow-md p-5 text-center sticky top-0 bg-white h-header-height">
        <h1 className="font-semibold text-4xl">Articles !</h1>
      </header>
      <main className="p-5 h-main-height">
          <SearchBar/>
          <ArticlesGrid/>
      </main>
    </>
  );
}

export default App;
