import React from 'react';
import { userLogin, onRoleChange, onIDChange, onPasswordChange } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

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
            <div>
                <FontAwesomeIcon icon={faSignInAlt} />
                <h2>Login</h2>
                <form onSubmit={this.handleLogin}>
                    <div>
                        <label>Role</label>
                        <select value={this.props.loginData.role} onChange={(event) => this.props.onRoleChange(event.target.value)}>
                            <option value="Admin">Admin</option>
                            <option value="Employee">Employee</option>
                        </select>
                    </div>
                    <div>
                        <label>ID</label>
                        <input
                            required
                            type="text"
                            placeholder="ID"
                            onChange={(event) => this.props.onIDChange(event.target.value)}
                            value={this.props.loginData.id}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input required type="password" placeholder="Password" value={this.props.loginData.password} onChange={(event) => this.props.onPasswordChange(event.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Login));