import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQBody from '../components/FAQBody';

class FAQPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App container col-12">
                <Header isFAQ={true}/>
                <FAQBody/>
                <Footer/>
            </div>    
        );
    }
}
 
export default FAQPage;