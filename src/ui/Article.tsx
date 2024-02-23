import { IArticle } from '@/services/data/types'
import { format } from 'date-fns'
import React, { forwardRef, Ref } from 'react'

import noImage from "@/assets/no-image.png";

type Props = {
    article: IArticle
}

const Article = forwardRef<HTMLDivElement, Props>(({ article }, ref: Ref<HTMLDivElement>) => {
    return (
        <div
            className="flex flex-col gap-2 justify-between"
            ref={ref}
            key={article.url}
        >
            <figure className="rounded-md overflow-hidden border-px">
                <img
                    width={200}
                    height={150}
                    className="w-full h-40 object-cover"
                    src={article.urlToImage || noImage}
                    alt={article.title}
                />
            </figure>
            <div className="flex flex-col gap-5">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <div className="flex justify-between">
                    <p>{format(new Date(article.publishedAt), "dd MMMM yyyy")}</p>
                    <p>{article.author}</p>
                </div>
                <p>{article.description}</p>
            </div>
        </div>
    )
})

export default Article
