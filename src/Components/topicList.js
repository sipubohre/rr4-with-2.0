import React from 'react';
import { Route, Link } from "react-router-dom";
import Topic from './topic';

const Topics = ({ match }) => (
    <React.Fragment>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Topic List</li>
            </ol>
        </nav>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
    </React.Fragment>

  );

export default Topics;