import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {



    render () {
        var path = /blog/ + this.props.id ;
        return (
            <div>
                <h4><Link to={path}>{this.props.id} - {this.props.title}</Link></h4>
                <div>{this.props.body}</div>
                <hr/><hr/>
            </div>
        );
    }
}

export default Post;