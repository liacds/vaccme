import webIcon from '../assets/images/webicon.png'
    
function WebButton(props){
    if(props.medBody){
        return( 
            <a href={props.medorganization.website} className="Web-Button col-12 col-lg-5">
                <img src={webIcon} alt='webIcon'></img>
                <span className="col-7 WebText">Вебсайт</span>
            </a>
        )
    }
    else{
        return(
            <a href={props.medorganization.website} className="Web-Button col-12 col-lg-3">
                <img src={webIcon} alt='webIcon'></img>
                <span className="col-7 WebText">Вебсайт</span>
            </a>
        )
    }


}

export default WebButton;