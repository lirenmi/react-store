import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="grid">
          <div className="start">
            <a href="/">Home</a>
          </div>
          <div className="end">
            <a href="/">Login</a>
            <a href="/">Register</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
