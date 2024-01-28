import {Component} from 'react';
import '../Styles/Footer.css';
class Footer extends Component{
    render(){
        return(
            <div className = "footer-container">
                <div className = "footer1">
                    <p>Turban Tudka</p>
                </div>

                <div className = "footer2">
                    <p>+91 989898989 / +91 9696969696</p>
                    <p>mail@turbantudka.com</p>
                </div>

                <div className = "footer3">
                    <p>Copyrights &copy; TURBAN TUDKA</p>
                </div>
            </div>
        )
    }
}

export default Footer;