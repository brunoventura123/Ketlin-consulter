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
                    <a href="https://wa.me/5533998311785?text=Olá, quero saber mais sobre a Análise de Coloração" target="_blank">
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