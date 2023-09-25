'use client';
import { SignUpProps } from "@/types";
import { Button, Label, TextInput } from 'flowbite-react';
import Image from "next/image";
import logoImage from '../app/assets/images/eco-logo.png'
import axiosInstance from "@/utils/api/axios";
import { useState } from "react";
import { AxiosError } from "axios";
import {toast } from "react-toastify";


const SignUp = ({ setLoginPage }: SignUpProps) => {
    const [loading, setLoading] = useState(false); 
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        setUsernameError('');
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordError('');
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError('');  
    }
    const SignUpPost = async () => {
        try {
            setErrorMessage('');
            setLoading(true);
            await axiosInstance.post('/auth/signup', {
                username,
                email,
                password,
            });
            
            setLoading(false);
            toast.success("Sign up  successfully 🎉");
            setLoginPage(true);
        } catch (error) {
            const err = error as AxiosError;
            setLoading(false);
            setErrorMessage(err.message);

            if (err.message.includes('username')) {
                setUsernameError(err.message);
            }

            if (err.message.includes('Email') || err.message.includes('already')) {
                setEmailError(err.message);
            }

            if (err.message.includes('Password')) {
                setPasswordError(err.message);
            }
           
        } 
    }
    
    return (
       
        <div className="flex flex-col items-center">
            
            <div className="mb-4">
                <Image src={logoImage} alt="Logo" className="w-12 h-12" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <form className="max-w-md flex flex-col gap-4">
                
                <div className="w-80">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="username"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="username"
                        placeholder="your name"
                        required
                        type="text"
                        color={usernameError ?'failure' :''}
                        helperText={<><span className="font-medium"></span>{usernameError}</>}
                        onChange={handleUserName}

                    />
                </div>
                <div className=" w-80">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="name@gmail.com"
                        required
                        type="email"
                        color={emailError ? 'failure' : ''}
                        helperText={<><span className="font-medium"></span>{emailError}</>}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        required
                        type="password"
                        placeholder="***************"
                        color={passwordError ? 'failure' : ''}
                        helperText={<><span className="font-medium"></span>{passwordError}</>}
                        onChange={handlePassword}
                    />
                </div>
                <Button
                    type="submit"
                    className="bg-[#0A1D37]"
                    onClick={SignUpPost} 
                    disabled={loading} 
                >
                    {loading ? 'Signing up...' : 'Sign up'}
                </Button>
            </form>
            <p className="mt-4">
                Already have an account?
                <button onClick={() => setLoginPage(true)} className="text-blue-500 underline">Login</button>
            </p>
        </div>
    );
}

export default SignUp;