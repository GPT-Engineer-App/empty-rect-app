import { Container, Heading, Text, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Welcome to your new React app
        </Heading>
        <Text color={"gray.500"}>Start building your app by editing src/pages/Index.jsx</Text>
      </Box>
    </Container>
  );
};

export default Index;
