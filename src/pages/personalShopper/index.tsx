import * as C from './style'
import Banner4 from '../../assets/images/Banner5.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'
import { TextImage } from '../../components/textImage'
import { Schedule } from '../../components/schedule'
import prov from '../../assets/images/S1.png'
import shopper from '../../assets/infoImage/shopper.png'

export const PersonalShopper = () => {
    let text = ["É a etapa na qual iremos a algumas lojas pré-selecionadas, para comprar peças que faltam no guarda-roupa, para ajudar a compor produções mais assertivas, versáteis e práticas. Com o entendimento do estilo pessoal, desejo de imagem, análise do que já possui no guarda-roupa e o orçamento, a gente vai conseguir fazer compras mais inteligentes e eficientes.",
        "Um dos benefícios do Personal Shopper é a otimização do tempo, pois todo o pré shopping é feito com antecedência com peças selecionadas. Realizando compras bem pensadas estando dentro do orçamento e que cumpram a necessidade da cliente. Vou explicando com detalhes o que fica bom no tipo de corpo e como poderá sempre valorizá-lo. Foco no orçamento, sem compras desnecessárias."]
    return (
        <C.Container>
            <Header img={Banner4} />
            <Banner text="Personal Shopper" />
            <TextImage text1={text[0]} text2={text[1]} img1={shopper} img2={shopper} />
            <Schedule image={prov} theme="o Personal Shopper!" />
            <Footer />
            <Zap theme="o Personal Shopper!" />
        </C.Container>
    )
}