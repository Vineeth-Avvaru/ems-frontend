import React from 'react';
import { userLogin, onRoleChange, onIDChange, onPasswordChange } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './LoginComponent.css'

const mapStateToProps = state => {
    return {
        loginData: state.UserAuthenticationData,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onRoleChange: (role) => dispatch(onRoleChange(role)),
    onIDChange: (id) => dispatch(onIDChange(id)),
    onPasswordChange: (password) => dispatch(onPasswordChange(password)),
    userLogin: (role, id, password) => dispatch(userLogin(role, id, password)),
})


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {
        event.preventDefault();
        this.props.userLogin(this.props.loginData.role, this.props.loginData.id, this.props.loginData.password);
    }

    render() {
        return (
            <div className="login-container">
                <div>
                <FontAwesomeIcon icon={faSignInAlt} className="login-icon" />
                </div>
                <div>
                <h2 className="signin-heading">SignIn</h2>
                <form onSubmit={this.handleLogin} className="login-form">
                    <div>
                        <label className="login-label">Role</label>
                        <select value={this.props.loginData.role} onChange={(event) => this.props.onRoleChange(event.target.value)}>
                            <option value="Admin">Admin</option>
                            <option value="Employee">Employee</option>
                        </select>
                    </div>
                    <div>
                        <label className="login-label">ID</label>
                        <input
                            required
                            type="text"
                            placeholder="ID"
                            onChange={(event) => this.props.onIDChange(event.target.value)}
                            value={this.props.loginData.id}
                        />
                    </div>
                    <div>
                        <label className="login-label">Password</label>
                        <input required type="password" placeholder="Password" value={this.props.loginData.password} onChange={(event) => this.props.onPasswordChange(event.target.value)} />
                    </div>
                    <div>
                    <button type="submit" className="login-submit">Login</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Login));