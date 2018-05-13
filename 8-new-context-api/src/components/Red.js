import React, {Component} from 'react';
import { AppProvider } from '../containers';
import { AppContext } from '../containers/AppProvider';
import { Blue } from '.';

class Red extends Component {
    render() {
      return (
        <AppProvider> 
          <div className="red">
            <AppContext.Consumer>
              {(context) => context.number}
            </AppContext.Consumer>
            <Blue />
          </div>
        </AppProvider>
      )
    }
}

export default Red;