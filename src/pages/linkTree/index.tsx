import * as C from './style'
import She from '../../assets/images/she.png'

export const LinkTree = () => {
    return (
        <C.Container>
            <div className="container">
                <div className="ketlinInfo">
                    <img src={She} alt="" />
                    <p className="name">Katheriny Ventura</p>
                    <p className="desc">Consultora de Imagem</p>

                </div>
                <div className="links">
                    <ul>
                        <li><a href="/biotypeAnalysis">Análise de Estilo e Biótipo</a></li>
                        <li><a href="/colorAnalysis">Análise de Coloração</a></li>
                        <li><a href="/closetAnalysis">Análise de Guarda-roupa</a></li>
                        <li><a href="/personalShopper">Personal Shopper</a></li>
                        <li><a href="/lookMontages">Montagem de Looks</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer">&copy; Produzido por <a href="https://brunoventura123.github.io/bruno-portifolio/" target="_blank">Bruno Ventura</a></div>
        </C.Container>
    )
}