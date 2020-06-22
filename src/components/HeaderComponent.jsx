import React from 'react';
import './HeaderComponent.css'

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
            <div className="header-container">
                {!this.props.isUserLoggedOut ? 
                <div className="header-content">
                    <div className="header-items">
                        <span className="user-item">User: {this.props.name}</span>
                    </div>
                    <div className="header-items">
                        <span className="logout-item" onClick={this.handleLogOut}>Logout</span>
                    </div>
                </div> :<div/> }
            </div> 
        )
    }
}

export default Header;