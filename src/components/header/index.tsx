import * as C from './style';
import She from '../../assets/images/she.png'
import { useState } from 'react';

type Props = {
    img: string
}

export const Header = ({ img }: Props) => {

    const [moves, setMoves] = useState(false)

    function moveInfo() {
        let scroll = window.scrollY
        if (scroll >= 50) {
            setMoves(true)
        }
    }
    window.addEventListener('scroll', moveInfo)


    return (
        <C.Container move={moves} img={img}>
            <div className="bg">
                <div className="logo">KATHERINY VENTURA</div>
                <p className="consulter">Consultora de Imagem</p>
            </div>
            <div className="she-info">
                <div className="photo-text">
                    <img src={She} alt="She" />
                    <div className="she-text"><div className="margin"> <span>Olá</span> <br /> eu sou <br /> Katheriny Ventura! <br /> <p className='font-italic'> Sou consultora de imagem, formada em Gestão de Recursos Humanos, casada e apaixonada por ajudar meus clientes a descobrirem sua melhor versão!</p></div></div>
                </div>

            </div>
        </C.Container>
    )
}