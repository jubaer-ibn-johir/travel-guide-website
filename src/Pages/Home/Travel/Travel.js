import React from 'react';
import './Travel.css'

const Travel = ({ travel }) => {
    const { name, img } = travel;
    return (
        <div className='gx-5 col-sm-12 col-md-6 col-lg-4'>
            <div class="card " style={{ width: "23rem", border: '1px solid lightgray', m: "5px" }}>
            <img class="card-img-top" src={img} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Our experienced travel guides travel the world to bring you informative, destination roundups, travel ideas, tips and beautiful photos in order to help you plan your next holiday.</p>
                <a href="#" class="btn btn-success">Explore</a>
            </div>
        </div>
        </div>
        
    );
};

export default Travel;