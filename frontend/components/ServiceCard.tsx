import React from 'react';
import serviceData from '@/app/assets/data/serviceData';

const ServiceCard = () => {
    return (
        <div className='mt-8'>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {serviceData.map((data, index) => { 
                    const { title, subtitle, icon, bg } = data;
                    return (
                        <div key={index} style={{ backgroundColor: bg }} className='flex  p-4 rounded-lg'> 
                            <div className='flex items-center justify-center bg-[#0A1D37] rounded-full w-10 h-10 mr-2'>
                                <i className={`${icon} text-slate-300 text-xl`}></i>
                            </div>
                            <div>
                                <h3 className='text-bold'>{title}</h3>
                                <p style={{ color: '#082541' }}>{subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ServiceCard