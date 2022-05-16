import * as C from './style'
import She from '../../assets/images/she.png'
import { Link } from 'react-router-dom'

export const LinkTree = () => {
    return (
        <C.Container>
            <div className="container">
                <div className="ketlinInfo">
                    <div><img src={She} alt="" /></div>
                    <p className="name">Katheriny Ventura</p>
                    <p className="desc">Consultora de Imagem</p>

                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/biotypeAnalysis">Análise de Estilo e Biótipo</Link></li>
                        <li><Link to="/colorAnalysis">Análise de Coloração</Link></li>
                        <li><Link to="/closetAnalysis">Análise de Guarda-roupa</Link></li>
                        <li><Link to="/personalShopper">Personal Shopper</Link></li>
                        <li><Link to="/lookMontages">Montagem de Looks</Link></li>
                    </ul>
                </div>
                <div className="footer">&copy; Produzido com <span>❤</span> por <a href="https://brunoventura123.github.io/bruno-portifolio/" target="_blank">Bruno Ventura</a></div>

            </div>
        </C.Container>
    )
}