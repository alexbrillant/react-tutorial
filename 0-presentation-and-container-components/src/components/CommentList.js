import React from "react";

const CommentList = ({ comments }) => (
  <ul>
    {comments.map(({ body, author }) =>
      <li>{body}-{author}</li>
    )}
  </ul>
)

export default CommentList