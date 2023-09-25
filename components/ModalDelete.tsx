'use client';

import { ProductsProps } from '@/types';
import axiosInstance from '@/utils/api/axios';
import { AxiosError } from 'axios';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { toast } from 'react-toastify';
interface ModalDeleteProps {
    _id: string;
    setProducts: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
}
const ModalDelete = ({ _id, setProducts }: ModalDeleteProps) => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    

    const handleDelete = async () => {
        try {
            const data = await axiosInstance.delete(`admin/product/${_id}`);
            setProducts((prevProduct) => prevProduct.filter((product) => product._id !== _id));
            toast.success("delete product successfully ✔");
            setOpenModal(undefined)
        } catch (error) {
            const err = error as AxiosError;
            toast.error(err.message);
        }
    }


    return (
        <>
            <i className="ri-delete-bin-5-line text-red-500 text-xl cursor-pointer mr-1" onClick={() => props.setOpenModal('pop-up')}></i> 
            <Modal show={openModal === 'pop-up'} size="md" popup onClose={() => setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this product?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleDelete}>
                                Yes, I'm sure
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(undefined)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalDelete;