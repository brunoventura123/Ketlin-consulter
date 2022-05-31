import * as C from './style'
import Banner3 from '../../assets/images/Banner3.png'
import Guarda1 from '../../assets/infoImage/guarda1.jpg'
import Guarda2 from '../../assets/infoImage/guarda2.jpg'
import Guarda3 from '../../assets/infoImage/guarda3.png'
import Consulter from '../../assets/images/sguarda.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { TextImage } from '../../components/textImage'
import { Schedule } from '../../components/schedule'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'

export const ClosetAnalysis = () => {
    let text = [
        "O Closet Cleaning é uma limpeza no guarda-roupa. Nesse processo é analisado peça por peça, para ver o que valoriza o biótipo e estilo pessoal. Em conversa, estudaremos peças que permanecem, peças que precisam de ajustes e peças para doações. ",
        "O benefício de ter um armário com roupas adequadas e assertivas. O momento de se vestir vai ser mais eficaz e rápido, gerando economia de dinheiro e tempo, porque será mais fácil identificar exatamente o que precisa na hora de comprar, evitando gastos desnecessários.",
        "As roupas irão se multiplicar, assim as combinações certas te darão mais opções na hora de se vestir. Com isso você saberá exatamente o que tem no seu guarda-roupa e como mantê-lo sempre atualizado."
    ]

    return (
        <C.Container>
            <Header img={Banner3} />
            <Banner text="Análise de Guarda-roupa" />
            <TextImage text1={text[0]} text2={text[1]} text3={text[2]} img1={Guarda1} img2={Guarda2} img3={Guarda3} />
            <Schedule theme="a análise de Guarda-roupa" image={Consulter} />
            <Footer />
            <Zap theme="a análise de Guarda-roupa" />
        </C.Container>
    )
}