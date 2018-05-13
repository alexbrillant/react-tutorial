import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const wrapperStyles = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "teal",
  justifyContent: "space-between",
  alignItems: "center"
};

export default class Coordinates extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  };

  state = { x: 0, y: 0, lastClick: { x: 0, y: 0 } };

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  onMouseClick = event => {
    this.setState({
      lastClick: {
        x: event.clientX,
        y: event.clientY
      }
    });
  };

  render() {
    return (
      <div style={wrapperStyles} onMouseMove={this.handleMouseMove} onClick={this.onMouseClick}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
