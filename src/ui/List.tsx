import React from 'react'

type Props<T> = { 
    listItems : T[]
    itemView : (itemData: T , index:number , itemsLength : number) => React.ReactNode
    keyExtractor : (itemData: T) => string
}
const List = <T,>({listItems , itemView , keyExtractor }:Props<T>) => {
  return (
    <ul className='grid grid-cols-dynamic gap-5 items-stretch auto-rows-fr'>
        {listItems?.map((itemData , index ) => (
            <li
                className="border-2 rounded-md shadow-sm p-5 flex flex-col gap-2 justify-between"
                key={keyExtractor(itemData)}
            >
               {itemView(itemData , index , listItems.length )}
            </li>
        
        ))}
    </ul>
  )
}

export default List


// make it generic and add a method that extracts a key to be put in the key attribute