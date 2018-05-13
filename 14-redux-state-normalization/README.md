# Redux state normalization
Nested data means that the corresponding reducer logic has to be more nested or more complex. In particular, trying to update a deeply nested field can become very ugly very fast.

Since immutable data updates require all ancestors in the state tree to be copied and updated as well, and new object references will cause connected UI components to re-render, an update to a deeply nested data object could force totally unrelated UI components to re-render even if the data they're displaying hasn't actually changed.

https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
