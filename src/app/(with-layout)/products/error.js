'use client'

import { useEffect } from "react";

const ProductsError = ({ error, reset }) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="text-center">
            <h1 className="text-2xl font-semibold text-red-500">{ error.message || "Something went wrong!" }</h1>
            <button onClick={() => reset()}>Reset</button>
        </div>
    );
};

export default ProductsError;