import React from 'react';
import Header from 'components/Header';
import Products from 'components/Products';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
