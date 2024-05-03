import React from 'react';
import Star from '../../assets/icons/star.svg'

const Rating = ({value}) => {
    const stars= Array(value).fill(Star)
    return (
       <>
       {
        stars.map((star, index)=>(
            <img key={index} src={star} alt="star" className='w-5 h-5' />
        ))
       }
       </>
    );
};

export default Rating;