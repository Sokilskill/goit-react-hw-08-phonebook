import React from 'react';
import {
  Heading,
  Text,
  Button,
  Container,
  Box,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box as="section" py={[10, 40]}>
      <Container maxW="lg" textAlign="center">
        <VStack spacing={4}>
          <Heading as="h1" fontSize={['32px', '36px']}>
            404 | Page Not Found
          </Heading>
          <Text>You just hit a route that doesn't exist... the sadness.😢</Text>
          <Button
            as={RouterLink}
            to="/"
            aria-label="Back to Home"
            bg="#319795"
            color="rgb(255, 255, 255)"
            variant="changeBg"
            _hover={{ bg: '#2C7A7B' }}
          >
            Back to Home
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default NotFound;
