import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import SignInForm  from './pages/signin'
import SignUpForm from './pages/signup'
function App() {
  return (
  <Router>
      <div className="App">

<div className="App__Aside"></div>
<div className="App__Form">
  <div className="PageSwitcher">
    <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign in</NavLink>
    <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
  </div>

  <div className="FormTitle">
    <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or
    <NavLink exact to="/" activeClassName="FormTitle__Link--Active"  className="FormTitle__Link">Sign Up</NavLink>

  </div>
 <Route exact  path="/"  component={SignUpForm} ></Route>

<Route path="/sign-in"  component={SignInForm} >

</Route>
</div>

</div>
  </Router>
  );
}

export default App;
