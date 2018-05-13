import { createSelector } from 'reselect'

const getBar = (state) => state.foo.bar

export const getBarState = createSelector(
    [getBar],
    (bar) => bar
)

export const firstSelector = (state) => state.a
export const secondSelector = (state) => state.b
export const thirdSelector = (state) => state.c

export const myComposedSelector = createSelector(
  firstSelector,
  secondSelector,
  thirdSelector,
  (a, b, c) => a * b * c
)