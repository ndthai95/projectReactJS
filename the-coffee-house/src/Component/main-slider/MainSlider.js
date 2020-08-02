import React, { Component } from 'react';
import './mainSlider.scss';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';

class MainSlider extends Component {
    render() {
        return (
            <div className="main-slider">
                <div className="main-slider__wrap">
                    <div className="main-slider__image fade">
                        <a href="#">
                            <img src={banner1} alt="Banner1" />
                        </a>
                    </div>

                    <div className="main-slider__image fade">
                        <a href="#">
                            <img src={banner2} alt="Banner2" />
                        </a>
                    </div>

                    <div className="main-slider__image fade">
                        <a href="#">
                            <img src={banner3} alt="Banner3" />
                        </a>
                    </div>
                </div>

                <div class="dots">
                    <div className="dots__wrap">
                        <span className="dot" onclick="currentSlide(0)"></span>
                        <span className="dot" onclick="currentSlide(1)"></span>
                        <span className="dot" onclick="currentSlide(2)"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainSlider;
