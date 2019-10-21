import React from 'react';
import { formatPrice } from 'commons/helper';

class Product extends React.Component {
  render() {
    const { name, image, tags, price } = this.props.product;
    return (
      <div className="product">
        <div className="p-content">
          <div className="img-wrapper">
            <figure className="image is-4by3">
              <img src={image} alt={name} />
            </figure>
            <p className="p-tags">{tags}</p>
            <p className="p-name">{name}</p>
          </div>
        </div>
        <div className="p-footer">
          <p className="price">{formatPrice(price)}</p>
          <button className="add-cart">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
