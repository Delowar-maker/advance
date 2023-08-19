'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';




const Menu = () => {
    const currentPath = usePathname();

    
    return (
        <div>
            <h1>{currentPath}</h1>
            <Link className={currentPath === "/" ? 'active-link' : 'pandding-link'} href={'/'}>Home</Link> <br />


            <Link className={currentPath === "/product" ? 'active-link' : 'pandding-link'}
            
            href={{pathname: '/product'}}>Product</Link> <br />
            {/* <Link className={currentPath === "/product" ? 'active-link' : 'pandding-link'}
            
            href={{pathname: '/product', query:{name:'book', price:'200tk'}}}>Product</Link> <br /> */}


            <Link className={currentPath === "/profile" ? 'active-link' : 'pandding-link'} href={'/profile'}>Profile</Link>
            
        </div>
    );
};

export default Menu;