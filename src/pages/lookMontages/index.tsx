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

export const LookMontages = () => {
    return (

        <C.Container>
            <Header img={Banner5} />
            <Banner text="Montagem de Looks" />
            <TextImage text1='' text2='' text3='' img1='' img2='' img3='' />
            <Schedule image={prev} />
            <Footer />
            <Zap />
        </C.Container>
    )
}