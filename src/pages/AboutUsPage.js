import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AboutUsPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App container col-12">
                <Header isAboutUs={true}/>
                <div className="Body col-11 col-lg-8" style={{padding: 0}}>
                    <span className="OurTeam col-12">Наша команда</span>
                    <span className="OurTeamDetails col-12">Есть предложение,вопросы или просто желание по общаться с нашей командой? Оставьте сообщение и мы обязательно ответим вам</span>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default AboutUsPage;