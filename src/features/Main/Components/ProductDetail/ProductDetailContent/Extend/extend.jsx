import React from 'react';
import './extend.scss'

function Extend({product}) {
        return (
                <div className="product-detail__extend">
                        <div className="product-detail__extend__title">
                                <p>SKU: </p>
                                <p>Categories:</p>
                        </div>
                        <div className="product-detail__extend__info">
                                <p>{product.sku}</p>
                                <p>{product.categories}</p>
                        </div>
                </div>
        );
}

export default Extend;