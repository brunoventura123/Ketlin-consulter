import * as C from './style'
import Banner4 from '../../assets/images/Banner5.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'
import { TextImage } from '../../components/textImage'
import { Schedule } from '../../components/schedule'
import prov from '../../assets/images/S1.png'

export const PersonalShopper = () => {
    return (
        <C.Container>
            <Header img={Banner4} />
            <Banner text="Personal Shopper" />
            <TextImage text1='' text2='' text3='' img1='' img2='' img3='' />
            <Schedule image={prov} />
            <Footer />
            <Zap />
        </C.Container>
    )
}