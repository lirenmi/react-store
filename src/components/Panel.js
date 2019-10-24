/**
 1. 一次渲染，随需调用
 2. 装载组件
 */

import React from 'react';
import { render } from 'react-dom';

class Panel extends React.Component {
  state = {
    active: false
  };

  open = () => {
    this.setState({
      active: true
    });
  };

  close = () => {
    this.setState({
      active: false
    });
  };

  render() {
    const _class = {
      true: 'panel-wrapper active',
      false: 'panel-wrapper'
    };
    return (
      <div className={_class[this.state.active]}>
        <div className="over-layer" onClick={this.close}></div>
        <div className="panel">
          <div className="head">
            <span className="close" onClick={this.close}>
              ×
            </span>
            <p className="has-text-centered">Children Component</p>
          </div>
        </div>
      </div>
    );
  }
}

const _div = document.createElement('div');
document.body.appendChild(_div);

const _panel = render(<Panel />, _div);
console.log(_panel);
export default _panel;
