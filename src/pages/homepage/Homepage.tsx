import React from 'react'
import { Button, Col, } from 'react-bootstrap'
import Slider from 'react-slick'



const HomePage: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const homeslide = [
        {
            img: "./assets/img/slider-img.png",
        },
        // {
        //     img: "./assets/img/slider-img.png",
        // },
        // {
        //     img: "./assets/img/slider-img.png",
        // },
        // {
        //     img: "./assets/img/slider-img.png",
        // },
        // {
        //     img: "./assets/img/slider-img.png",
        // },
    ]
    return (
        <div className="home-bg">
            <Col>
                <div className="home-text">
                    <h2>Aviator</h2>
                    <h1>Play and Win 10X</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                    </p>
                    <Button>Play and Win</Button>
                </div>
            </Col>
            <Col>
                <div className="d-flex">
                    <Slider {...settings}>
                        {
                            homeslide.map((item) => (
                                <img src={item.img} alt="" />
                            ))
                        }
                    </Slider>
                </div>
            </Col>
        </div>
    )
}

export default HomePage
