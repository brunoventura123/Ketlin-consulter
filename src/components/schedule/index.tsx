import * as C from './style'
import Consulter from '../../assets/images/S1.png'

export const Schedule = () => {
    return (
        <C.Container>
            <div className="area">
                <div className="img">
                    <img src={Consulter} alt="" />
                </div>
                <div className="container">
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Agendar minha análise
                    </a>
                </div>
            </div>
        </C.Container>
    )
}