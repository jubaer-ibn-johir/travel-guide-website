import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/tajmahal.jpg'
import banner2 from '../../../images/banner/bali.jpg'
import banner3 from '../../../images/banner/eiffel.jpg'


const Banner = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel className=' w-100' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Taj Mahal</h3>
                    <p>Taj Mahal is a royal tomb of Agra in western Uttar Pradesh, India. Located on the southern bank of the river Jamuna on the eastern side of the city of Agra. Get ready to go there.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Bali, Indonesia</h3>
                    <p>Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Eiffel Tower</h3>
                    <p>
                    The Eiffel Tower has long been an icon of Paris and one of the first things that come to mind when people think of the city. I can't imagine making a TRIP TO PARIS and not seeing the Eiffel Tower.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;