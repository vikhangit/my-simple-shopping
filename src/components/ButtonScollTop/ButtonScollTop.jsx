import React from 'react';
import './ButtonScollTop.scss'

function ButtonScollTop() {
        return (
                <button 
                        className="btn-scoll"
                        onClick={() => {
                                window.scrollTo(0, 0);
                        }}
                >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up btn-scoll__text" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                        </svg>
                </button>
        );
}

export default ButtonScollTop;