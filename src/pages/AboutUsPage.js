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
                    <span className="OurTeamDetails col-12">Vaccine.me - волонтерский проект. Наша главная цель - помочь темпам вакцинации в стране через платформу, где содержится актуальная информация о наличии вакцин и о пунктах вакцинации. Также, при поддержке medsupportkz, у нас вы можете найти основную информацию о вакцине и ответы на частые вопросы.</span>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default AboutUsPage;