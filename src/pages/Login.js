import React from 'react';

class Login extends React.Component {
  // State
  // constructor() {
  //   super();
  //   this.state = {
  //     isLike: false
  //   };
  // }

  state = {
    isLike: false,
    count: 0
  };

  // Refs
  emailRef = React.createRef();
  passwordRef = React.createRef();

  handleSubmit = event => {
    // 1. 阻止默认事件行为
    event.preventDefault();

    // 2. 获取表单数据
    const formData = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value
    };
    console.log(formData);

    // 3. 处理登录逻辑

    // 4. 跳转到首页视图
    // this.props.history.push('/');
  };

  handleClick = () => {
    this.setState({
      isLike: !this.state.isLike
    });
    this.setState({
      count: this.state.count + 1
    });

    this.setState(prevState => {
      return { count: prevState.count + 2 };
    });
  };

  render() {
    return (
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Email"
                ref={this.emailRef}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Password"
                ref={this.passwordRef}
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </form>

        <div className="control">
          <button
            className="button is-fullwidth is-link"
            onClick={this.handleClick}
          >
            {this.state.isLike ? 'NO' : '👍'}
          </button>
        </div>
      </div>
    );
    // JSX  Babel  Emmet
  }
}

export default Login;
