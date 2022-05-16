import * as C from './style'
import Estilo from '../../assets/images/bg1.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'

export const BiotypeAnalysis = () => {


    return (

        <C.Container>
            <Header img={Estilo} />
            <Banner text="Análise de Estilo e Biótipo" />
            <Footer />
            <Zap />
        </C.Container>

    )
}