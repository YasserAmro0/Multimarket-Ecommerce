import React from 'react';

const Page = () => {

    return (
        <form className="w-full max-w-5xl mt-8">
            <div className="flex flex-wrap -mx-3 mb-6 justify-center">
                
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                         Title
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Title" />
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Price ($)
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="0.0" />
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Category
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <label htmlFor="description" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"'>Description:</label>
                    <textarea id="description" name="description" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"'></textarea>
                    <label htmlFor="description" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"'>Short Description:</label>
                    <textarea id="description" name="description" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"'></textarea>
                    <label htmlFor="image">Upload Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                    />
                    <button className='bg-[#0A1D37] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-6'>
                        add Product
                    </button>
                </div>
                
            </div>
            
        </form>
    )
}
export default Page;