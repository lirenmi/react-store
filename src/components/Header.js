import React from 'react';

const Header = props => (
  <div className="header">
    <div className="grid">
      <div className="start">
        <a href="/">Home</a>
      </div>
      <div className="end">
        {props.nickname ? (
          <span className="nickname">
            <i className="far fa-user"></i>
            {props.nickname}
          </span>
        ) : (
          // <React.Fragment></React.Fragment> 可以使用简写 <></>
          <React.Fragment>
            <a href="/">Login</a>
            <a href="/">Register</a>
          </React.Fragment>
        )}
      </div>
    </div>
  </div>
);

export default Header;
