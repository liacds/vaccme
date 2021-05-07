import React, { Component } from 'react';
import locIcon from '../assets/images/locicon.png'
import phoneIcon from '../assets/images/phoneicon.png'
import timeIcon from '../assets/images/timeicon.png'
import typeIcon from '../assets/images/typeicon.png'
import moveIcon from '../assets/images/moveicon.png'
import infoIcon from '../assets/images/infoicon.png'
import WebButton from '../components/WebButton'
import MediaQuery from 'react-responsive';
import {ServerAddress} from '../constants/ServerAddress'
import { Link } from 'react-router-dom';

class PCard extends Component {
    constructor(props){
        super(props)
        this.state = { 
            medorganization: {},
            id: props.id,
        }
    }
    componentDidMount(){
        console.log(this.state.id)
        fetch(`${ServerAddress}/medorganizations/${this.state.id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    medorganization: response,
                })
        })
    }
    render() { 
        return ( 
            <div className="col-12" style={{textDecoration: 'none', color: 'black'}}>
                <MediaQuery query="(max-width: 992px)">
                    {
                        matches =>
                            matches?
                            (<div className="card PCard col-12">
                                <Link to={'/medorg/'+this.state.medorganization.id} className="LinkStyle"><span className="Name">{this.state.medorganization.name}</span></Link>
                                <div className="Details container">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-3">
                                            <img src={locIcon} alt="locIcon"/>
                                            <span>{this.state.medorganization.address}</span>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3">
                                            <img src={timeIcon} alt="timeIcon"/>
                                            <span>{this.state.medorganization.schedule_weekday}</span>
                                            <span>{this.state.medorganization.schedule_time}</span>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3">
                                            <img src={phoneIcon} alt="phoneIcon"/>
                                            <span>{this.state.medorganization.phone_number}</span>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3">
                                            <img src={typeIcon} alt="typeIcon"/>
                                            {(this.state.medorganization.has_type_1 && this.state.medorganization.has_type_2) ?
                                                <span>I и II тип</span>
                                                :
                                                this.state.medorganization.has_type_1?
                                                <span>I тип</span>
                                                :
                                                this.state.medorganization.has_type_2?
                                                <span>II тип</span>
                                                :
                                                <span>Нет вакцин</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                                    <div className="CardButtons row m-0">
                                        <button className="Move-Button col-lg-3">
                                            <img src={moveIcon} alt='moveIcon'></img>
                                            <span className="col-7">Проехать</span>
                                        </button>
                                        <WebButton medorganization = {this.state.medorganization}/>
                                        <Link to='/about-vaccine' className="RulesB col-12 col-lg-5">
                                            <div style={{margin: "auto"}}>
                                                <img src={infoIcon} alt='infoIcon'></img>
                                                <span className="Rules">Правила вакцинирования</span>
                                            </div>
                                        </Link>
                                    </div>
                            </div>)
                            :
                            (<div className="card PCard col-12" style={{padding: 30}}>
                                <Link to={'/medorg/'+this.state.medorganization.id} className="LinkStyle"><span className="Name">{this.state.medorganization.name}</span></Link>
                                <div className="Details container">
                                    <div className="row"> 
                                        <div className="col-xs-12 col-sm-12 col-md-3">
                                            <img src={locIcon} alt="locIcon"/>
                                            <span>{this.state.medorganization.address}</span>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3">
                                            <img src={timeIcon} alt="timeIcon"/>
                                            <span>{this.state.medorganization.schedule_weekday}</span>
                                            <span>{this.state.medorganization.schedule_time}</span>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3">
                                            <img src={phoneIcon} alt="phoneIcon"/>
                                            <span>{this.state.medorganization.phone_number}</span>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3">
                                            <img src={typeIcon} alt="typeIcon"/>
                                            {(this.state.medorganization.has_type_1 && this.state.medorganization.has_type_2) ?
                                                <span>I и II тип</span>
                                                :
                                                this.state.medorganization.has_type_1?
                                                <span>I тип</span>
                                                :
                                                this.state.medorganization.has_type_2?
                                                <span>II тип</span>
                                                :
                                                <span>Нет вакцин</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="CardButtons row m-0">
                                        <a href={this.state.medorganization.twogis_link} className="col-lg-3 Move-Button">
                                            {/* <button className=" col-12"> */}
                                                <img src={moveIcon} alt='moveIcon'></img>
                                                <span className="col-7">Проехать</span>
                                            {/* </button> */}
                                        </a>
                                        <WebButton medorganization = {this.state.medorganization}/>
                                        <Link to='/about-vaccine' className="RulesB col-12 col-lg-5">
                                            <div style={{margin: "auto"}}>
                                                <img src={infoIcon} alt='infoIcon'></img>
                                                <span className="Rules">Правила вакцинирования</span>
                                            </div>
                                        </Link>
                                    </div>
                            </div>)
                    }
                </MediaQuery>
            </div>
         );
    }
}
 
export default PCard;