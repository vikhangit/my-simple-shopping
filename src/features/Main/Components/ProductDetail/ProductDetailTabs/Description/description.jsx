import React from "react";
import "./description.scss";

function Description({ desc, product }) {
  return (
    <div>
      {desc && (
        <div>
          <h2 className="product-detail__tabs__content__info__title">
            Infomation about <span>{product.name}</span>
          </h2>
          <p className="product-detail__tabs__content__info__desc">
            {product.desc}
          </p>
        </div>
      )}
    </div>
  );
}

export default Description;
