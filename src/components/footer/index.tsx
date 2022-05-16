import * as C from './style'

export const Footer = () => {
    return (
        <C.Container>
            <section>
                <ul>
                    <li><a href="https://www.facebook.com/katheriny.ventura" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/katherinyventura/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="mailto:katherinyventura@gmail.com" target="_blank"><i className="icon ion-logo-googleplus"></i></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=55339999943444&text=Olá, tudo bem. Em que posso ajudar?" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                </ul>
            </section>

            <div className="footer">&copy; Produzido com <span>❤</span> por <a href="https://brunoventura123.github.io/bruno-portifolio/" target="_blank">Bruno Ventura</a></div>
        </C.Container>
    )
}