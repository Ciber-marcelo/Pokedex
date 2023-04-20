
import { ButtonPok, NumberPok, NamePok, TypePok, TypeContainer } from "./styles"

type Props = {
    number: any
    name: any
    type: any
    type2: any
    onClick: any
}

export function ButtonPokemon({ number, name, type, type2, onClick }: Props) {
    return (
        <ButtonPok onClick={onClick}>
            <NumberPok>{number}</NumberPok>
            <NamePok>{name}</NamePok>
            <TypeContainer>
                <TypePok type={type}>{type}</TypePok>
                {
                    type2 == null ?
                        null
                        :
                        <TypePok type={type2}>{type2}</TypePok>
                }
            </TypeContainer>
        </ButtonPok>
    )
}