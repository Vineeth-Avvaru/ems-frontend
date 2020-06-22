import React from 'react';
import Home from './HomeComponent';
import Login from './LoginComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { userLogin, userLogout } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        loginData: state.UserAuthenticationData,
    }
}

const mapDispatchToProps = (dispatch) => ({
    userLogin: (role, id, password) => dispatch(userLogin(role, id, password)),
    userLogout: () => dispatch(userLogout()),
})

class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <Header name={this.props.loginData.name} userLogout = {this.props.userLogout} 
                        isUserLoggedOut = {this.props.loginData.isUserLoggedOut}/>
                {this.props.loginData.isUserAuthentic && !this.props.loginData.isUserLoggedOut ? 
            <div>       
                <Switch>
                    <Route path="/home" component={() => <Home />} />
                    <Redirect to="/home" />
                </Switch>
            </div> :
            <div>
                <Switch>
                    <Route path="/login" component={() => <Login userLogin = {this.props.userLogin} />} />
                    <Redirect to="/login" />   
                </Switch>
            </div> }  
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));