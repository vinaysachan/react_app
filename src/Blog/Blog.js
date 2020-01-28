import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import BlogList from './BlogList';
import FullPost from './FullPost';
import AddPost from './AddPost';


class Blog extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><Link to="/blogs">View All Posts</Link></li>
                    <li><a href="/new-blog">Add New Post</a></li>
                    <li><Link to={{ pathname : 'new-blog', hash	: '#hhhhhhhhh', search : '?name=vinay' }}>Add New Post as Obj</Link></li>
                </ul>
                <h2>This is Blog Page</h2>
                {/* <Route path="/" exact component={Blog} /> */}
                <Route path="/blogs" exact render={() => <BlogList />} />
                <Route path="/new-blog" exact component={AddPost} />
                <Route path="/blog/:post_id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;