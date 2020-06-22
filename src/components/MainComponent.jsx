import React from 'react';
import Home from './HomeComponent';
import Login from './LoginComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { userLogout } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        name: state.UserAuthenticationData.name,
        isUserAuthentic: state.UserAuthenticationData.isUserAuthentic,
        isUserLoggedOut: state.UserAuthenticationData.isUserLoggedOut
    }
}

const mapDispatchToProps = (dispatch) => ({
    userLogout: () => dispatch(userLogout()),
})

class Main extends React.Component {

    render() {
        return(
            <div>
                <Header name={this.props.name} userLogout = {this.props.userLogout} 
                        isUserLoggedOut = {this.props.isUserLoggedOut}/>
            {this.props.isUserAuthentic && !this.props.isUserLoggedOut ? 
            <div>       
                <Switch>
                    <Route path="/home" component={() => <Home />} />
                    <Redirect to="/home" />
                </Switch>
            </div> :
            <div>
                <Switch>
                    <Route path="/login" component={() => <Login />} />
                    <Redirect to="/login" />   
                </Switch>
            </div> }  
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));