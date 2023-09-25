'use client';

import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import FormAddProduct from './FormAddProduct';
import axiosInstance from '@/utils/api/axios';
import { ProductsProps, defaultProductData } from '@/types';

const ModelUpdate = ({ openModal, setOpenModal, productId }:any)=> {
    const props = { openModal, setOpenModal };
    const [initialProductData, setInitialProductData] = useState<ProductsProps>(defaultProductData);

    const fetchInitialProductData = async (productId: string) => {
        try {
            const response = await axiosInstance.get(`product/${productId}`);
            setInitialProductData(response.data); 
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (productId) {
            fetchInitialProductData(productId);
        }
    }, [productId]);

   
    return (
        <>
            <Modal dismissible
                show={props.openModal === 'dismissible'}
                onClose={() => props.setOpenModal(undefined)}
                size={'xl'}
            >
                <Modal.Header>Update Product 🔧 </Modal.Header>
                <Modal.Body>
                    <FormAddProduct showAddButton={false} initialProductData={initialProductData} />
                </Modal.Body>
                <Modal.Footer>
                    <Button color="red" onClick={() => props.setOpenModal(undefined)} >
                        Cancel
                    </Button>
                </Modal.Footer>
                
            </Modal>
        </>
    )
}

export default ModelUpdate;