import React from 'react';

class Text extends React.Component {
  state = {
    textDetails: null
  };
  storeChange = event => {
    this.setState({ ...this.state, textDetails: event.target.value });
  };
  render() {
    console.log(this.state.textDetails);
    return (
      <div>
        <input
          type="text"
          onChange={this.storeChange}
          className="textBox"
          placeholder="text holder"
          value={this.state.textDetails}
        />
      </div>
    );
  }
}

export default Text;



