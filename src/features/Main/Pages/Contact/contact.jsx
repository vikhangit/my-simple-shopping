import React from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {
        return (
                <section className="page contact">
                        <h2 className="page__title">Contact</h2>
                        <div className="page__breadcrumb">
                                <NavLink to="/" className="page__breadcrumb__link">Home</NavLink>
                                <p>Contact</p>
                        </div>
                </section>
        );
}

export default Contact;