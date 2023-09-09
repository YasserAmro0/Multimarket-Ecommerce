"use client"

import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ImageClose from '../app/assets/images/close.svg';
import SignUp from './SignUp';
import { ModalProps } from '@/types';
import Login from './Login';

const Modal = ({ isOpen, closeModel, isLoginPage ,setLoginPage}: ModalProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10"
                    onClose={closeModel}>
                    <Transition.Child
                        as={Fragment} enter="ease-out duration-300"
                        enterFrom="opacity-0 "
                        enterTo="opacity-100 "
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 " leaveTo="opacity-0 scale-95">
                        <div className="fixed inset-0 bg-black/30 bg-opacity-25" />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-out duration-300'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                                    <button
                                        type='button'
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                        onClick={closeModel}
                                    >
                                        <Image
                                            src={ImageClose}
                                            alt="close"
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        />

                                    </button>
                                    <div className='flex justify-center'>
                                        {
                                            isLoginPage ? <Login setLoginPage={setLoginPage}/> : <SignUp setLoginPage={setLoginPage} />
                                        }
                                    </div>
                                   
                                   
                                </Dialog.Panel>
                            </Transition.Child>

                        </div>

                    </div>

                </Dialog>

            </Transition>
        </>
    )
}

export default Modal;