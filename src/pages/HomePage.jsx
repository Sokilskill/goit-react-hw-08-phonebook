import { Box, Container, Heading } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box as="section" py={20}>
      <Container maxW="2xl">
        <Heading as="h1" size="xl" textAlign="center">
          Вітаю в додатку Phonebook
        </Heading>
      </Container>
    </Box>
  );
};
export default HomePage;
