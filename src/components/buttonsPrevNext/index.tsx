import { Container } from "./styles"

type Props = {
    onClickPrev: any
    onClickNext: any
    pokemonId: number
}

export function ButtonsPrevNext({ onClickPrev, onClickNext, pokemonId }: Props) {
    return (
        <Container>
            {pokemonId === 1 ?
                <button className="buttonOff">
                    &lt;&lt; Prev
                </button>
                :
                <button className="buttonOn" onClick={onClickPrev} >
                    &lt;&lt; Prev
                </button>
            }
            {pokemonId === 1010 ?
                <button className="buttonOff">
                    Next &gt;&gt;
                </button>
                :
                <button className="buttonOn" onClick={onClickNext} >
                    Next &gt;&gt;
                </button>
            }
        </Container>
    )
}