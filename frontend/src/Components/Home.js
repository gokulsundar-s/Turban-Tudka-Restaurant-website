import { Component } from 'react';
import "../Styles/Home.css";

class Home extends Component{
    render(){
        return(
            <div className = "home-container">
                <div className = "left-container">
                    <h1>We invite you to</h1>
                    <h1>our restaurant</h1>
                    <p>We provide best food in town, we provide clean and hygiene dine in services.</p>
                    
                    <div className = "left-container-buttons">
                        <a href = "/"><button>Book a table</button></a>
                        <a href = "/"><button>Pre-Order</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;