
import { Input } from "./styles"

type Props = {
    onChange: any
}

export function InputSearch({ onChange }: Props) {
    return (
        <Input 
            onChange={onChange} 
            type="text"
            placeholder="Name or Number"
        />
    )
}