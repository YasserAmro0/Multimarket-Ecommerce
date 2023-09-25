'use client';
import {  Modal } from 'flowbite-react';
import Payment from './payment';
import { PaymentModal } from '@/types';

const ModalPayment = ({ openModal, setOpenModal, calculateSubtotal }: PaymentModal) =>{
    const props = { openModal, setOpenModal };
    return (
        <>
            <Modal dismissible
                show={props.openModal === 'dismissible'}
                onClose={() => props.setOpenModal(undefined)}
                size="lg"
            >
                <Modal.Header>Total Price : ${calculateSubtotal()}</Modal.Header>
                <Modal.Body>
                    <Payment calculateSubtotal={calculateSubtotal} openModal={openModal} setOpenModal={setOpenModal} />
                </Modal.Body>
            </Modal>
            

        </>
    )
}
export default ModalPayment;