
import { Button } from "./styles"

type Props = {
    onClick: any
}

export function ButtonShiny({ onClick }: Props) {
    return (
        <Button onClick={onClick}/>
    )
}