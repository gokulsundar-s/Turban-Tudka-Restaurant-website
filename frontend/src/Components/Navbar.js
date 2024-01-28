import {Component} from 'react';
import '../Styles/Navbar.css';
class Navbar extends Component{
    render(){
        return (
            <div className = "navbar-container">
                <a href="/" className = "navbar-logo"><img src={require("F:/Projects/restaurant/frontend/src/logo.png")} alt="Profile" className = "profile"></img></a>
                <div>
                    <ul className = "navbar-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/booktable">Book a table</a></li>
                        <li><a href="/preorder">Pre-order Food</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;