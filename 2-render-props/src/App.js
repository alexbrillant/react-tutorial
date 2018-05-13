import React, { Fragment } from "react";
import {Coordinates} from './components/'

const pTextStyles = { padding: "16px", color: "white" };
const flexDiv = {
  fontFamily: "'Cabin', sans-serif'",
  color: "white",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "60%"
};

const App = () => (
  <Coordinates
    render={({ x, y, lastClick }) => (
      <Fragment>
        <div style={flexDiv}>
          <h2>Current X: {x}</h2>
          <h2>Current Y: {y}</h2>
        </div>
        <p style={pTextStyles}>
          Mouse was last clicked at ==> X:
          {lastClick.x} Y: {lastClick.y}
        </p>
      </Fragment>
    )}
  />
);

export default App;