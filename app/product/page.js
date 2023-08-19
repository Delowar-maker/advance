'use client'
import Menu from '@/components/Menu';
// import React from 'react';

// const page = ({searchParams}) => {
//     return (
//         <div>
//             <Menu/>
//             <h1>Product page</h1>
//             <h1>{searchParams.name}</h1>
//             <h1>{searchParams.price}</h1>
//         </div>
//     );
// };

// export default page;

// outher away


import { useSearchParams } from 'next/navigation';
import React from 'react';

const page = () => {
    const params = useSearchParams()
    return (
        <div>
            <Menu/>
            <h1>Product page</h1>
            <h1>{params.get('name')}</h1>
            <h1>{params.get('price')}</h1>
        </div>
    );
};

export default page;