import Link from "next/link";
import { Center } from "../Center";
import { Container, Logo } from "./style";

export const Header = () => (
  <Container>
    <Center>
      <Logo>
      <a href="/">What's Next?!</a>
      </Logo>
    </Center>
  </Container>
);
