import { FilterPriceProps, FilterShop } from '@/types'
import React from 'react'

const SortByPrice = ({setMinPrice, setMaxPrice }: FilterPriceProps) => {
    const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        if (value === '') {
            setMinPrice(0);
        }
        const parsedValue = parseFloat(e.target.value);
        if (!isNaN(parsedValue)) {
            setMinPrice(parsedValue);
        }
    }
    const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.trim();
            if (value === '') {
                setMaxPrice(0); 
            }
            const parsedValue = parseFloat(e.target.value);
            if (!isNaN(parsedValue)) {
                setMaxPrice(parsedValue);
        }
    };
  return (
      <div className="flex items-center">
          <span className="mr-2 text-bold text-[#0A1D37]">Price $ :</span>
          <span className="mr-2 text-[#0A1D37]">from</span>
          <input
              type="number"
              placeholder="0.0"
              className="w-24 px-2 py-1 border rounded-lg mr-2"
              onChange={handleMinPrice}
          />
          <span className="mr-2 text-[#0A1D37]">to</span>
          <input
              type="number"
              placeholder="0.0"
              className="w-24 px-2 py-1 border rounded-lg"
              onChange={handleMaxPrice}
          />
      </div>
  )
}

export default SortByPrice