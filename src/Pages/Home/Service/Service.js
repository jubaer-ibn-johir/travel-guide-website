import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price} = service
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Travel Cost: {price}</p>
            <p><small> You Know? {description}</small></p>
            <button>Expolre: {name}</button>
        </div>
    );
};

export default Service;