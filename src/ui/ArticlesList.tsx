import { IArticle } from '@/services/data/types'
import React from 'react'

type Props = {
    articles : IArticle[]
    articleView : (article:IArticle , index:number , articleLength : number) => React.ReactNode
}
const ArticlesList = ({articles , articleView }:Props) => {
  return (
    <ul className='grid grid-cols-dynamic gap-5 items-stretch auto-rows-fr'>
        {articles?.map((article , index ) => (
            <li
                className="border-2 rounded-md shadow-sm p-5 flex flex-col gap-2 justify-between"
                key={article.url}
            >
               {articleView(article , index , articles.length )}
            </li>
        
        ))}
    </ul>
  )
}

export default ArticlesList
