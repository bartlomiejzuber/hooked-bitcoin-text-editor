import React, { Component } from "react";
import { render } from "react-dom";

import { Editor } from "../../src/index";
import "./demo.scss";
import "../../styles/main.scss";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>hooked-bitcoin-text-editor Demo</h1>
        <Editor />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
