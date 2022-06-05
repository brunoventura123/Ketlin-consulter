import * as C from './style'
import Banner4 from '../../assets/images/Banner5.png'
import prov from '../../assets/images/sshopper.png'
import shopper from '../../assets/infoImage/shopper.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { TextImage } from '../../components/textImage'
import { Schedule } from '../../components/schedule'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'

export const PersonalShopper = () => {
    let text = ["É a etapa na qual iremos a algumas lojas pré-selecionadas, para comprar peças que faltam no guarda-roupa, para ajudar a compor produções mais assertivas, versáteis e práticas. Com o entendimento do estilo pessoal, desejo de imagem, análise do que já possui no guarda-roupa e o orçamento, a gente vai conseguir fazer compras mais inteligentes e eficientes.",
        `Um dos benefícios do Personal Shopper é a otimização do tempo, pois todo o pré shopping é feito com antecedência com peças selecionadas. Realizando compras bem pensadas estando dentro do orçamento e que cumpram a necessidade da cliente. Vou explicando com detalhes o que fica bom no tipo de corpo e como poderá sempre valorizá-lo. Foco no orçamento, sem compras desnecessárias.`
    ]
    return (
        <C.Container>
            <Header img={Banner4} />
            <Banner text="Personal Shopper" />
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/U5gdk1TzhSE?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <video src="./2.webm" width={560} height={315} loop controls></video>

            </div>
            <TextImage text1={text[0]} text2={text[1]} img1={shopper} img2={shopper} />
            <Schedule theme="a análise de Guarda-roupa" image={prov} />
            <Footer />
            <Zap theme="a análise de Guarda-roupa" />
        </C.Container>
    )
}