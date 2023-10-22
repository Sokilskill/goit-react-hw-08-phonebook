import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import MainTitle from 'components/MainTitle/MainTitle';
import { Box, Container } from '@chakra-ui/react';

const ContactsPage = () => {
  return (
    <Box as="section" py={6}>
      <Container maxW="lg">
        <MainTitle title="Phonebook" />
        <ContactForm />
        <MainTitle title="Contacts" />
        <Filter />
        <ContactList />
      </Container>
    </Box>
  );
};
export default ContactsPage;
