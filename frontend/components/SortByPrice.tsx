import React from 'react'

const SortByPrice = () => {
  return (
      <div className="flex items-center">
          <span className="mr-2 text-bold text-[#0A1D37]">Price $ :</span>
          <span className="mr-2 text-[#0A1D37]">from</span>
          <input
              type="number"
              placeholder="0.0"
              className="w-24 px-2 py-1 border rounded-lg mr-2"
          />
          <span className="mr-2 text-[#0A1D37]">to</span>
          <input
              type="number"
              placeholder="0.0"
              className="w-24 px-2 py-1 border rounded-lg"
          />
      </div>
  )
}

export default SortByPrice