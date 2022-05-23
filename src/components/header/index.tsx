import * as C from './style';
import She from '../../assets/images/she.png'
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png'

type Props = {
    img: string
}

export const Header = ({ img }: Props) => {

    const [moves, setMoves] = useState(false)

    useEffect(() => {
        setMoves(true)
    }, [])


    return (
        <C.Container move={moves} img={img}>
            <div className="bg">
                <img src={logo} alt="" />
            </div>
            <div className="she-info">
                <div className="photo-text">
                    <img src={She} alt="She" />
                    <div className="she-text"><div> <span>Olá</span> <br /> eu sou <br /> <span className='ketlin'>Katheriny Ventura!</span> <br /> <p>Formada em Consultoria de imagem e Personal Stylist, apaixonada por moda, tendo como foco ajudar mulheres a encontrar a sua melhor versão através do autoconhecimento e a se sentirem satisfeitas com sua imagem.</p></div></div>
                </div>

            </div>
        </C.Container>
    )
}