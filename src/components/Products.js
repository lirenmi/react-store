import React from 'react';
import axios from 'commons/axios';
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';

class Products extends React.Component {
  state = {
    products: [],
    sourceProducts: []
  };

  componentDidMount() {
    axios.get('/products').then(response => {
      this.setState({
        products: response.data,
        sourceProducts: response.data
      });
    });
  }

  // search
  search = text => {
    // 1. Get New Array
    let _products = [...this.state.sourceProducts];

    // 2. Filter New Array
    _products = _products.filter(p => {
      // name: Abcd text: ab   ===> ['Ab']
      // text: '' ==> ["", "", "", "", ""]
      const matchArray = p.name.match(new RegExp(text, 'gi'));
      return !!matchArray;
    });

    // 3. set State
    this.setState({
      products: _products
    });
  };

  render() {
    return (
      <div>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {this.state.products.map(p => {
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
