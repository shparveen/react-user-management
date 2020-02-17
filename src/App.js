import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Admin from './components/Admin'
import Logout from './components/Logout'


class App extends Component {
  render(){
    return (
   
      <div className="App">        
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/logout" component={Logout}/>
          </Switch>
    
      </div>
    );
  } 
}
export default App;
