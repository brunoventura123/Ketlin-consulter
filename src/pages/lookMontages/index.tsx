import * as C from './style'
import Sapato from '../../assets/images/sapato.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'
import { TextImage } from '../../components/textImage'
import { Schedule } from '../../components/schedule'
import prev from '../../assets/images/S1.png'
import Banner5 from '../../assets/images/Banner4.png'
import look1 from '../../assets/infoImage/look1.png'
import look2 from '../../assets/infoImage/look2.png'
import look3 from '../../assets/infoImage/look3.png'

export const LookMontages = () => {
    let text = ["Nessa etapa montamos looks com as peças do guarda-roupa que mais combinam com o estilo pessoal e que favorece o biótipo da pessoa. Todos os looks são fotografados e organizados no Dossiê para que a pessoa tenha sempre em mãos um guia prático e personalizado.",
        "As peças do guarda-roupa irão se multiplicar. Você perceberá que tem muito mais roupas e acessórios do que imagina! As combinações certas entre cores, proporções e texturas, lhe darão mais opções de looks!",
        "Você se sentirá mais confortável, atualizada e segura em qualquer ocasião, pois os looks serão montados e adaptados às suas necessidades, sempre respeitando o seu estilo pessoal e as tendências de moda."]
    return (

        <C.Container>
            <Header img={Banner5} />
            <Banner text="Montagem de Looks" />
            <TextImage text1={text[0]} text2={text[1]} text3={text[2]} img1={look1} img2={look2} img3={look3} />
            <Schedule image={prev} theme="a Montagem de Looks!" />
            <Footer />
            <Zap theme="a Montagem de Looks!" />
        </C.Container>
    )
}