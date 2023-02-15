import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'

const Item = ({ item, likeItem }) => {
  const { id, imageUrl, totalLikes, caption } = item
  return (

    <div className="max-w-sm  bg-white border border-gray-200 rounded shadow-md shadow-gray-700 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-all ease-in duration-200">
      <img className=" h-80 w-80 p-1 rounded-t-lg z-30" src={imageUrl} alt=" image" />
      <div className="pb-5 flex justify-between h-12  items-center px-3 py-1">
        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">name:{caption}</h5>
        <button className="flex text-red-500 h-8 w-8">
          <HeartIcon />
          <small className='mt-3 text-gray-200'> 
           {totalLikes}
          </small>
        </button>
      </div>

    </div>


  )
}

export default Item