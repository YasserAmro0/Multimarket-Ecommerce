"use client"
import React, {
    useState, useEffect, useMemo,
} from 'react';
import  axiosInstance   from '../utils/api/axios';
import userDataContext from './contextData';
import { AppContextProps, UserData } from '@/types';

const AuthContext: React.FC<AppContextProps> = ({ children }) => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [userChange, setUserChange] = useState<boolean>(true);

    useEffect(() => {
        const getUserData = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get('auth/');
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        getUserData();
    }, [userChange]);

    const contextValue = useMemo(() => ({
        userData, setUserData, userChange, setUserChange
    }), [userData, setUserData, userChange, setUserChange, ]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner_status" role="status">
                    <span className="spinner_loading">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <userDataContext.Provider
            value={contextValue}
        >
            {children}
        </userDataContext.Provider>
    );
};

export default AuthContext;
