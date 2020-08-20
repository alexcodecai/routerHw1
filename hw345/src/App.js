import React  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Problems from './Problems.js';
import ProblemsDetail from './ProblemsDetail'

function App() {
 
  return (
    <Router>
      <div className = 'App'>
        <Switch>
          <Route path="/" exact component ={Problems}/>
          <Route path="/:id" exact component ={ProblemsDetail}/>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
