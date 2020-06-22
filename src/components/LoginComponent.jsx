import React from 'react';
// import {Label, Button} from 'reactstrap';
// import { LocalForm, Control, Errors } from 'react-redux-form';
// import { compose } from 'redux';
import { userLogin, onRoleChange, onIDChange, onPasswordChange } from '../redux/ActionCreators';
import { connect } from 'react-redux';

// const required = (val) => val && val.length;


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
        // this.textInput = React.createRef();
        this.handleLogin = this.handleLogin.bind(this);
        // this.focusTextInput = this.focusTextInput.bind(this);
    }

    // focusTextInput() {
    //     // Explicitly focus the text input using the raw DOM API
    //     // Note: we're accessing "current" to get the DOM node
    //     this.textInput.current.focus();
    //   }

    handleLogin(event) {
        event.preventDefault();
        // console.log(values);
        // this.props.userLogin(values.role, values.id, values.password);
        this.props.userLogin(this.props.loginData.role, this.props.loginData.id, this.props.loginData.password);
    }

    render() {
        return (
            <div>
                {/* <LocalForm onSubmit={(values) => this.handleLogin(values)}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                <Label htmlFor="role">Role</Label>
                    <Control.select model=".role" name="role" className="form-control">
                        <option disabled>Select Role</option>
                        <option>Admin</option>
                        <option>Employee</option>
                    </Control.select>
                    <Label htmlFor="id">ID</Label>
                    <Control.text model=".id" id="id" name="id"
                                    placeholder="ID"
                                    className="form-control"
                                    validators={{
                                        required
                                    }} />
                    <Errors
                        className="text-danger"
                        model=".id"
                        show="touched"
                        messages={{
                            required: "Required\n",
                        }}/>
                    <Label htmlFor="password">Password</Label>
                    <Control.password model=".password" id="password" name="password"
                                    placeholder="Password"
                                    className="form-control"
                                    validators={{
                                        required
                                    }} />
                    <Errors
                        className="text-danger"
                        model=".password"
                        show="touched"
                        messages={{
                            required: "Required\n",
                        }}/>
                </div>
                <div>
                    <Button type="submit" color="primary">Login</Button>
                </div>
            </LocalForm> */}
                <form onSubmit={this.handleLogin}>
                    <div>
                        <label>Role</label>
                        <select value={this.props.loginData.role} onChange={(event) => this.props.onRoleChange(event.target.value)}>
                            <option value="Admin">Admin</option>
                            <option value="Employee">Employee</option>
                        </select>
                        {this.props.loginData.role}
                    </div>
                    <div>
                        <label>ID</label>
                        <input
                            type="text"
                            placeholder="ID"
                            onChange={(event) => this.props.onIDChange(event.target.value)}
                            value={this.props.loginData.id}
                        />
                        {this.props.loginData.id}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Password" value={this.props.loginData.password} onChange={(event) => this.props.onPasswordChange(event.target.value)} />
                    </div>
                    {this.props.loginData.password}
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Login));