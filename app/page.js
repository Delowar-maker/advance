'use client'
import Menu from '@/components/Menu';
import React from 'react';

const page = () => {
  return (
    <div>
      <Menu/>
      <h1>Home page</h1>
      {process.env.API_KEY}
    </div>
  );
};

export default page;