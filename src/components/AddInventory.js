import React from 'react';

class AddInventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <p className="title has-text-centered">Inventory</p>
        <br />
        <div className="control">
          <input type="text" className="input" />
        </div>
        <br />
        <div className="control">
          <button
            className="button"
            onClick={() => {
              this.props.close('AddInventory Data');
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default AddInventory;
