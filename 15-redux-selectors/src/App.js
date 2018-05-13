import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import { Book } from './components'
import { BookShapePropTypes } from './components/Book';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.books.map(book => <Book book={book} />)}
      </div>
    );
  }
}

App.propTypes = {
  books: PropTypes.arrayOf(BookShapePropTypes.isRequired).isRequired
}

const mapStateToProps = state => {
  return {
    books: getBooksOrderedByPages(state.books)
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)