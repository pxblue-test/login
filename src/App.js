import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom'
import {connect} from 'react-redux';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';

// Utility Components for Auth Guard
import PrivateRoute from './components/PrivateRoute';


const mapStateToProps = (state)=>{
    return {
      token: state.authentication.token
    };
}

class App extends React.Component {
  hasAuth(){
    /* You will want to do more in depth validation for your authentication (e.g. token valid, not expired, etc.) */
    return this.props.token && this.props.token.length > 0;
  }
  render(){
    return (
      <Router>
        <Switch className="full">
          <PrivateRoute exact path='/' 
            component={Home} 
            canActivate={() => this.hasAuth()}
          />
          <Route exact path="/login" component={Login}/>
          <Redirect to='/'/>
        </Switch>
      </Router>
    )
  }
}
export default connect( mapStateToProps, null )( App );