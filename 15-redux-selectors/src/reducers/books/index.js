import initialState from './initialState'

export default (state = initialState, { type, payload }) => {
  return state
}

export const selectBooksOrderedByPages = (state) => {
  return state.books.filter(b => p.page)
}