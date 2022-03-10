import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import Slide1 from '../Gallery/2022/01 January/Virtual Show Table-33.jpg'
import Slide2 from '../Gallery/2022/01 January/Virtual Show Table-22.jpg'

export default function Home() {

    return (
        <div className='csel'>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={Slide1}
                        alt="Restrepia Frank Feysa"
                    />
                    <Carousel.Caption>
                        <h3>Orchids of</h3>
                        <h1>North Eastern New York Orchid Society</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={Slide2}
                        alt="Cattleya"
                    />
                    <Carousel.Caption>
                        <h2>Together We Grow</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
