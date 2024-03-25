import { useState, useEffect } from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("https://pizza-api.herokuapp.com/api/pizzas?limit=10")
      .then((response) => response.json())
      .then((data) => setPizzas(data.pizzas));
  }, []);

  return (
    <Stack spacing={4}>
      <Heading as="h2" size="xl" textAlign="center">
        Pizza Menu
      </Heading>
      {pizzas.map((pizza) => (
        <Box key={pizza.id} p={4} borderWidth={1} borderRadius="lg">
          <Heading as="h3" size="lg">
            {pizza.name}
          </Heading>
          <Text mt={2}>{pizza.description}</Text>
          <Text mt={2} fontWeight="bold">
            Price: ${pizza.price}
          </Text>
        </Box>
      ))}
    </Stack>
  );
};

export default PizzaList;
