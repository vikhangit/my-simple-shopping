import React, { useState } from 'react';
import './brand.scss'
import { brandData } from './brandData';
import { NavLink } from 'react-router-dom';

function Brand() {
        const brand = brandData;
        const [currentIndex, setCurrentIndex] = useState(-1)
        const [scale, setScale] = useState(false)
        return (
                <section className="brand">
                        <div className="container">
                                <div className="brand__list">
                                        {
                                            brand.map((item, index) => (
                                                    <NavLink to="/"
                                                        className="brand__item"
                                                        key={index}
                                                        onMouseEnter={() => {
                                                                setScale(true)
                                                                setCurrentIndex(index)
                                                        }}
                                                        onMouseLeave={() => {
                                                                setScale(false)
                                                                setCurrentIndex(-1)
                                                        }}
                                                        >
                                                            {
                                                                <img style={{transform: (scale & currentIndex === index) ? "scale(1.2)" : "scale(1)"}} src={item.image} alt={item.id} />
                                                            }
                                                    </NavLink>
                                            ))
                                        }
                                </div>
                        </div>
                </section>
        );
}

export default Brand;