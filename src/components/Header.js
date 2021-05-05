import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import locIcon from '../assets/images/locicon-white.png'
import phoneIcon from '../assets/images/phoneicon-white.png'
import timeIcon from '../assets/images/timeicon-white.png'
import logo from '../assets/images/logo.png'
import { Nav, Navbar } from "react-bootstrap";
import {ServerAddress} from '../constants/ServerAddress'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            medorganization: {}
         }
    }
    componentDidMount(){
        if(this.props.isMedPage){
            fetch(`${ServerAddress}/medorganizations/${this.props.pk}`)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        medorganization: response
                    })
            })
        }
    }
    render() {
        return (
            <header className="header">
                <div className="container col-11 col-lg-8 column m-0" style={{padding: 0}}>
                    <Navbar collapseOnSelect className="col-12" expand="lg" bg="transparent" variant="dark" style={{paddingTop: 20, paddingBottom: 0, fontFamily: "sans-serif", fontSize: 16, color: 'white'}}>
                        <Link to='/'>
                            <img src={logo} alt='logo'/>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border: 'transparent', outline: 'none'}} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/about-vaccine" style={{color: 'white'}}>О Вакцине</Nav.Link>
                                <Nav.Link href="/about-us" style={{color: 'white'}}>О нас</Nav.Link>
                                <Nav.Link href="/contact-us" style={{color: 'white'}}>Контакты</Nav.Link>
                                <Nav.Link href="/faq" style={{color: 'white'}}>FAQ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {
                        this.props.isHome?
                            <>
                                <span className="Main-Text col-12">Вакцинация в вашем городе</span>
                                <span className="Helping-Text col-12">
                                    Vaccine.me - платформа с актуальной инфомацией о вакцине(CпутникV) и доступных пунктах вакцинации в Алматы
                                </span>   
                            </>
                        :
                            this.props.isVaccine?
                                <span className="Main-Text col-12">О вакцине</span>
                        :
                            this.props.isFAQ?
                                <span className="Main-Text col-12">FAQ</span>
                        :
                            this.props.isAboutUs?
                                <span className="Main-Text col-12">О нас</span>
                        :
                            this.props.isContactUs?
                                <span className="Main-Text col-12">Свяжитесь с нами</span>
                        :
                            this.props.isMedPage?
                            <>
                                <span className="Main-Text col-12">{this.state.medorganization.name}</span>
                                <div className="Details container col-12" style={{padding: 0}}>
                                    <div className="col-xs-12 col-sm-12 col-md-3">
                                        <img src={locIcon} alt="locIcon" style={{width: 15}}/>
                                        <span style={{fontSize:16, color: "white", fontFamily: "sans-serif", paddingLeft: 15}}>{this.state.medorganization.address}</span>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3">
                                        <img src={timeIcon} alt="timeIcon" style={{width: 15}}/>
                                        <span style={{fontSize:16, color: "white", fontFamily: "sans-serif", paddingLeft: 15}}>{this.state.medorganization.schedule_weekday}</span>
                                        <span style={{fontSize:16, color: "white", fontFamily: "sans-serif", paddingLeft: 15}}>{this.state.medorganization.schedule_time}</span>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3">
                                        <img src={phoneIcon} alt="phoneIcon" style={{width: 15}}/>
                                        <span style={{fontSize:16, color: "white", fontFamily: "sans-serif", paddingLeft: 15}}>{this.state.medorganization.phone_number}</span>
                                    </div>
                                </div>
                            </>
                        :<></>
                    }
                </div>
            </header>
        );
    }
}


export default Header;