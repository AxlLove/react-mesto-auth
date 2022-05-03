import succesImage from '../../images/succes.svg'
import failImage from  '../../images/fail.svg'
import {useHistory} from "react-router-dom";
function InfoTooltip  ({isOpen, onClose, successfully}) {
    const history = useHistory();
     const registerRedirect = () => {
         if (successfully) {
             history.push("/sign-in");
         }
         onClose()
     }
    return <section  className={`pop-up ${isOpen ? 'pop-up_opened': ''}`} >
        <div className="pop-up__form-container">
            <button onClick={registerRedirect} type="button" className="pop-up__close-button"/>
            {successfully?
                <>
                    <img className='pop-up__info-tool-image' src={succesImage} alt='Вы успешно зарегистрировались!'/>
                    <p className="pop-up__info-tool-massage">Вы успешно зарегистрировались!</p>
                </>
                :
                <>
                    <img className='pop-up__info-tool-image' src={failImage} alt='что то не так!'/>
                    <p className="pop-up__info-tool-massage">Что-то пошло не так! Попробуйте ещё раз.</p>
                </>}
        </div>
    </section>
}
export default InfoTooltip
