import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MedBody from '../components/MedBody';
import {ServerAddress} from '../constants/ServerAddress'

class MedPage extends Component {
    constructor(props){
        super(props);
        this.state={
            medorganization: {},
            pk: this.props.match.params.pk
        }
    }

    componentDidMount(){
        fetch(`${ServerAddress}/medorganizations/${this.state.pk}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    medorganization: response
                })
            })
    }

    render() { 
        return (
            <div className="App container">
                <Header isMedPage={true} pk={this.state.pk}/>
                <MedBody pk={this.state.pk}/>
                <Footer/>
            </div>
        );
    }
}
 
export default MedPage;