import { Banner } from '../banner'
import { Footer } from '../footer'
import { Header } from '../header'
import { Schedule } from '../schedule'
import { TextImage } from '../textImage'
import { Zap } from '../zap'
import * as C from './styles'

type Props = {
    text: string; text1: string; text2: string; text3?: string
    img: string; img1: string; img2: string; img3?: string
    image: string
    theme: string
}


export const Theme = ({ text, text1, text2, text3, img, img1, img2, img3, image, theme }: Props) => {
    return (
        <C.Container>
            <Header img={img} />
            <Banner text={text} />
            <TextImage text1={text1} text2={text2} text3={text3} img1={img1} img2={img2} img3={img3} />
            <Schedule theme={theme} image={image} />
            <Footer />
            <Zap theme={theme} />
        </C.Container>
    )
}