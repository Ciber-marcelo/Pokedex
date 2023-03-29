import circle from "../../assets/circle.png"
import { Container, Image } from "./styles"

export function Loading() {
    return (
        <Container>
            <Image src={circle} alt="Loading" />
        </Container>
    )
}