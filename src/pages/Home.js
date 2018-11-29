import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

// Material-UI components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Redux Actions
import {logout as LogoutAction} from '../actions/actions.js';


const mapStateToProps = (state)=>{
    return {
      token: state.authentication.token,
      email: state.authentication.email
    };
}

const mapDispatchToProps = (dispatch)=>{
  return {
    logout: () => {dispatch(LogoutAction())}
  }
}

class Home extends React.Component {
  render() {
   
    return (!this.props.token ? (<Redirect to={'/login'}/>) : (
      <div style={{margin: '20px'}}>
        <Typography variant="h6">{`Welcome to the app, ${this.props.email}!`}</Typography>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          style={{marginTop: '20px'}}
          onClick={() => {this.props.logout()}}
        >Log Out</Button>
      </div>
    ));
  }
}
export default connect( mapStateToProps, mapDispatchToProps )(Home);
