import React from 'react';
import { AppContext } from '../containers/AppProvider';
import { Green } from '.';

const Blue = (props) => (
  <div className="blue">
    <AppContext.Consumer>
        {(context) => 
            <button onClick={context.inc}>INC</button>
        }
    </AppContext.Consumer>
    <Green number={props.number} />
  </div>
)

export default Blue;