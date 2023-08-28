"use client"
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import arrowImage from '../app/assets/images/chevron-up-down.svg';
import Image from 'next/image';

const Categories = [
    { id: 1, name: 'Filter By Category' },
    { id: 2, name: 'sofa' },
    { id: 3, name: 'mobile' },
    { id: 4, name: 'wireless' },
    { id: 5, name: 'chair' },
]
const FilterByCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState(Categories[0])

  return (
      <div className="relative w-fit z-10">
          <Listbox value={selectedCategory} onChange={setSelectedCategory}>
              <Listbox.Button className='relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-[#0a1d37] py-2 px-3 text-left shadow-md sm:text-sm border text-white'>
                  {selectedCategory.name}
                  <Image
                      src={arrowImage}
                      width={20}
                      height={20}
                      alt="chevron up"
                      className="ml-4 object-contain"
                  />
              </Listbox.Button>
              <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md text-white bg-[#0a1d37] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {Categories.map((category) => (
                      <Listbox.Option
                          key={category.id}
                          value={category}
                          className={({ active, selected }) =>
                              `relative cursor-default select-none py-2 px-4 text-white ui-active:text-white ui-not-active:bg-white ui-not-active:text-black  ${active ? "bg-blue-600" : "bg-[#0a1d37]"
                              }`
                          }
                      >
                          {category.name}
                      </Listbox.Option>
                  ))}
              </Listbox.Options>
          </Listbox>
          
    </div>
  )
}

export default FilterByCategory