import * as C from './style'
import Estilo from '../../assets/images/Banner1.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'
import { TextImage } from '../../components/textImage'
import Bio1 from '../../assets/infoImage/C1.png'
import Bio2 from '../../assets/infoImage/C2.png'
import Bio3 from '../../assets/infoImage/C3.png'
import { Schedule } from '../../components/schedule'
import Consulter from '../../assets/images/S1.png'

export const BiotypeAnalysis = () => {

    let text = ["Nosso primeiro encontro iremos avaliar  rotina, os hábitos, gostos e objetivos. Analisamos as proporções corporais para descobrirmos   as áreas que podemos destacar para equilibrar a silhueta, encontrando assim as peças que favorecem o biótipo.",
        "Entender seu estilo e formato corporal te dá confiança nas escolhas de roupas e acessórios. Consequentemente você se torna mais segura e autônoma no processo de se vestir todos os dias.",
        "Você consegue filtrar e ter no seu armário somente peças que são a sua cara. Você aprenderá as modelagens corretas, estampas e padronagens, cortes específicos das roupas e alguns truques, para que você possa aprender a equilibrar sua silhueta, obtendo uma imagem harmônica."
    ]
    return (

        <C.Container>
            <Header img={Estilo} />
            <Banner text="Análise de Estilo e Biótipo" />
            <TextImage text1={text[0]} text2={text[1]} text3={text[2]} img1={Bio1} img2={Bio2} img3={Bio3} />
            <Schedule image={Consulter} theme="a análise de Estilo e Biótipo" />
            <Footer />
            <Zap theme="a análise de Estilo e Biótipo" />
        </C.Container>

    )
}