import {Component} from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
class HomePage extends Component{
    render(){
        return(
            <>
                <Navbar/>
                <Home/>
                <Footer/>
            </>
        )
    }
}

export default HomePage;