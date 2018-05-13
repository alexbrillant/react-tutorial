import React from "react";
import { CommentList } from "../components";
import comments from './my-comments'

class CommentListContainer extends React.Component {
    constructor() {
        super()
        this.state = { comments }
    }

    render() {
        return (
            <CommentList comments={this.state.comments} />
        )
    }
}

export default CommentListContainer