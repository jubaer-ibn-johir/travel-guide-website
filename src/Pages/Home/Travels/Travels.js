import React from 'react';
import './Travels.css'
import travel1 from '../../../images/malaysia.jpg';
import travel2 from '../../../images/lalbag.jpg';
import travel3 from '../../../images/maldives.jpg';
// import travel4 from '../../../images/dubai.jpg';
import Travel from '../Travel/Travel';


const travels = [
    {id: 1, name: 'Malaysia', img : travel1},
    {id: 2, name: 'Lalbag', img : travel2},
    {id: 3, name: 'Maldives', img : travel3},
    // {id: 4, name: 'Dubai', img : travel4}
];

const Travels = () => {
    return (
        <div className='container '>
            <h2 className='text-success mt-5 text-center m-3'>More Travel Destination</h2>
            <div className='row '>
                {
                    travels.map(travel => <Travel
                    key={travel.id}
                    travel={travel}
                    
                    ></Travel>)
                }

            </div>
        </div>
    );
};

export default Travels;