import React, { Component } from 'react';
import plusIcon from '../assets/images/plusicon.png';
import minusIcon from '../assets/images/minusicon.png'

class QA extends Component {
    state = { 
        question: 'Зачем нужно вакцинироваться?',
        answer: 'Чтобы снизить циркуляцию вируса в обществе, защитить себя, и тех, кто не может привиться, чтобы пандемия закончилась',
        isOpen: false,
    }
    render() { 
        return (
            <>
            {!this.state.isOpen ? 
                <div className="QAnotOpen col-12">
                    <div className="QuestionRow">
                        <span className="Question">{this.state.question}</span>
                        <button onClick={()=>this.setState({isOpen: true})}>
                            <img src={plusIcon} alt='plusIcon'></img>
                        </button>
                    </div>
                </div>
            :
                <div className="QAOpen col-12">
                    <div className="QuestionRow">
                        <span className="Question">{this.state.question}</span>
                        <button onClick={()=>this.setState({isOpen: false})}>
                            <img src={minusIcon} alt='minusIcon'></img>
                        </button>
                    </div>
                    <span className="Answer">{this.state.answer}</span>
                </div>
            }    
            </> 
         );
    }
}
 
export default QA;