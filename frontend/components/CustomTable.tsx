import React from 'react';
import { HeadersProps } from '@/types';
interface CustomTableProps {
    headers: HeadersProps[];
}
const CustomTable = ({ headers }: CustomTableProps) => {
  return (
      <table className="table-auto w-full">
          {/* Table content goes here */}
          <thead>
              <tr>
                  {
                      headers.map((head) => {
                          return (
                              <th className="px-4 py-2">{head.title}</th>
                          )
                      })
                  }
                  {/* Add more headers as needed */}
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="border px-4 py-2">Data 1</td>
                  <td className="border px-4 py-2">Data 2</td>
                  <td className="border px-4 py-2">Data 2</td>
                  <td className="border px-4 py-2">Data 2</td>
                  <td className='border px-4 py-2'>
                      <button type='submit'>Edit</button>
                      <button>Delete</button>
                  </td>

                  {/* Add more data cells as needed */}
              </tr>
          </tbody>
      </table>
  )
}

export default CustomTable