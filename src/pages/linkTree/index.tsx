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
                        {/*<Link to="/allanalisys"><li>Análise Completa</li></Link>*/}
                        <Link to="/biotypeAnalysis"><li>Análise de Estilo e Biótipo</li></Link>
                        <Link to="/colorAnalysis"><li>Análise de Coloração</li></Link>
                        <Link to="/closetAnalysis"><li>Análise de Guarda-roupa</li></Link>
                        <Link to="/personalShopper"><li>Personal Shopper</li></Link>
                        <Link to="/lookMontages"><li>Montagem de Looks</li></Link>
                        <a href="https://wa.me/5533998311785?text=Olá, quero saber mais sobre a consultoria!"><li style={{ backgroundColor: '#00e676' }}>Fale Comigo no WhatsApp</li></a>
                        {/*<Link to="/store"><li>Loja</li></Link>*/}
                    </ul>
                </div>
                <div className="footer">&copy; Produzido com <span>❤</span> por <a href="https://brunoventura123.github.io/bruno-portifolio/" target="_blank" rel='noreferrer'>Bruno Ventura</a></div>

            </div>
        </C.Container>
    )
}