"use client"
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axiosInstance from '@/utils/api/axios';
import { ToastContainer, toast } from 'react-toastify';
import CheckoutForm from './checkout';
import { PaymentModal } from '@/types';

const NEXT_PUBLIC_API_KEY:any = process.env.NEXT_PUBLIC_API_KEY
const stripePromise = loadStripe(NEXT_PUBLIC_API_KEY);
const Payment = ({ calculateSubtotal, openModal, setOpenModal }: PaymentModal) => {
  
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        const getClientSecret = async () => {
            try {
                const data : any = await axiosInstance.post('/payment-intent', {
                    total_price: calculateSubtotal(),
                });
                setClientSecret(data.clientSecret);

            } catch (err) {
                toast.error('Failed to create payment intent.');
            }
        };

        getClientSecret();
    }, []);
    return (
        <div>
            {clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm openModal={openModal} setOpenModal={setOpenModal} />
                </Elements>
            ) : (
                <div>Loading...</div>
            )}
            <ToastContainer />
        </div>
)
 
};

export default Payment;