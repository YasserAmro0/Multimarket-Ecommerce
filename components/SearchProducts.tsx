import { FilterShop } from '@/types'
import React from 'react'

const SearchProducts = ({ setSearch, search }: FilterShop) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearch) {
      setSearch(e.target.value);
    }
  };
  return (
      <div className='flex items-center'>
          <input
              type="text"
              placeholder="search..."
        className="w-64 px-2 py-1 border rounded-lg mr-2"
        onChange={handleChange}
          />
    </div>
  )
}

export default SearchProducts