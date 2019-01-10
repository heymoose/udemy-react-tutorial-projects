import React, { Component } from 'react';
import axios from '../../axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import './Blog.css';

// Using asyncComponent to lazy-load NewPost, used below in render()
// Doing this will dynamically return the NewPost component only when it is needed
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    // dynamic import syntax for lazy loading in this case
    return import('./NewPost/NewPost');
});
//import NewPost from './NewPost/NewPost';

class Blog extends Component {  
    state = {
        auth: true
    };

    render () {
        return (
            <div className={"Blog"}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName="active" to="/posts/" exact>Home</NavLink></li>

                            {/* Hash and search are just examples of the kind of config you can do with the NavLink component */}
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;