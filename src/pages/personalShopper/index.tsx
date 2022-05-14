import * as C from './style'
import Sapato from '../../assets/images/sapato.png'
import { Header } from '../../components/header'
import { Banner } from '../../components/banner'
import { Footer } from '../../components/footer'
import { Zap } from '../../components/zap'

export const PersonalShopper = () => {
    return (
        <C.Container>
            <Header img={Sapato} />
            <Banner text="Personal Shopper" />
            <Footer />
            <Zap />
        </C.Container>
    )
}