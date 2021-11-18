import React from 'react';
import './notFound.scss'
import { NavLink, useHistory } from 'react-router-dom';

function NotFound() {
        const history = useHistory()
        return (
                <section className="not-found">
                        <div className="page">
                                <h2 className="page__title">404</h2>
                                <div className="page__breadcrumb">
                                        <NavLink to="/" className="page__breadcrumb__link">Home</NavLink>
                                        <p>404</p>
                                </div>
                        </div>
                                <div className="container">
                                        <h1 className="not-found__heading">
                                                404
                                        </h1>
                                        <p className="not-found__sub-heading">
                                                Page not found
                                        </p>
                                        <p className="not-found__desc">
                                         Oops! The page you are looking for does not exist. It might have been moved or deleted.
                                        </p>
                                        <button
                                                className="not-found__btn"
                                                onClick={()=> history.push('/')}
                                        >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                                </svg>
                                                <p>Back to home</p>
                                        </button>
                                </div>
                </section>
        );
}

export default NotFound;