import * as C from './style'
import Banner2 from '../../assets/images/Banner2.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'
import { TextImage } from '../../components/textImage'
import { Schedule } from '../../components/schedule'


export const ColorAnalysis = () => {
    return (

        <C.Container>
            <Header img={Banner2} />
            <Banner text="Análise de Coloração" />

            <Schedule />
            <Footer />
            <Zap />
        </C.Container>
    )
}