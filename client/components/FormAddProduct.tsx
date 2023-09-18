"use client"
import React, { useState } from 'react';
import  { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '@/utils/api/axios';
const FormAddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('sofa');
    const [description, setDescription] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false); 


    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleShortDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setShortDescription(e.target.value);
    };
    const notifySuccess = () => {
        toast.success("Product added successfully 🎉");
    };

   
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            console.log(file, 'fileeeee');
            setFileToBase(file);
        }
    };
    const setFileToBase = (file: Blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            setImage(result);
        };
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const addProduct = await axiosInstance.post('/product', {
                title: title,
                price: parseInt(price),
                category: category,
                description: description,
                shortDescription: shortDescription,
                imageurl: image,
            });
            if (addProduct){
                notifySuccess();
            }
        } catch (error) {
            const err = error as AxiosError;
            toast.error(err.message);
            
        } finally {
            setLoading(false);
        }
       
    };

    return (
        <form className="w-full max-w-5xl mt-8" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6 justify-center">
                <ToastContainer />
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Title
                    </label>
                    <input className="inputStyle"
                        id="grid-first-name"
                        type="text"
                        placeholder="Title"
                        onChange={handleTitleChange}
                      />
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Price ($)
                    </label>
                    <input className="inputStyle" id="grid-first-name" type="number" placeholder="0.0" onChange={handlePriceChange}/>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Category
                    </label>
                    <div className="relative">
                        <select className="
                        block appearance-none w-full
                         bg-gray-200 border border-gray-200
                          text-gray-700 py-3 px-4 pr-8 rounded
                          leading-tight focus:outline-none focus:bg-white
                           focus:border-gray-500 mb-5" id="grid-state"
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            <option value="sofa">Sofa</option>
                            <option value="wireless">Wireless</option>
                            <option value="mobile">Mobile</option>
                            <option value="chair">Chair</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <label htmlFor="description" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"'>Description:</label>
                    <textarea id="description" name="description" className="inputStyle"  onChange={handleDescriptionChange}></textarea>
                    <label htmlFor="description" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"' >Short Description:</label>
                    <textarea id="description" name="description" className="inputStyle" onChange={handleShortDescriptionChange}></textarea>
                    <label htmlFor="image">Upload Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}

                    />
                    <button className={`bg-blue-900 text-white font-bold py-2 px-4 rounded mt-6`}
                        disabled={loading}
                    >
                        {loading ? 'Adding...' : 'Add Product'}
                    </button> 
                </div>

            </div>

        </form>
    );
};

export default FormAddProduct;