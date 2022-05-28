import * as C from './style'
import Banner3 from '../../assets/images/Banner3.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'
import { TextImage } from '../../components/textImage'
import Guarda1 from '../../assets/infoImage/guarda1.jpg'
import Guarda2 from '../../assets/infoImage/guarda2.jpg'
import Guarda3 from '../../assets/infoImage/guarda3.png'
import { Schedule } from '../../components/schedule'
import Consulter from '../../assets/images/S1.png'

export const ClosetAnalysis = () => {
    let text = [
        "O Closet Cleaning é uma limpeza no guarda-roupa. Nesse processo é analisado peça por peça, para ver o que valoriza o biótipo e estilo pessoal. Em conversa, estudaremos peças que permanecem, peças que precisam de ajustes e peças para doações. ",
        "O benefício de ter um armário com roupas adequadas e assertivas. O momento de se vestir vai ser mais eficaz e rápido, gerando economia de dinheiro e tempo, porque será mais fácil identificar exatamente o que precisa na hora de comprar, evitando gastos desnecessários.",
        "As roupas irão se multiplicar, assim as combinações certas te darão mais opções na hora de se vestir. Com isso você saberá exatamente o que tem no seu guarda-roupa e como mantê-lo sempre atualizado."
    ]

    return (
        <C.Container>
            <Header img={Banner3} />
            <Banner text="Análise de guarda-roupa" />
            <TextImage text1={text[0]} text2={text[1]} text3={text[2]} img1={Guarda3} img2={Guarda1} img3={Guarda2} />
            <Schedule image={Consulter} theme="a análise de Guarda-roupa!" />
            <Footer />
            <Zap theme="a análise de Guarda-roupa!" />
        </C.Container>
    )
}