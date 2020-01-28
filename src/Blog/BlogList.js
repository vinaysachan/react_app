import React, { Component } from 'react';
import Post from './Post/Post';
import axios from 'axios';


class BlogList extends Component {

    
    constructor (props) {
        super(props);
        this.state = {
            posts : []
        } ;
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts?per_page=5')
            .then((response) => {
                console.log(response.data);
                this.setState((prevStates,prevProps) => ({
                    posts : response.data,
                }));
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .then(()  => {
                // always executed
            });
    }

    render () {
        const postsList     =   this.state.posts.map((post, index) => {
            return (
                <Post key={index} id={post.id} title={post.title} body={post.body} />
            ) ;
        });
        return (
            <div>
                <h2>This is Post Listing Page</h2>
                {postsList}
            </div>
        );
    }
}

export default BlogList;