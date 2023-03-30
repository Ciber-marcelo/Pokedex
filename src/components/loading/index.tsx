import loading from "../../assets/loading.gif"
import { Container, Image } from "./styles"

export function Loading() {
    return (
        <Container>
            <Image src={loading} alt="Loading" />
        </Container>
    )
}