"use client"
import axiosInstance from '@/utils/api/axios';
import Image from "next/image";
import { AxiosError } from 'axios';
import { Label, TextInput, Button } from 'flowbite-react';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import logoImage from '../../assets/images/eco-logo.png';

const page = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordError('');
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError('');
    }
    const LoginAdmin = async () => {
        try {
            setErrorMessage('');
            setLoading(true);
            const response = await axiosInstance.post('/auth/login/admin', {
                email,
                password,
            });
            localStorage.setItem('access_token', response.data.access_token);
            setLoading(false);
            window.location.replace('/admin/dashboard');
            toast.success("login successfully 🎉");
        } catch (error) {
            const err = error as AxiosError;
            setLoading(false);
            setErrorMessage(err.message);

            if (err.message.includes('Email')) {
                setEmailError(err.message);
            }

            if (err.message.includes('Password')) {
                setPasswordError(err.message);
            }

        }
    }
  return (
      <div className="flex flex-col items-center justify-center mt-32 ">

          <div className="mb-4">
              <Image src={logoImage} alt="Logo" className="w-12 h-12" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Multimarket</h1>
          <form className="max-w-md flex flex-col gap-4">
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
                  onClick={LoginAdmin}
                  disabled={loading}
              >
                  {loading ? 'Login...' : 'login'}
              </Button>
          </form>
      </div>
  )
}

export default page