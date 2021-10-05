import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.image} alt={this.props.altText}></img>;
  }
}

export default Image;
