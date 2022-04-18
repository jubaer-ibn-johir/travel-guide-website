import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);

    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Travel Cost: {price}</p>
            <p><small> You Know? {description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-success'>Expolre: {name}</button>
        </div>
    );
};

export default Service;