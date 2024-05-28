import { Center } from "../Center";
import { Container } from "./style";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Center>
        <span>kelter</span> {currentYear}
      </Center>
    </Container>
  );
};
