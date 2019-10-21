import React from 'react';
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';

class Products extends React.Component {
  products = [
    {
      id: 1,
      name: 'Air Jordan 4',
      image: '/images/1.jpg',
      tags: '92 ',
      price: 59440,
      status: 'available'
    },
    {
      id: 2,
      name: 'Nike Paul George PG 3',
      image: '/images/2.jpg',
      tags: '25 Colors',
      price: 53800,
      status: 'available'
    },
    {
      id: 3,
      name: 'Jordan Why Not Zer0.2',
      image: '/images/3.jpg',
      tags: '16 Color, y',
      price: 48900,
      status: 'available'
    },
    {
      id: 4,
      name: 'Nike Air Foamposite One',
      image: '/images/4.jpg',
      tags: '84 Colors',
      price: 73148,
      status: 'available'
    },
    {
      id: 5,
      name: 'adidas Harden Vol.3',
      image: '/images/5.jpg',
      tags: '34 Colors',
      price: 46900,
      status: 'unavailable'
    }
  ];

  render() {
    return (
      <div>
        <ToolBox />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {this.products.map(p => {
              return (
                <div className="column is-3" key={p.id}>
                  <Product product={p} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
