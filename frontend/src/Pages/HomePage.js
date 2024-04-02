import {Component} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/Home.css';
class HomePage extends Component{
    render(){
        return(
            <>
            <Navbar/>
            <div className="homepage-container">
                <div className = "home-container">
                    <div className = "home-content">
                        <h1>We invite you to</h1>
                        <h1>our restaurant</h1>
                        <p>We provide best food in town, we provide clean and hygiene dine in services.</p>

                        <div className = "home-buttons">
                            <a href = "booktable"><button>BOOK A TABLE</button></a>
                            <a href = "preorder"><button>PRE-ORDER</button></a>
                        </div>
                    </div>
                    <img src={require("../../src/Sources/home.webp")} alt="chicken grill" className = "home-image"></img>
                </div>
            </div>

            <Footer/>
            </>
        )
    }
}

export default HomePage;