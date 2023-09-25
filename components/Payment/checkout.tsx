"use client"
import { SyntheticEvent, useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { Modal, Button } from 'flowbite-react';
import { CheckoutT } from '@/types';

const CheckoutForm = ({ setOpenModal, openModal }: CheckoutT) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        setIsLoading(true);

        try {
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                redirect: 'if_required',
            });

            if (error) {
                throw new Error(error.message);
            }

            if (paymentIntent?.status === 'succeeded') {
                toast.success('Payment succeeded 🔥');
                setOpenModal(undefined);
            } else {
                throw new Error('Payment was not successful.');
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            toast.error(axiosError.message || 'An error occurred while confirming the payment.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleBuyClick = () => {
        const syntheticEvent = new Event('submit', { cancelable: true });
        handleSubmit(syntheticEvent as unknown as React.FormEvent);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <div className="mb-4">
                <PaymentElement id="payment-element" />
            </div>
            <Modal.Footer>
                {isLoading ? (
                    <Button disabled>Loading...</Button>
                ) : (
                    <Button onClick={handleBuyClick}>Buy</Button>
                )}
               
                <Button color="failure" onClick={() => setOpenModal(undefined)}>
                    Cancel
                </Button>
            </Modal.Footer>
        </form>
    );
};

export default CheckoutForm;