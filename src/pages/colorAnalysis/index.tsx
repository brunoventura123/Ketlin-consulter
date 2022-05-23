import * as C from './style'
import Banner2 from '../../assets/images/Banner2.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'
import { TextImage } from '../../components/textImage'
import { Schedule } from '../../components/schedule'
import color1 from '../../assets/infoImage/color1.jpg'
import color2 from '../../assets/infoImage/color2.jpg'
import color3 from '../../assets/infoImage/color3.jpg'
import Color from '../../assets/images/Color.png'

export const ColorAnalysis = () => {
    let text = [
        "Nessa análise identificamos a temperatura da pele, o nível de contraste pessoal através do conjunto pele, olhos e cabelo. Os tecidos são colocados próximo ao rosto, onde é analisado o reflexo que cada uma das cores tem no tom de pele e no contorno do rosto através de metodologias.",
        'Com o teste é possível perceber que as cores corretas vão valorizar a beleza natural, iluminar o rosto, disfarçar marcas de expressão e manchas. Também ficará evidente as cores ruins, aquelas que não valorizam a beleza, que vão deixar a expressão pesada e até apagada, vão ressaltar manchas e marcas de expressão.',
        'Ao final do teste você conhecerá as melhores cores para serem usadas nas roupas, cabelo e maquiagem. Além disso poderá usar estas cores de forma mais estratégica, realçando assim a sua beleza natural!'
    ]
    return (
        <C.Container>
            <Header img={Banner2} />
            <Banner text="Análise de Coloração" />
            <TextImage text1={text[0]} text2={text[1]} text3={text[2]} img1={color1} img2={color2} img3={color3} />
            <Schedule image={Color} theme="a análise de coloração!" />
            <Footer />
            <Zap theme="a análise de coloração!" />
        </C.Container>
    )
}