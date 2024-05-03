import React from 'react';
import { FaRegStar } from "react-icons/fa6";

const Rating = () => {
    return (
        <div className="flex items-center space-x-1 mb-5">
        <FaRegStar className='w-5 h-5'/>
        <FaRegStar className='w-5 h-5'/>
        <FaRegStar className='w-5 h-5'/>
        <FaRegStar className='w-5 h-5'/>
        <FaRegStar className='w-5 h-5'/>
        </div>
    );
};

export default Rating;