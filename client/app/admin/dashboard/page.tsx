import React from 'react';
import { CustomTable, Sidebar } from '@/components';

const page = () => {
  return (
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-semibold mb-4">All products</h1>
        <CustomTable />
    </div>    
  );
}

export default page