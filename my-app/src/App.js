import React, { Component } from 'react';
import Loadable from 'react-loadable';
import loading from "./common/loading"
import {HashRouter as Router,NavLink,Switch,Redirect,Route} from "react-router-dom"
import './App.css';
import Home from "./component/home/home"
const LoadableComponent = Loadable({
  loader: () => import('./component/home/home'),
  loading: loading,
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadableComponent/>
        <Router>
          <div>
          <Switch>
          <Route path="/home" render={()=>{
              return <Home/>
            }}/>
          </Switch>
          <div id="footer">
            <ul>
              <li>
                <NavLink to="/home">首页</NavLink>
              </li>
            </ul>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
