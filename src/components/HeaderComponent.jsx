import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this)
    }

    handleLogOut(){
        this.props.userLogout()
    }

    render() {
        return(
            <div>
                {!this.props.isUserLoggedOut ? 
                <div>
                    <div>
                        <span>User: {this.props.name}</span>
                    </div>
                    <div>
                        <span onClick={this.handleLogOut}>Logout</span>
                    </div>
                </div> :<div/> }
            </div> 
        )
    }
}

export default Header;