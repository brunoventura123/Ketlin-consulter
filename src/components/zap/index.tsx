import * as C from './styles'

type Props = {
    theme: string
}

export const Zap = ({ theme }: Props) => {
    return (
        <C.Container>
            <a href={`https://wa.me/5533998311785?text=Olá, quero saber mais sobre ${theme}`} target="_blank">
                <i className="fa fa-whatsapp"></i>
            </a>
        </C.Container>
    )
}