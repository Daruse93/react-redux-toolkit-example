import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Counter from './components/Counter';
import Posts from './components/Posts';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Counter</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                    <Route path="/">
                        <Counter />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
