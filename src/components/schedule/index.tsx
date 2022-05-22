import * as C from './style'


type Props = {
    image: string
}

export const Schedule = ({ image }: Props) => {
    return (
        <C.Container>
            <div className="area">
                <div className="img">
                    <img src={image} alt="" />
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