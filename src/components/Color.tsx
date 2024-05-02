"use strict";

import React from "react";
import { SketchPicker, ColorResult } from "react-color";


class ColorSketchPicker extends React.Component< any> {
  state = {
    color: this.props.color
  };
  handleChange = (color: ColorResult) => {
    this.setState({ color: color.hex });
  };

  render() {


    return (

        <SketchPicker
            color={this.state.color}
            onChange={this.handleChange} 
        />

    );
  }
}

export default ColorSketchPicker;
