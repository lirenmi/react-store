import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="header">
    <div className="grid">
      <div className="start">
        <Link to="/">Home</Link>
      </div>
      <div className="end">
        {props.user.nickname ? (
          <span className="nickname">
            <i className="far fa-user"></i>
            {props.user.nickname}
          </span>
        ) : (
          // <React.Fragment></React.Fragment> 可以使用简写 <></>
          <React.Fragment>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </React.Fragment>
        )}
      </div>
    </div>
  </div>
);

export default Header;
