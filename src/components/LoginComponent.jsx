import React from 'react';
import {Label, Button} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { compose } from 'redux';

const required = (val) => val && val.length;

class Login extends React.Component {

    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(values){
        console.log(values);
        this.props.userLogin(values.role, values.id, values.password);
    }
    
    render() {
        return(
            <div>
            <LocalForm onSubmit={(values) => this.handleLogin(values)}>
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
            </LocalForm>
            </div>
        )
    }
}

export default  Login;