import { Container } from "./styles"

type Props = {
    onClick: any
    pokemonId: number
}

export function ButtonsPrevNext({ onClick, pokemonId }: Props) {
    return (
        <Container>
            {pokemonId === 1 ?
                <button className="buttonOff">
                    &lt;&lt; Prev
                </button>
                :
                <button className="buttonOn" onClick={onClick} >
                    &lt;&lt; Prev
                </button>
            }
            {pokemonId === 1010 ?
                <button className="buttonOff">
                    Next &gt;&gt;
                </button>
                :
                <button className="buttonOn" onClick={onClick} >
                    Next &gt;&gt;
                </button>
            }
        </Container>
    )
}