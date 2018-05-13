import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Book = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.pages} pages</p>
        </div>
    )
}

export const BookShapePropTypes = PropTypes.shape({
    "author": PropTypes.string,
    "country": PropTypes.string,
    "imageLink": PropTypes.string,
    "language": PropTypes.string,
    "link": PropTypes.string,
    "pages": PropTypes.number,
    "title": PropTypes.string,
    "year": PropTypes.number
})

Book.propTypes = BookShapePropTypes

export default Book