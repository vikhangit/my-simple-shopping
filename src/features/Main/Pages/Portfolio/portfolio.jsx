import React from 'react';
import { NavLink } from 'react-router-dom';

function Portfolio() {
        return (
                <section className="page portfolio">
                        <h2 className="page__title">Portfolio</h2>
                        <div className="page__breadcrumb">
                                <NavLink to="/" className="page__breadcrumb__link">Home</NavLink>
                                <p>Portfolio</p>
                        </div>
                </section>
        );
}

export default Portfolio;