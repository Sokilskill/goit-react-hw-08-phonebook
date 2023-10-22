import { Spinner, Container } from '@chakra-ui/react';

const Loader = ({ size, padding }) => {
  return (
    <Container maxW="lg" py={padding} textAlign="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size={size}
      />
    </Container>
  );
};

export default Loader;
