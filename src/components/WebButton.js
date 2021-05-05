import webIcon from '../assets/images/webicon.png'
import { useHistory } from "react-router-dom";

function WebButton(props){
    let history = useHistory();
    function HandleClick(){
        history.push(`/medorg/${props.pk}`);
    }
    if(props.medBody){
        return( 
            <button className="Web-Button col-12 col-lg-5" onClick={HandleClick}>
                <img src={webIcon} alt='webIcon'></img>
                <span className="col-7 WebText">Вебсайт</span>
            </button>
        )
    }
    else{
        return(
            <button className="Web-Button col-12 col-lg-3" onClick={HandleClick}>
                <img src={webIcon} alt='webIcon'></img>
                <span className="col-7 WebText">Вебсайт</span>
            </button>
        )
    }


}

export default WebButton;