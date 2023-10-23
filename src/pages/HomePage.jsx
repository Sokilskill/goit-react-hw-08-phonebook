import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import WeatherForm from 'components/WeatherForm/WeatherForm';

const HomePage = () => {
  return (
    <Box as="section" py={20}>
      <Container maxW="800px">
        <Flex gap="20px" justify="space-between">
          <Box maxW={400}>
            <Heading as="h1" size={['md', 'lg']} textAlign="center" mb={5}>
              Your Personal Contact Management Application
            </Heading>
            <Text textAlign="center">
              Hello, this is your PhoneBook. It is designed to help your brain
              not remember numbers, but write them down. Create your own unique
              account and get the opportunity to record your contacts.
            </Text>
          </Box>

          <Box maxW={500}>
            <WeatherForm />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default HomePage;
