import React from 'react';
import jubaer1 from '../../images/me/jubaer.jpg' 

const About = () => {
    return (
        <div className='container text-center mt-5'>
            
            <div>
                <h2>Name: Jubaer Ibn Zohir</h2>
                <img className='w-25' src={jubaer1} alt="" />
                <p>Assalamu Alaikum, Right now im studing in Jagannath University. I have some goals. i want to work for my country. Im working on it. But now i have a vision about programming. I know it can call day dream but i believe one day ill work on facebook as developer. Im struggling to achieve this goal. InshaAllah one day ill reach my goal </p>
            </div>
        </div>
    );
};

export default About;