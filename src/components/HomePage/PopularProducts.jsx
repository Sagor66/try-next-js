import wait from '@/utils/wait';
import React from 'react';

const PopularProducts = async () => {
    await wait()
    return (
        <div className='mt-5'>
            popular Products
        </div>
    );
};

export default PopularProducts;