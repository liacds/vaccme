import React, { Component } from 'react';
import plusIcon from '../assets/images/plusicon.png';
import minusIcon from '../assets/images/minusicon.png'

class QA extends Component {
    state = { 
        isOpen: false,
    }
    render() { 
        return (
            <>
            {!this.state.isOpen ? 
                <div className="QAnotOpen col-12">
                    <div className="QuestionRow">
                    {
                        this.props.q === 0 ? <span className="Question">Зачем нужно вакцинироваться?</span> :
                        this.props.q === 1 ? <span className="Question">Зачем нужно прививаться?</span> :
                        this.props.q === 2 ? <span className="Question">Общая информация</span> :
                        this.props.q === 3 ? <span className="Question">Правила вакцинирования</span> :
                        this.props.q === 4 ? <span className="Question">Требование к документам</span> :
                        this.props.q === 5 ? <span className="Question">Ограничения</span> :
                        this.props.q === 6 ? <span className="Question">Кому можно вакцинироваться?</span> :
                        this.props.q === 7 ? <span className="Question">Что нужно делать после вакцинации?</span> :
                        this.props.q === 8 ? <span className="Question">Какие побочные эффекты?</span> :
                        this.props.q === 9 ? <span className="Question">Что если я уже переболел? Нужна ли мне прививка?</span> :
                        this.props.q === 10 ? <span className="Question">СпутникВ</span> :
                        <></>
                    }
                        <button onClick={()=>this.setState({isOpen: true})}>
                            <img src={plusIcon} alt='plusIcon'></img>
                        </button>
                    </div>
                </div>
            :
                <div className="QAOpen col-12">
                    <div className="QuestionRow">
                        {
                            this.props.q === 0 ? <span className="Question">Зачем нужно вакцинироваться?</span> :
                            this.props.q === 1 ? <span className="Question">Зачем нужно прививаться?</span> :
                            this.props.q === 2 ? <span className="Question">Общая информация</span> :
                            this.props.q === 3 ? <span className="Question">Правила вакцинирования</span> :
                            this.props.q === 4 ? <span className="Question">Требование к документам</span> :
                            this.props.q === 5 ? <span className="Question">Ограничения</span> :
                            this.props.q === 6 ? <span className="Question">Кому можно вакцинироваться?</span> :
                            this.props.q === 7 ? <span className="Question">Что нужно делать после вакцинации?</span> :
                            this.props.q === 8 ? <span className="Question">Какие побочные эффекты?</span> :
                            this.props.q === 9 ? <span className="Question">Что если я уже переболел? Нужна ли мне прививка?</span> :
                            this.props.q === 10 ? <span className="Question">СпутникВ</span> :
                            <></>
                        }
                        <button onClick={()=>this.setState({isOpen: false})}>
                            <img src={minusIcon} alt='minusIcon'></img>
                        </button>
                    </div>
                    {
                        this.props.q === 0 ? <span className="Answer">Чтобы снизить циркуляцию вируса в обществе, защитить себя, и тех, кто не может привиться, чтобы пандемия закончилась</span> :
                        this.props.q === 1 ? <span className="Answer">Прививка - самый надежный способ защитить себя и своих близких от тяжелого течения Covid-19. Ваш организм будет знаком с вирусом и в случае заражения сможет легко и быстро защитить вас.</span> :
                        this.props.q === 2 ? <span className="Answer">Спутник V или Гам-КОВИД-Вак -  российская вакцина для профилактики коронавирусной инфекции. Это векторная вакцина, задача которой является доставлять кусочек генетического материала вируса, который кодирует S-шип. Препарат состоит из двух компонентов, а в состав каждого из которых входит рекомбинантный аденовирусный вектор.</span> :
                        this.props.q === 3 ? <span className="Answer">Никаких особых правил придерживаться не нужно. Хороший практикой является не употреблять алкогольные напитки перед вакцинацией</span> :
                        this.props.q === 4 ? <span className="Answer">С собой необходимо иметь удостоверение личности</span> :
                        this.props.q === 5 ? <>
                                <span className="Answer">Противопоказания требуют очной консультации с врачом и решаются индивидуально. Нужно разделять относительные противопоказания от абсолютных, даже при определенных заболеваниях вакцинация возможна, если состояние человека позволяет.</span>
                                <span className="Answer" style={{fontWeight: 'bold'}}>К противопоказаниям относятся:</span>
                                <span className="Answer"> • гиперчувствительность к какому-либо компоненту вакцины или вакцины, содержащей аналогичные компоненты;</span>
                                <span className="Answer"> • тяжелые аллергические реакции в анамнезе;</span>
                                <span className="Answer"> • беременность и период грудного вскармливания;</span>
                                <span className="Answer"> • возраст до 18 лет (в связи с отсутствием данных об эффективности и безопасности). </span>
                                <span className="Answer">Если на этапе подготовки пациент имеет острые инфекционные и неинфекционные заболевания, обострение хронических заболеваний, вакцинацию проводят через 2–4 недели после выздоровления или ремиссии.</span>
                                <span className="Answer">При не тяжелых ОРВИ, острых инфекционных заболеваниях ЖКТ вакцинацию проводят после нормализации температуры</span>
                        </> :
                        this.props.q === 6 ? <span className="Answer">У каждой конкретной вакцины этот список свой, здесь вы сможете ознакомиться с официальными противопоказаниями для вакцины Спутник V</span> :
                        this.props.q === 7 ? <span className="Answer">Сразу после введения вакцины, вы должны какое то время находиться под пресмотром врачей, для исключения аллергической реакции. Также врачи советуют в этот день не садится за руль, воздержаться от алкоголя следующие пару дней. Один-два дня лучше не мочить и не тереть место инъекции и избегать возможного переохлаждения.</span> :
                        this.props.q === 8 ? <span className="Answer">Возможна легкая слабость, дискомфорт в мышцах, возможное повышение температуры, гораздо реже - легкий озноб, тошнота. </span> :
                        this.props.q === 9 ? <span className="Answer">Тут нужно учитывать два случая. Первый вы переболели совсем недавно, в этом случае от вакцины стоит воздержаться и поставить ее через пару месяцев. Во втором же случае, антитела выработанные вашим организмом против борьбы с короновирусом уже исчезли, поэтому вам стоит сделать 2-этапную вакцинацию. </span> :
                        this.props.q === 10 ? <span className="Answer">Российская вакцина для профилактики коронавирусной инфекции. Это векторная вакцина, задача которой является доставлять кусочек генетического материала вируса, который кодирует S-шип. Препарат состоит из двух компонентов, а в состав каждого из которых входит рекомбинантный аденовирусный вектор. </span> :
                        <></>
                    }
                </div>
            }    
            </> 
         );
    }
}
 
export default QA;