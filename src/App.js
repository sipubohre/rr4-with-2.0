import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/home';
import About from './Components/about';
import Topics from './Components/topicList';
import S3Uploader from './Components/s3Uploader';
const App = () => (
  <Router>
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">React App 2.0</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/topics">Topics</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/s3Uploader">S3 Uploader</Link>
          </li>
        </ul>
      </div>
    </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/s3Uploader" component={S3Uploader} />
    </div>
  </Router>
);

export default App;