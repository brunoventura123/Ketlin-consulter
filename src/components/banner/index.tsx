import * as C from './style'

type Props = {
    text: string
}

export const Banner = ({ text }: Props) => {
    return (
        <C.Container>
            <section className="section2">
                <div className="div">
                    <div className="border">
                        <p>{text}</p>
                    </div>
                </div>
            </section>
        </C.Container>
    )
}