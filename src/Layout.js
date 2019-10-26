import React from 'react';
import Header from 'components/Header';

const Layout = props => (
  <div className="main">
    <Header />
    {props.children}
  </div>
);

export default Layout;
