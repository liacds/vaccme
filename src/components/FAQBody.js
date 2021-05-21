import React, { Component } from 'react';
import QA from '../components/QA';

class FAQBody extends Component {
    state = { 
        selected: 1,
     }
    render() { 
        return ( 
            <div className="Body col-11 col-lg-8">
            {
                this.state.selected === 1 ?
                    <>
                    <div className="col-12 row" style={{textAlign: 'center'}}>
                        <span className="Selected col-12 col-lg-3" onClick={()=>this.setState({selected: 1})}>Общая информация</span>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 2})}>Кому можно прививаться</span>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 3})}>СпутникV</span>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 4})}>После вакцинации</span>
                    </div>
                    </>:
                this.state.selected === 2 ?
                    <>
                    <div className="col-12 row" style={{textAlign: 'center'}}>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 1})}>Общая информация</span>
                        <span className="Selected col-12 col-lg-3" onClick={()=>this.setState({selected: 2})}>Кому можно прививаться</span>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 3})}>СпутникV</span>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 4})}>После вакцинации</span>
                    </div>
                    </>:
                this.state.selected === 3 ?
                    <>
                    <div className="col-12 row" style={{textAlign: 'center'}}>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 1})}>Общая информация</span>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 2})}>Кому можно прививаться</span>
                        <span className="Selected col-12 col-lg-3" onClick={()=>this.setState({selected: 3})}>СпутникV</span>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 4})}>После вакцинации</span>
                    </div>
                    </>:
                this.state.selected === 4 ?
                    <>
                    <div className="col-12 row" style={{textAlign: 'center'}}>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 1})}>Общая информация</span>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 2})}>Кому можно прививаться</span>
                        <span className="InfoText col-12 col-lg-3" onClick={()=>this.setState({selected: 3})}>СпутникV</span>
                        <span className="Selected col-12 col-lg-3" onClick={()=>this.setState({selected: 4})}>После вакцинации</span>
                    </div>
                    </>:   <></> 
            }
            {
                this.state.selected === 1?
                <>
                    <QA q={0}/>
                    
                </>:
                this.state.selected === 2?
                <>
                    <QA q={6}/>
                    
                </>:
                this.state.selected === 3?
                <>
                    <QA q={10}/>
                </>:
                this.state.selected === 4?
                <>
                    <QA q={7}/>
                    <QA q={8}/>
                </>:
                <></>
            }
            </div>
         );
    }
}
 
export default FAQBody;