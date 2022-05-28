import * as C from './style'

type Props = {
    text1: string;
    text2: string
    text3?: string
    img1: string
    img2: string
    img3?: string
}

export const TextImage = ({ text1, text2, text3, img1, img2, img3 }: Props) => {
    return (
        <C.Container>
            <div className="info">
                <div className="text">{text1}</div>
                <div className="image">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="info reverse">
                <div className="image">
                    <img src={img2} alt="" />
                </div>
                <div className="text">{text2}</div>
            </div>
            <div className="info">
                <div className="text">{text3}</div>
                <div className="image">
                    <img src={img3} alt="" />
                </div>
            </div>
        </C.Container>
    )
}