import React, { Fragment } from "react";
import { render } from "react-dom";
import { adopt } from "react-adopt";

const ThemeContext = React.createContext("dark");
const UserContext = React.createContext({ name: "John" });

const Context = adopt({
  theme: <ThemeContext.Consumer />,
  user: <UserContext.Consumer />
});

const App = () => (
  <Fragment>
    <Context>
      {({ theme, user }) => (
        <Fragment>
          <div>Theme: {theme}</div>
          <div>User: {user.name}</div>
        </Fragment>
      )}
    </Context>
  </Fragment>
);

export default App;