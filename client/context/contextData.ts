"use client"
import { UserDataContextValue } from '@/types';
import { createContext } from 'react';

const userDataContext = createContext<UserDataContextValue | null>(null);

export default userDataContext;
