import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Users from "./users";
import Profile from "./profile";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/' component={Home} />
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path='/users' exact component={Users} />
          <Route path='/users/:id' component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}
