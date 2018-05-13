import React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext()

class Toggle extends React.Component {
  static On = ({children}) => (
    <ToggleContext.Consumer>
      {({on}) => (on ? children : null)}
    </ToggleContext.Consumer>
  )

  static Off = ({children}) => (
    <ToggleContext.Consumer>
      {({on}) => (on ? null : children)}
    </ToggleContext.Consumer>
  )

  static Button = props => (
    <ToggleContext.Consumer>
      {({on, toggle}) => (
        <Switch on={on} onClick={toggle} {...props} />
      )}
    </ToggleContext.Consumer>
  )

  state = {on: false}

  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => this.props.onToggle(this.state.on),
    )

  render() {
    return (
      <ToggleContext.Provider
        value={{on: this.state.on, toggle: this.toggle}}
      >
        {this.props.children}
      </ToggleContext.Provider>
    )
  }
}

export default Toggle