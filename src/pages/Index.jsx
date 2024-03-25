import { Container } from "@chakra-ui/react";
import PizzaList from "../components/PizzaList";

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <PizzaList />
    </Container>
  );
};

export default Index;
