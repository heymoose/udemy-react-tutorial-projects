import React, { Component } from 'react';
import axios from '../../axios';
import { Route, Link } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {  
    render () {
        return (
            <div className={"Blog"}>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>

                            {/* Hash and search are just examples of the kind of config you can do with the Link component */}
                            <li><Link to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;