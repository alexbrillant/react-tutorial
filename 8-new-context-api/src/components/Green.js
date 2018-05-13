import React from 'react';
import { AppContext } from '../containers/AppProvider';

const Green = (props) => (
  <div className="green">
    <AppContext.Consumer>
        {(context) => context.number}
    </AppContext.Consumer>
  </div>
)

export default Green; 