# Redux selectors 

Create memoized composable selector functions to compute derived data. Avoid coupling to the state.

In Redux, whenever an action is called anywhere in the application, all mounted & connected components call their mapStateToProps function. This is why Reselect is awesome. It will just return the memoized result if nothing has changed.

Redux documentation about selectors : 
http://redux.js.org/docs/recipes/ComputingDerivedData.html
