import React from 'react'

const SearchProducts = () => {
  return (
      <div className='flex items-center'>
          <input
              type="text"
              placeholder="search..."
              className="w-64 px-2 py-1 border rounded-lg mr-2"
          />
    </div>
  )
}

export default SearchProducts