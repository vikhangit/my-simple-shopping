import React from 'react';
import { Images } from '../../../../../../constants/images';

function ArrivalBanner() {
        return (
                <div className="arrival__banner">
                        <div className="arrival__banner__item">
                                <img src={Images.Banner4} alt={Images.Banner4} className="arrival__banner__image" />
                        </div>
                        <div className="arrival__banner__item">
                                <img src={Images.Banner5} alt={Images.Banner5} className="arrival__banner__image" />
                        </div>
                </div>
        );
}

export default ArrivalBanner;