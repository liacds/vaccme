import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VaccineBody from '../components/VaccineBody';

class AboutVaccinePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App container col-12">
                <Header isVaccine={true}/>
                <VaccineBody/>
                <Footer/>
            </div>
        );
    }
}
 
export default AboutVaccinePage;